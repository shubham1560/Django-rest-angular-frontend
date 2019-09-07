from .api import SummaryViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path
# import jobs.views
from django.views.generic import TemplateView


urlpatterns = [
    # path('', jobs.views.home, name="jobs"),
    # path('jobs', JobViewSet.as_view({'get':'list'})),
    path('home', TemplateView.as_view(template_name="summary/summaryFromApi.html")),
]


router = DefaultRouter()
router.register('summary', SummaryViewSet)
# router.register('home', )

urlpatterns += router.urls
