from django.shortcuts import render
from django.http import HttpResponse
import json
import pandas as pd
import numpy as np

word_df = pd.read_csv("words.csv")

# print(word_df["words"][5])

# Create your views here.


def homePage(request):
    return render(request,"api/homePage.html")

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