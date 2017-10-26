from django.conf.urls import url
from AlgoTank import views

app_name = 'AlgoTank'

urlpatterns=[
 url(r'^register' ,views.regester,name=regester)
 
]
