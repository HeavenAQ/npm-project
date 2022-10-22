# Generated by Django 4.1.1 on 2022-10-11 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Language",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("created", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="PageIndex",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name="Article",
            fields=[
                ("title", models.CharField(max_length=200)),
                ("image", models.ImageField(blank=True, null=True, upload_to="")),
                (
                    "order",
                    models.IntegerField(
                        default=None, primary_key=True, serialize=False
                    ),
                ),
                ("description", models.TextField()),
                ("updated", models.DateTimeField(auto_now=True)),
                ("created", models.DateTimeField(auto_now_add=True)),
                (
                    "langs",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="npm_articles.language",
                    ),
                ),
                (
                    "page_index",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="npm_articles.pageindex",
                    ),
                ),
            ],
        ),
    ]