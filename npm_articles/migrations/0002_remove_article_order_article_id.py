# Generated by Django 4.1.1 on 2022-10-11 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("npm_articles", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="article",
            name="order",
        ),
        migrations.AddField(
            model_name="article",
            name="id",
            field=models.AutoField(default=None, primary_key=True, serialize=False),
        ),
    ]