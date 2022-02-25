from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns =[
    path('',views.front),
    path('user_dashboard/',views.user_dashboard),
    path('faq/', views.faq),
    path('filter/', views.filter),
    path('search/', views.search, name="search"),
    path('college_dashboard/', views.college_dashboard),
    path('user_colleges/',views.user_colleges),
    path('user_college_details/<int:id>',views.user_college_details),
    path('user_wishlist/<int:id>', views.user_wishlist),
    path('my_colleges/', views.show_cart_items),
    path('remove_item/<int:cart_id>', views.remove_cart_item),

]