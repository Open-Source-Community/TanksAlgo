from django.db import models


class Problems(models.Model):
    problem_id = models.IntegerField()
    problem_statement = models.TextField()

class Test_cases (models.Model):
    test_id = models.IntegerField()
    test_cases = models.TextField()

class Result (models.Model):
    result_id = models.IntegerField()
    result = models.TextField()

