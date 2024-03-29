from rest_framework import serializers

from .models import Blog


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ['image', 'body', 'pub_date', 'title', 'id']
