from django.urls import path,include
from .views import FlowersView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'flowers', FlowersView,'flower')

urlpatterns = [
    path('v1/',include(router.urls))
]