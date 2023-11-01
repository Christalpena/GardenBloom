from django.shortcuts import render
from .serializer import FlowersSerializer
from .models import Flowers
from rest_framework import viewsets
# Create your views here.

class FlowersView(viewsets.ModelViewSet):
    serializer_class = FlowersSerializer
    queryset = Flowers.objects.all()