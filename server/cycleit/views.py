from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from cycleit.models import (BicycleConfiguration, BicycleModel, Breaks, Frame,
                            GroupSet, Manufactures, User, Wheel, RepairCase, RepairShop)
from cycleit.serializers import (BicycleConfigurationSerializer,
                                 BicycleModelSerializer, BreaksSerializer,
                                 FrameSerializer, GroupSetSerializer,
                                 ManufacturesSerializer, UserSerializer,
                                 WheelSerializer, RepairCaseSerializer, RepairShopSerializer)

# Manufactures


class ManufacturesList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


class ManufacturesDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


# BicycleModel

class BicycleModelList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


class BicycleModelDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', 'manufacturer')
    renderer_classes = (JSONRenderer, )
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


# BicycleConfiguration

class BicycleConfigurationList(generics.ListCreateAPIView):
    filterset_fields = ('id', 'user')
    renderer_classes = (JSONRenderer, )
    queryset = BicycleConfiguration.objects.all()
    serializer_class = BicycleConfigurationSerializer


class BicycleConfigurationDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = BicycleConfiguration.objects.all()
    serializer_class = BicycleConfigurationSerializer


# Frame


class FrameList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


class FrameDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


# Wheel

class WheelList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Wheel.objects.all()
    serializer_class = WheelSerializer


class WheelDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Wheel.objects.all()
    serializer_class = WheelSerializer


# Breaks


class BreaksList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


class BreaksDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


# User

class UserList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = User.objects.all()
    serializer_class = UserSerializer

# RepairCase

class RepairCaseList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = RepairCase.objects.all()
    serializer_class = RepairCaseSerializer


class RepairCaseDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = RepairCase.objects.all()
    serializer_class = RepairCaseSerializer

# RepairShop

class RepairShopList(generics.ListCreateAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = RepairShop.objects.all()
    serializer_class = RepairShopSerializer


class RepairShopDetail(generics.RetrieveUpdateDestroyAPIView):
    filterset_fields = ('id', )
    renderer_classes = (JSONRenderer, )
    queryset = RepairShop.objects.all()
    serializer_class = RepairShopSerializer
