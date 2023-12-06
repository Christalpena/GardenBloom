from rest_framework import serializers
from .models import Flowers,Type

class FlowersSerializer(serializers.ModelSerializer):
    type_name = serializers.CharField(source='type.name', read_only=True)


    class Meta:
        model = Flowers
        fields = ['id', 'name', 'price', 'description', 'image', 'size','type','type_name','discount']
