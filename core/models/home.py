from django.db import models


class HomeCarousel(models.Model):
    image = models.ImageField(
        null=True,
        blank=True,
        verbose_name="Carousel image:"
    )
    title = models.CharField(
        null=True,
        blank=True,
        verbose_name="Title",
        max_length=255
    )
    subtitle = models.CharField(
        null=True,
        blank=True,
        verbose_name="Subtitle",
        max_length=255
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Home Carousel"
