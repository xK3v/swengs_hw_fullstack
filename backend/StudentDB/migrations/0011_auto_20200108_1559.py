# Generated by Django 2.2.7 on 2020-01-08 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentDB', '0010_auto_20200108_1510'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]