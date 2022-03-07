
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    # path('',include('account.urls')),
    path('', include('home.urls')),
    path('',include('Admin.urls')),
    path('', include("account.urls")),
    path('',include("notifications.urls")),
    path('',include("wishlist.urls")),

]
