from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns =[

    path('add_category/',views.add_category),
    path('show_category/',views.show_category),
    path('update_category/<int:category_id>',views.update_category),
    path('delete_category/<int:category_id>',views.delete_category),

    path('add_college/',views.add_college),
    path('show_colleges/', views.show_college),
    path('update_college/<int:id>', views.update_college),
    path('delete_college/<int:college_id>', views.delete_college),

    path('show_location_college/',views.show_location_college),

    path('show_locations/',views.show_locations),
    path('add_locations/',views.add_locations),

    path('admin_dashboard/',views.admin_dashboard),
    path('add_notification/',views.add_notification),
    path('get_notification/',views.get_notification),

    path('users/',views.get_users),
    path('admins/', views.get_admins),
    path('promote_user/<int:user_id>', views.promote_user),
    path('demote_user/<int:user_id>', views.demote_user),
    path('deactivate_user/<int:user_id>', views.deactivate_user),
    path('activate_users/<int:user_id>', views.activate_users),

    path('user_admission/',views.user_admission),
    path('delete_admission/<int:id>', views.delete_admission),
    path('deletes_admission/<int:id>', views.deletes_admission),


]