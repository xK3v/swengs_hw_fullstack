from django.contrib import admin
from .models import *

class StudentAdmin(admin.ModelAdmin): pass
    #list_filter = ( 'actors__last_name', )


class CourseAdmin(admin.ModelAdmin): pass


class DepartmentAdmin(admin.ModelAdmin): pass


admin.site.register(Student,StudentAdmin)
admin.site.register(Course,CourseAdmin)
admin.site.register(Department,DepartmentAdmin)

