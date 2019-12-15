from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from yamod.models import Department, Student, Course
from yamod.serializers import DepartmentOptionSerializer, StudentListSerializer, StudentFormSerializer, CourseOptionSerializer


@swagger_auto_schema(method='GET', responses={200: DepartmentOptionSerializer(many=True)})
@api_view(['GET'])
def department_option_list(request):
    departments = Department.objects.all()
    serializer = DepartmentOptionSerializer(departments, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: CourseOptionSerializer(many=True)})
@api_view(['GET'])
def course_option_list(request):
    courses = Course.objects.all()
    serializer = CourseOptionSerializer(courses, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: StudentListSerializer(many=True)})
@api_view(['GET'])
def students_list(request):
    students = Student.objects.all()
    serializer = StudentListSerializer(students, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=StudentFormSerializer, responses={200: StudentFormSerializer()})
@api_view(['POST'])
def student_form_create(request):
    data = JSONParser().parse(request)
    serializer = StudentFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=StudentFormSerializer, responses={200: StudentFormSerializer()})
@api_view(['PUT'])
def student_form_update(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response({'error': 'Student does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = StudentFormSerializer(student, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: StudentFormSerializer()})
@api_view(['GET'])
def student_form_get(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response({'error': 'Student does not exist.'}, status=404)

    serializer = StudentFormSerializer(student)
    return Response(serializer.data)


@api_view(['DELETE'])
def student_delete(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Department.DoesNotExist:
        return Response({'error': 'Student does not exist.'}, status=404)
    student.delete()
    return Response(status=204)
