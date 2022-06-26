from django.urls import path
from .views import *

urlpatterns = [
    path('room', RoomView.as_view(),name='home'),
    path('create-room',CreateRoomView.as_view(),name='create'),
    path('get-room',GetRoom.as_view(),name='get-room')
]