from django.db import models


class Team(models.Model):
    image = models.ImageField(
        verbose_name="Photo:"
    )
    name = models.CharField(
        max_length=255,
        verbose_name="Name:"
    )
    department = models.CharField(
        max_length=255,
        verbose_name="Department:"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Our Team"
