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
    #genre = models.CharField(max_length=1, choices=CHOICES, null=True)
    dob = models.DateField()
    #plot = models.TextField()
    #duration = models.PositiveIntegerField(help_text='in Minutes')
    active = models.BooleanField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    courses = models.ManyToManyField('Course', blank=True)
    #rating = models.PositiveIntegerField()

    def __str__(self):
        return '%s %s' % (self.last_name, self.first_name)


class Course(models.Model):

    name = models.TextField()
    #last_name = models.TextField()
    ects = models.PositiveIntegerField()
    #year_of_birth = models.IntegerField()

    def __str__(self):
        #return '%s %s (%s)' % (self.name, self.last_name, self.year_of_birth)
        return '%s (%s ECTS)' % (self.name, self.ects)
