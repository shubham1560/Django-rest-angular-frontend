"""dbDriven URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from dbDriven import settings
from django.conf.urls.static import static
from django.conf.urls import url
import jobs.views
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', jobs.views.home, name="home"),
    path('blog/', include('blog.urls')),
    path('jobs/', include('jobs.urls')),
    path('summary/', include('basic_api.urls')),
    # path('jobs/home', TemplateView.as_view(template_name="job/jobsFromApi.html")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
