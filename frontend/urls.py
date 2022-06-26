from django.urls import path
from .views import home

urlpatterns = [
    path('',home,name='home'),
    path('create',home,name='create'),
    path('join',home,name='join'),
    path('room/<str:roomCode>',home,name='room')
]