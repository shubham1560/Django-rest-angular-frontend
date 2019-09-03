#For get request only
#from rest_framework.generics import ListAPIView
from .serializers import JobSerializer
from .models import Job


#for all the methods Get, put, post, delete
from rest_framework.viewsets import ModelViewSet


class JobViewSet(ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer



"""For Only HTTP Get Request
class JobApi(ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
"""