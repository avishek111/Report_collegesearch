from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib import messages
from .forms import Loginform,createUserForm, ProfileForms
from .auth import unauthenticated_user,admin_only,user_only
from django.contrib.auth.decorators import login_required
from .models import User_profile
from Admin.models import admin_profiles
from Admin.form import Profile_Forms

# Create your views here.
@login_required
def logout_user(request):
    logout(request)
    return redirect('/login')

@unauthenticated_user
def login_user(request):
    if request.method =="POST":
        form = Loginform(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            user = authenticate(request, username = data['username'], password = data['password'])
            if user is not None:
                if user.is_staff:
                    login(request, user)
                    try:
                        if user:
                            admin_profiles.objects.create(user=user, Username=user.username)
                            return redirect('/admin_dashboard')
                    except:
                        return redirect('/admin_dashboard')
                elif not user.is_staff:
                    login(request,user)
                    user_id=data['username']
                    print(user_id)
                    context={
                        'username':user_id
                    }
                    return redirect('/user_dashboard')
            else:
                messages.add_message(request,messages.ERROR,'invalid User credintials')
                return render(request,'account/login.html',{'form_login':form})
    context ={
        'form_login':Loginform,
        'activate_login':'active'
    }
    return render(request,'account/login.html',context)

@unauthenticated_user
def register_user(request):
    if request.method =="POST":
        form = createUserForm(request.POST)
        if form.is_valid():
            user=form.save()
            User_profile.objects.create(user=user, Username=user.username)
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}')
            # messages.add_message(request,messages.SUCCESS,'User Registred SUcesfully')
            return redirect('/login')
        else:
            messages.add_message(request,messages.ERROR,'Unable To Register User')
            return render(request,'account/register.html',{'form_register':form})
    context = {
        'form_register': createUserForm,
        'activate_register': 'active'
    }
    return render(request, 'account/register.html', context)

def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.add_message(request, messages.SUCCESS, 'Password Changed Successfully')
            if request.user.is_staff:
                return redirect('/admins')
            else:
                return redirect('/resort/home')
        else:
            messages.add_message(request, messages.ERROR, 'Please verify the form fields')
            return render(request, 'accounts/pwchange.html', {'password_change_form': form})
    context = {
        'password_change_form': PasswordChangeForm(request.user)
    }
    return render(request, 'accounts/pwchange.html', context)


@login_required
def user_profile(request):
    profile= request.user.user_profile
    if request.method == 'POST':
        form = ProfileForms(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Profile Updated Successfully')
            return redirect('/user_profile')
    context = {
        'form': ProfileForms(instance=profile)
    }
    return render(request, 'account/profile.html', context)

@login_required
@admin_only
def admin_profile(request):
    profile= request.user.admin_profiles
    if request.method == 'POST':
        form = Profile_Forms(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Profile Updated Successfully')
            return redirect('/admin_profile')
    context = {
        'form': Profile_Forms(instance=profile)
    }
    return render(request, 'Admin/admin_profile.html', context)




