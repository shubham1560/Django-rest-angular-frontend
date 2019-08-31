from rest_framework.generics import ListAPIView
from .serializers import JobSerializer
from .models import Job


class JobApi(ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
