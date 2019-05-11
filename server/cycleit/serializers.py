from rest_framework import serializers

from cycleit.models import BicycleModel, Manufactures, Frame, Wheel, Breaks, GroupSet, User


class ManufacturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('name')


class BicycleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('name', 'year', 'manufacturer')


class BicycleConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('model', 'frame', 'wheel', 'group_set', 'group_set')


class FrameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frame
        fields = ('name', )


class WheelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wheel
        fields = ('name', )


class BreaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breaks
        fields = ('name', )


class GroupSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupSet
        fields = ('name', )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email')