from django.db import models

# Create your models here.


class Summary(models.Model):
    summary = models.CharField(max_length=400)
    tech = models.CharField(max_length=100)

    def well(self):
        return self.summary + self.tech

    def __str__(self):
        return self.summary + self.tech + self.well()

