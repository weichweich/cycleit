from django_filters.rest_framework import DjangoFilterBackend
from django.db import models


class Manufactures(models.Model):
    name = models.CharField(max_length=200)


class BicycleModel(models.Model):
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


class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)


class BicycleConfiguration(models.Model):
    """Preset configurations from which the user can choose.
    """
    model = models.ForeignKey(BicycleModel, on_delete=models.CASCADE)
    frame = models.ForeignKey(Frame, on_delete=models.CASCADE)
    wheel = models.ForeignKey(Wheel, on_delete=models.CASCADE)
    breaks = models.ForeignKey(Breaks, on_delete=models.CASCADE)
    group_set = models.ForeignKey(GroupSet, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


class RepairShop(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    rating = models.IntegerField()


class RepairCase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bicycleConfig = models.ForeignKey(BicycleConfiguration, on_delete=models.CASCADE)
    defect = models.CharField(max_length=200)
    price = models.IntegerField(null=True)
    repair_shop = models.ForeignKey(RepairShop, on_delete=models.CASCADE, null=True)

