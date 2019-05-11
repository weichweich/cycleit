from rest_framework import serializers

from cycleit.models import BycicleModel, Manufactures


class ManufacturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('name')



class BycicleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('name', 'year', 'manufacturer')

class BycicleConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('model', 'frame', 'wheel', 'group_set', 'group_set')