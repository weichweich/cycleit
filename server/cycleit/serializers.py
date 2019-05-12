from rest_framework import serializers

from cycleit.models import (BicycleConfiguration, BicycleModel, Breaks,
                            ChainName, ForkName, Frame, HandlebarName,
                            Manufactures, RepairCase, RepairShop, User, Wheel)


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RepairShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = RepairShop
        fields = '__all__'


class RepairCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = RepairCase
        fields = '__all__'

class ChainNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChainName
        fields = '__all__'

class HandlebarNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = HandlebarName
        fields = '__all__'

class ForkNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForkName
        fields = '__all__'
