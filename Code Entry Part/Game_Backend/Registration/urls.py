from django.conf.urls import url
from Registration import views

app_name = 'Registration_app'

urlpatterns=[
 url(r'^$',views.home,name='home'),
 url(r'^register', views.register,name='register'),
 url(r'^login',views.user_login,name='login'),
 url(r'^logout',views.user_logout,name='logout'),
]
