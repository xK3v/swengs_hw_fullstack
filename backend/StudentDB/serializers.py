from rest_framework import serializers
from .models import Department, Student, Course


class DepartmentOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']

class CourseOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'ects']

class CourseListSerializer(serializers.ModelSerializer):
    #department_name = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ['id', 'name', 'ects']

    #def get_department_name(self, obj):
    #    return obj.department.name if obj.department else ''

class CourseFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class StudentListSerializer(serializers.ModelSerializer):
    department_name = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = ['id', 'last_name', 'first_name', 'gender', 'dob', 'active', 'department_name']

    def get_department_name(self, obj):
        return obj.department.name if obj.department else ''


class StudentFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'