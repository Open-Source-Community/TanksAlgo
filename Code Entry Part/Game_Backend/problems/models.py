from django.db import models

# Create your models here.
class Problems(models.Model):
    problem_id= models.IntegerField()
    problem_Statment = models.TextField()

class Test_cases (models.Model):
      test_cases = models.TextField()
      test_id = models.IntegerField()

 class Result (models.Model):
       result = models.TextField()
    result_id = models.IntegerField()
