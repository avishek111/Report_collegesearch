from django.shortcuts import redirect

# to check if the user is logged in or not
def unauthenticated_user(view_function):
    def wrapper_function(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('/user_dashboard')
        else:
            return view_function(request, *args, **kwargs)
    return wrapper_function

# give access to admin pages if request comes from admin
# if request is from normal user, red
# irects to user dashboard
def admin_only(view_function):
    def wrapper_function(request, *args, **kwargs):
        if request.user.is_staff:
            return view_function(request, *args, **kwargs)
        else:
            return redirect('/user_dashboard')
    return wrapper_function

# give access to user pages if request comes from user
# if request is from admin user, redirects to admin dashboard
def user_only(view_function):
    def wrapper_function(request, *args, **kwargs):
        if request.user.is_staff:
            return redirect('/admins_dashboard')
        else:
            return view_function(request, *args, **kwargs)
    return wrapper_function