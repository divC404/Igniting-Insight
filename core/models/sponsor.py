from django.db import models


class Sponsor(models.Model):
    name = models.CharField(
        null=False,
        blank=False,
        max_length=255,
        verbose_name="Sponsor name:"
    )
    logo = models.ImageField(
        null=True,
        blank=True,
        verbose_name="Sponsor logo:"
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name="Sponsor description:"
    )
    website = models.URLField(
        null=True,
        blank=True,
        verbose_name="Sponsor website link:"
    )
    eventSponsoredName = models.CharField(
        null=False,
        blank=False,
        max_length=255,
        verbose_name="Event sponsored:"
    )
    eventSponsoredDescription = models.TextField(
        null=True,
        blank=True,
        verbose_name="Description of the event sponsored:"
    )
    inHomePage = models.BooleanField(
        default=False,
        verbose_name="Display this sponsor on the homepage?",
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Sponsor"
        verbose_name_plural = "Sponsors"
