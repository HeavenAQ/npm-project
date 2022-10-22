from django.db import models

# Create your models here.


class Article(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    title = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True)
    langs = models.ForeignKey("Language", null=False, on_delete=models.CASCADE)
    page_index = models.ForeignKey("PageIndex", null=False, on_delete=models.CASCADE)
    description = models.TextField(blank=False, null=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Language(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class PageIndex(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
