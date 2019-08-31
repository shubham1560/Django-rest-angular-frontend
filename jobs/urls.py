from django.conf.urls import url
from .api import JobApi
from django.urls import path, include
import jobs.views

urlpatterns = [
    path('', jobs.views.home, name="jobs"),
    path('jobs', JobApi.as_view())
]
