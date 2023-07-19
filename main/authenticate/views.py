from django.db import models
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import RegisterForm
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.views import LoginView


# MODEL FROM API APP FOR USERDATE
# from  models import UserData

UserData = models.ForeignKey('api.models.UserData')


class CustomLoginView(LoginView):
    def get_success_url(self):
        # Custom logic to determine the redirect URL
        # For example, redirect to a specific page based on user roles or conditions
        if self.request.user.is_superuser:
            return '/admin/'
        else:
            return '/authentication/ch/'

# Create your views here.
def login(request):

    if(request.user.is_authenticated):
        return HttpResponseRedirect("/profile")

    form = RegisterForm()
    return render(request , 'authenticate/loginPage.html' , {"form" : form})


def registration(request):

    # print(request.POST)

    if(request.user.is_authenticated):
        return HttpResponseRedirect("/profile")

    if(request.method == "POST"):
        print("Method is POST")
        form = RegisterForm(request.POST)
        if(form.is_valid()):
            # form.save()
            currUser = User()
            currUser.username = form.cleaned_data['username']
            currUser.email = form.cleaned_data['email']
            currUser.password = make_password( form.cleaned_data['password1'] )
            currUser.save()
            return HttpResponseRedirect('/authentication/login')
        else:
            print(form.errors)
    else:
        form = RegisterForm()

    # form = RegisterForm()
    
    return render(request, "authenticate/registrationPage.html", {'form': form} )









def check(request):
    
    if(request.user.is_authenticated):
        user_fields = User._meta.fields
        # Convert the fields to a list of field names
        field_names = [field.name for field in user_fields]
        print(field_names)
        # print(request.user.email)
        return HttpResponse(f"{request.user.email}" )
    return HttpResponse("Unauthenticated" )



