from .api import JobApi
from django.urls import path
import jobs.views
from django.views.generic import TemplateView

urlpatterns = [
    path('', jobs.views.home, name="jobs"),
    path('jobs', JobApi.as_view()),
    path('home', TemplateView.as_view(template_name = "job/jobsFromApi.html")),
]
