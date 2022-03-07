from django import template
from django.contrib import messages
from django.shortcuts import redirect, render

from account.forms import ProfileForms
from notifications.models import UserObj, Notification
from home.models import Cart
from account.models import User_profile
from Admin.models import admin_profiles as pro


register = template.Library()


@register.filter(name="notifications")
def notifications(user):
    if user.is_authenticated:
        user_obj = UserObj.objects.get(user=user)
        notification = Notification.objects.filter(userobj=user_obj, is_read=False).order_by('-id')
        if notification.exists():
            return notification
        else:
            return None
    else:
        return None


@register.filter
def notification_count(user):
    if user.is_authenticated:
        user_obj = UserObj.objects.get(user=user)
        notification = Notification.objects.filter(userobj=user_obj, is_read=False)
        if notification.exists():
            return notification.count()
        else:
            return 0
    else:
        return 0


@register.filter
def notification_counts(user):
    if user.is_authenticated:
        notification = Cart.objects.filter(user=user)
        if notification.exists():
            return notification.count()
        else:
            return 0
    else:
        return 0

@register.filter
def user_profiles(user):
    if user.is_authenticated:
        notification = User_profile.objects.filter(Username=user)
        if notification.exists():
            return notification
        else:
            return None
    else:
        return None

@register.filter
def admin_profiles(user):
    if user.is_authenticated:
        notification = pro.objects.filter(Username=user)
        if notification.exists():
            return notification
        else:
            return None
    else:
        return None

