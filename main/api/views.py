from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import json
import pandas as pd
import numpy as np
from datetime import date

word_df = pd.read_csv("words.csv")

from .models import UsersData
# from .models import MyModel


def homePage(request):
    return render(request,"api/homePage.html" )

def getParagraph(request, noofwords = 50):

    randomString = ""

    print(noofwords)
    # if(noofwords)
    for i in range(0,noofwords):
        randomIndex = np.random.randint(0,len(word_df["words"]))
        randomString += word_df["words"][randomIndex] + " "

    response = {
        "paragraph": randomString,
    }
    jsonData = json.dumps(response)
    
    return HttpResponse(jsonData, content_type="application/json")



def aboutPage(request):
    return render(request, 'api/about.html')

def profilePage(request):
    if(request.user.is_authenticated):

        userName = request.user.username
        # print(userName)
        userKaData = UsersData.objects.get( username = userName )
        totalTests = userKaData.totalTests30 + userKaData.totalTests50 + userKaData.totalTests100 + userKaData.totalTests150 + userKaData.totalTests200
        # print(userKaData.username)
        user = userKaData
        
        results = json.loads(userKaData.results)
        print(results[1])
        # avg30 = 1
        # avg50 = 1
        # avg100 = 1
        # avg150 = 1


        if(user.totalTests30):
            avg30 = round(user.totalTests30Sum/user.totalTests30)
        else: 
            avg30 = "-"

        if(user.totalTests50):
            avg50 = round(user.totalTests50Sum/user.totalTests50)
        else: 
            avg50 = "-"

        if(user.totalTests100):
            avg100 = round(user.totalTests100Sum/user.totalTests100)
        else: 
            avg100 = "-"

        if(user.totalTests150):
            avg150 = round(user.totalTests150Sum/user.totalTests150)
        else: 
            avg150 = "-"

        
        return render(request , 'api/profile.html' , {"user" : userKaData , "totalTests": totalTests, "avg30" : avg30, "avg50" : avg50, "avg100" : avg100, "avg150" : avg150, "results" : results})
    else: 
        return HttpResponseRedirect("/authentication/login")

def patterns(request):
    return render(request,"api/homePage.html")


def getPatterns(request):
    randomString = ""

    print(noofwords)
    # if(noofwords)
    for i in range(0,noofwords):
        randomIndex = np.random.randint(0,len(word_df["words"]))
        randomString += word_df["words"][randomIndex] + " "

    response = {
        "paragraph": randomString,
    }
    jsonData = json.dumps(response)
    
    return HttpResponse(jsonData, content_type="application/json")


def sett(request):
    print("Settings")   
    return render(request, "api/settings.html")

def result(request):
    if(request.user.is_authenticated == False):
        return JsonResponse({})

    # console.log(request.POST)
    json_data = json.loads(request.body)
    userName = request.user.username
    words = json_data.get('words')
    wpm  = json_data.get('wpm')
    print(userName , words , wpm)    

    userKaData = UsersData.objects.get( username = userName )
    resultsList = json.loads(userKaData.results)
    current_date = date.today()
    date_string = current_date.strftime('%Y-%m-%d')
    resultsList.append({"words": words , "wpm": wpm, "date" : date_string})
    userKaData.results = json.dumps(resultsList)

    if words == 30:
        userKaData.totalTests30 = userKaData.totalTests30 + 1
        userKaData.totalTests30Sum = userKaData.totalTests30Sum + int(wpm)
        userKaData.best30 = max(userKaData.best30, int(wpm))
    
    elif words == 50 :
        userKaData.totalTests50 = userKaData.totalTests50 + 1
        userKaData.totalTests50Sum = userKaData.totalTests50Sum + int(wpm)
        userKaData.best50 = max(userKaData.best50, int(wpm))
    
    elif words == 100 :
        userKaData.totalTests100 = userKaData.totalTests100 + 1
        userKaData.totalTests100Sum = userKaData.totalTests100Sum + int(wpm)
        userKaData.best100 = max(userKaData.best100, int(wpm))
    
    elif words == 150 :
        userKaData.totalTests150 = userKaData.totalTests150 + 1
        userKaData.totalTests150Sum = userKaData.totalTests150Sum + int(wpm)
        userKaData.best150 = max(userKaData.best150, int(wpm))
    
    else:
        userKaData.totalTests200 = userKaData.totalTests200 + 1
        userKaData.totalTests200Sum = userKaData.totalTests200Sum + int(wpm)
        userKaData.best200 = max(userKaData.best200, int(wpm)) 


    userKaData.save()

    return JsonResponse({})
    


# authentication stuff


from django.db import models
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import RegisterForm
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.views import LoginView




class CustomLoginView(LoginView):
    def get_success_url(self):
        # Custom logic to determine the redirect URL
        # For example, redirect to a specific page based on user roles or conditions
        if self.request.user.is_superuser:
            return '/admin/'
        else:
            return '/ch/'

# Create your views here.
def login(request):

    if(request.user.is_authenticated):
        return HttpResponseRedirect("/profile")

    form = RegisterForm()
    return render(request , 'api/loginPage.html' , {"form" : form})


def registration(request):

    # print(request.POST)
    

    if(request.user.is_authenticated):
        return HttpResponseRedirect("/profile")

    if(request.method == "POST"):
        print("Registration")
        print("Method is POST")
        form = RegisterForm(request.POST)
        # print(form)
        if(form.is_valid()):
            # form.save()
            currUser = User()
            currUser.username = form.cleaned_data['username']
            currUser.email = form.cleaned_data['email']
            currUser.password = make_password( form.cleaned_data['password1'] )
            currUser.save()

            username = form.cleaned_data['username']
        
            currUserData = UsersData()
            currUserData.username = form.cleaned_data['username']
            currUserData.results = json.dumps([])
            currUserData.save()

            return HttpResponseRedirect('/login')
        else:
            print("Form is not valid")
            print(form.errors)
    else:
        form = RegisterForm()

    # form = RegisterForm()
    
    return render(request, "api/registrationPage.html", {'form': form} )




def check(request):
    
    if(request.user.is_authenticated):
        user_fields = User._meta.fields
        # Convert the fields to a list of field names
        field_names = [field.name for field in user_fields]
        print(field_names)
        # print(request.user.email)
        return HttpResponse(f"{request.user.email}" )
    return HttpResponse("Unauthenticated" )


