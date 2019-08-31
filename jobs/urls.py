from .api import JobApi
from django.urls import path
import jobs.views

urlpatterns = [
    path('', jobs.views.home, name="jobs"),
    path('jobs', JobApi.as_view())
]
