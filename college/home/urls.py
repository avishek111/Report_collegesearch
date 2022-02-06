from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns =[
    path('',views.front),
    path('user_dashboard/',views.user_dashboard),
    path('filter/', views.filter),
    path('search/', views.search, name="search"),
    path('college_dashboard/', views.college_dashboard),

]