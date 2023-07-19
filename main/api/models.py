from django.db import models
import json
# Create your models here.


import json
from django.db import models

class MyModel(models.Model):
    my_list = models.TextField()

    def set_my_list(self, value):
        self.my_list = json.dumps(value)

    def get_my_list(self):
        return json.loads(self.my_list)


class UsersData(models.Model):

    username = models.CharField(max_length = 200 , default = "Hello", null = False, unique = True)
    numer : models.IntegerField(null = True)

    totalTests30 = models.IntegerField(default = 0)
    totalTests50 = models.IntegerField(default = 0)
    totalTests100 = models.IntegerField(default = 0)
    totalTests150 = models.IntegerField(default = 0)
    totalTests200 = models.IntegerField(default = 0)

    totalTests30Sum = models.IntegerField(default = 0)
    totalTests50Sum = models.IntegerField(default = 0)
    totalTests100Sum = models.IntegerField(default = 0)
    totalTests150Sum = models.IntegerField(default = 0)
    totalTests200Sum = models.IntegerField(default = 0)

    best30 = models.IntegerField(default = 0)
    best50 = models.IntegerField(default = 0)
    best100 = models.IntegerField(default = 0)
    best150 = models.IntegerField(default = 0)
    best200 = models.IntegerField(default = 0)

    results = models.JSONField()

    # def set_results(self, value):
    #     self.results = json.dumps(value)

    # def get_results(self):
    #     return json.loads(self.results)