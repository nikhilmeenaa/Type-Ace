from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import RegisterForm


# Create your views here.
def login(request):
    form = RegisterForm()
    return render(request , 'authenticate/loginPage.html' , {"form" : form})


def registration(request):

    if(request.method == "POST"):
        print("Method is POST")
        form = RegisterForm(request.POST)
        if(form.is_valid()):
            form.save()
            return HttpResponseRedirect('/authentication/loginpage')
        else:
            print(form.errors)
    else:
        form = RegisterForm()

    form = RegisterForm()
    print(request.POST)
    return render(request, "authenticate/registrationPage.html", {'form': form} )

def check(request):
    if(request.user.is_authenticated):
        return HttpResponse("Authenticated" )
    return HttpResponse("Unauthenticated" )