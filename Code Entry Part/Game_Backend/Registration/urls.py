from django.conf.urls import url
from Registration import views


urlpatterns=[
 url(r'^register/$' ,views.register,name='register'),

]
