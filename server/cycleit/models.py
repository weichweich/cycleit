from django.db import models


class Manufactures(models.Model):
    name = models.CharField(max_length=200)


class BycicleModel(models.Model):
    name = models.CharField(max_length=200)
    year = models.IntegerField()
    manufacturer = models.ForeignKey(Manufactures, on_delete=models.CASCADE)
