from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import generics

from cycleit.models import (BicycleConfiguration, BicycleModel, Breaks, Frame,
                            GroupSet, Manufactures, User, Wheel)
from cycleit.serializers import (BicycleConfigurationSerializer,
                                 BicycleModelSerializer, BreaksSerializer,
                                 FrameSerializer, GroupSetSerializer,
                                 ManufacturesSerializer, UserSerializer,
                                 WheelSerializer)

# Manufactures


class ManufacturesList(generics.ListCreateAPIView):
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


class ManufacturesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manufactures.objects.all()
    serializer_class = ManufacturesSerializer


# BicycleModel

class BicycleModelList(generics.ListCreateAPIView):
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


class BicycleModelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BicycleModel.objects.all()
    serializer_class = BicycleModelSerializer


# BicycleConfiguration

class BicycleConfigurationModelList(generics.ListCreateAPIView):
    queryset = BicycleConfigurationModel.objects.all()
    serializer_class = BicycleConfigurationSerializer


class BicycleConfigurationModelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BicycleConfigurationModel.objects.all()
    serializer_class = BicycleConfigurationSerializer


# FrameModel


class FrameModelList(generics.ListCreateAPIView):
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


class FrameModelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer


# WheelModel

class WheelModelList(generics.ListCreateAPIView):
    queryset = WheelModel.objects.all()
    serializer_class = WheelSerializer


class WheelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WheelModel.objects.all()
    serializer_class = WheelSerializer


# Breaks


class BreaksList(generics.ListCreateAPIView):
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


class BreaksDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Breaks.objects.all()
    serializer_class = BreaksSerializer


# User

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
