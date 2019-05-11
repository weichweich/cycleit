from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from cycleit.models import (BicycleConfiguration, BicycleModel, Breaks, Frame,
                            GroupSet, Manufactures, User, Wheel)
from cycleit.serializers import (BicycleConfigurationSerializer,
                                 BicycleModelSerializer, BreaksSerializer,
                                 FrameSerializer, GroupSetSerializer,
                                 ManufacturesSerializer, UserSerializer,
                                 WheelSerializer)

# Manufactures


class ManufacturesList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


class ManufacturesDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


# BicycleModel

class BicycleModelList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


class BicycleModelDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


# BicycleConfiguration

class BicycleConfigurationList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = BicycleConfiguration.objects.all()
    serializer_class = BicycleConfigurationSerializer


class BicycleConfigurationDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = BicycleConfiguration.objects.all()
    serializer_class = BicycleConfigurationSerializer


# Frame


class FrameList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


class FrameDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


# Wheel

class WheelList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Wheel.objects.all()
    serializer_class = WheelSerializer


class WheelDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Wheel.objects.all()
    serializer_class = WheelSerializer


# Breaks


class BreaksList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


class BreaksDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


# User

class UserList(generics.ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    renderer_classes = (JSONRenderer, )
    queryset = User.objects.all()
    serializer_class = UserSerializer
