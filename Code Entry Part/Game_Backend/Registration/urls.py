from django.conf.urls import url
from Registration import views


urlpatterns=[
 url(r'^$', views.register, name='register'),
]
