from .serializers import SummarySerializer
from .models import Summary
from rest_framework.viewsets import ModelViewSet


class SummaryViewSet(ModelViewSet):
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer

