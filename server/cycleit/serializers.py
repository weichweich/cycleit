from rest_framework import serializers

from cycleit.models import (BicycleConfiguration, BicycleModel, Breaks, Frame,
                            GroupSet, Manufactures, User, Wheel)


class ManufacturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = '__all__'


class BicycleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BicycleModel
        fields = '__all__'


class BicycleConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BicycleConfiguration
        fields = '__all__'


class FrameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frame
        fields = '__all__'


class WheelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wheel
        fields = '__all__'


class BreaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breaks
        fields = '__all__'


class GroupSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupSet
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
