# from .api import JobViewSet
# from django.urls import path
# import jobs.views
# from django.views.generic import TemplateView
#
# urlpatterns = [
#     path('', jobs.views.home, name="jobs"),
#     path('jobs', JobViewSet.as_view({'get':'list'})),
#     path('home', TemplateView.as_view(template_name="job/jobsFromApi.html")),
# ]


from .api import JobViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('jobs', JobViewSet)

urlpatterns = router.urls