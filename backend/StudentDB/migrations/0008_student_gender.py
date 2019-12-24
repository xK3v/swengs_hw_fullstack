# Generated by Django 2.2.7 on 2019-12-24 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentDB', '0007_student_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='gender',
            field=models.CharField(choices=[('m', 'male'), ('f', 'female'), ('o', 'other')], default='o', max_length=1),
            preserve_default=False,
        ),
    ]