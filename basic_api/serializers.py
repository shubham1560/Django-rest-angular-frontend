from rest_framework import serializers
from .models import Summary


class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = ["id", "summary", "tech"]