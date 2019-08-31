from rest_framework.generics import ListAPIView
from .serializers import BlogSerializer
from .models import Blog


class BlogApi(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
