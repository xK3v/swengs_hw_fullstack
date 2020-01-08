from django.db import models


class Department(models.Model):

    name = models.TextField()
    #capital = models.TextField(null=True)

    def __str__(self):
        return self.name


class Student(models.Model):

    CHOICES = (
        ('m', 'male'),
        ('f', 'female'),
        ('o', 'other')
    )

    last_name = models.TextField()
    first_name = models.TextField()
    gender = models.CharField(max_length=1, choices=CHOICES)
    dob = models.DateField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    active = models.BooleanField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    courses = models.ManyToManyField('Course', blank=True)


    def __str__(self):
        return '%s %s' % (self.last_name, self.first_name)


class Course(models.Model):

    name = models.TextField()
    ects = models.PositiveIntegerField()
    sws = models.PositiveIntegerField()
    description = models.TextField()
    active = models.BooleanField()

    def __str__(self):
        return '%s (%s ECTS)' % (self.name, self.ects)
