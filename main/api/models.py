from django.db import models
import json
# Create your models here.


class UsersData(models.Model):
    username = models.CharField(max_length = 200 , null = False, unique = True)

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

    best30 = models.IntegerField(null = True)
    best50 = models.IntegerField(null = True)
    best100 = models.IntegerField(null = True)
    best150 = models.IntegerField(null = True)
    best200 = models.IntegerField(null = True)

    results = models.TextField()

    def set_results(self, value):
        self.results = json.dumps(value)

    def get_results(self):
        return json.loads(self.results)