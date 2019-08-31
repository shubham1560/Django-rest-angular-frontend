from django.db import models


# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=400)
    image = models.ImageField(upload_to="images/")
    pub_date = models.DateField()

    def __str__(self):
        return self.title
