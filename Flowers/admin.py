from django.contrib import admin
from .models import Type, Flowers
# Register your models here.

admin.site.register(Flowers)
admin.site.register(Type)