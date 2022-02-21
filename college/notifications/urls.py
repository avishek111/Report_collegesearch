from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

app_name = 'notifications'
urlpatterns = [
    path('is_read/<int:pk>/', views.seenNotification, name='is_read'),
    path('add_notifications/', views.add_notifications),
]






