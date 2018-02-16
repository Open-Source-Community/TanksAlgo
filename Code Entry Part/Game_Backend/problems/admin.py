from django.contrib import admin
from problems.models import Problems,Test_cases,Result
# Register your models here.

admin.site.register(Problems)
admin.site.register(Result)
admin.site.register(Test_cases)
