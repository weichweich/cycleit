from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from cycleit.models import BicycleModel, Manufactures, BicycleConfiguration, Frame, Wheel, Breaks, GroupSet, User
from cycleit.serializers import ManufacturesSerializer, BicycleModelSerializer, BicycleConfigurationSerializer, FrameSerializer, WheelSerializer, BreaksSerializer, GroupSetSerializer, UserSerializer


def make_endpoint(model, serializer):
    @csrf_exempt
    def get_all(request):
        """
        List all code snippets, or create a new snippet.
        """
        if request.method == 'GET':
            snippets = model.objects.all()
            serializer = serializer(snippets, many=True)
            return JsonResponse(serializer.data, safe=False)

        elif request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = serializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
    return get_all


manufactures_get_all = make_endpoint(Manufactures, ManufacturesSerializer)
bicyclemodel_get_all = make_endpoint(BicycleModel, BicycleModelSerializer)
bicycleconfig_get_all = make_endpoint(BicycleConfiguration, BicycleConfigurationSerializer)
frame_get_all = make_endpoint(Frame, FrameSerializer)
wheel_get_all = make_endpoint(Wheel, WheelSerializer)
breaks_get_all = make_endpoint(Breaks, BreaksSerializer)
user_get_all = make_endpoint(User, UserSerializer)

