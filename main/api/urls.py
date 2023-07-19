from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("" , views.homePage),
    path("about" , views.aboutPage),
    path('profile', views.profilePage),
    path("getparagraph", views.getParagraph , {"noofwords": 50 }),
    path("getparagraph/<int:noofwords>", views.getParagraph),
    path("patterns", views.patterns),
    path("getpatterns", views.getPatterns),
    path("set", views.sett),
    path("result", views.result),

    # AUTHENTICATION STUFF
    path("ch", views.check),
    path('loginpage' , views.login ) , 
    path("registration" , views.registration, name = "register" ) ,
    path('login/', auth_views.LoginView.as_view(redirect_authenticated_user=True,template_name='api/loginPage.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='api/logout.html'), name='logout'),

]


