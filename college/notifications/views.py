from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from account.auth import unauthenticated_user, admin_only,user_only
from django.shortcuts import render, redirect
from .forms import NotificationForm
from .models import Notification, UserObj
from django.contrib import messages
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required



def add_notifications(request):
    if request.method == "POST":
        form = NotificationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Notification added successfully')
            return redirect("/add_notifications")
        else:
            messages.add_message(request, messages.ERROR, 'Unable to add category')
            return render(request, 'notifications/add_notifications.html', {'add_category': form})
    context = {
        'form_category': NotificationForm,
        'activate_category': 'active'
    }
    return render(request, 'notifications/add_notifications.html', context)


def seenNotification(request, pk):
    if request.user.is_authenticated:
        user_obj = UserObj.objects.get(user=request.user)
        notification_qs = Notification.objects.get(id=pk)
        notification_qs.userobj.remove(user_obj)
        notification_qs.is_read = True
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        return redirect('account:login')


# def seensNotification(request, pk):
#     if request.user.is_authenticated:
#         user_obj = UserObj.objects.get(user=request.user)
#         notification_qs = Notification.objects.get(id=pk)
#         notification_qs.userobj.remove(user_obj)
#         notification_qs.is_read = True
#         return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
#     else:
#         return redirect('account:login')