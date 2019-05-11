from django.db import models


class Manufactures(models.Model):
    name = models.CharField(max_length=200)


class BycicleModel(models.Model):
    name = models.CharField(max_length=200)
    year = models.IntegerField()
    manufacturer = models.ForeignKey(Manufactures, on_delete=models.CASCADE)

class Frame(models.Model):
    name = models.CharField(max_length=200)

class Wheel(models.Model):
    name = models.CharField(max_length=200)

class Breaks(models.Model):
    name = models.CharField(max_length=200)

class GroupSet(models.Model):
    name = models.CharField(max_length=200)

class BycicleConfiguration(models.Model):
    model = models.ForeignKey(BycicleModel, on_delete=models.CASCADE)
    frame = models.ForeignKey(Frame, on_delete=models.CASCADE)
    wheel = models.ForeignKey(Wheel, on_delete=models.CASCADE)
    breaks = models.ForeignKey(Breaks, on_delete=models.CASCADE)
    group_set = models.ForeignKey(GroupSet, on_delete=models.CASCADE)


