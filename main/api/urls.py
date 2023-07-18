from django.urls import path
from . import views

urlpatterns = [
    path("" , views.homePage),
    path("about" , views.aboutPage),
    path('profile', views.profilePage),
    path("getparagraph", views.getParagraph , {"noofwords": 50 }),
    path("getparagraph/<int:noofwords>", views.getParagraph),
    path("patterns", views.patterns),
    path("getpatterns", views.getPatterns),
    path("set", views.sett),
]


