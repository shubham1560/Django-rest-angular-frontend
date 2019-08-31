from django.shortcuts import render
from .models import Blog

# Create your views here.


def bloghome(request):
    blogs = Blog.objects
    print(blogs)
    return render(request, 'blog\\index.html', {'blogs': blogs})
