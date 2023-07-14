from django.urls import path
from . import views

urlpatterns = [
    path("" , views.homePage),
    path("getparagraph", views.getParagraph , {"noofwords": 50 }),
    path("getparagraph/<int:noofwords>", views.getParagraph)
]


