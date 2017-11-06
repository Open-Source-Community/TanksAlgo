from django.conf.urls import url
from problems import views

app_name = 'problems_app'

urlpatterns=[
 url(r'^$',views.DisplayProblem,name='DisplayProblem'),

]
