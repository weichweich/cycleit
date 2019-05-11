from rest_framework import serializers

from cycleit.models import BycicleModel, Manufactures


class ManufacturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manufactures
        fields = ('id', 'title', 'code', 'linenos', 'language', 'style')
