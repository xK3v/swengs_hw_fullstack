# Generated by Django 2.2.7 on 2019-12-18 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yamod', '0006_auto_20191212_1430'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='active',
            field=models.BooleanField(default=0),
            preserve_default=False,
        ),
    ]
