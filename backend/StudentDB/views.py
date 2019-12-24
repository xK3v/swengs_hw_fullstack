from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from StudentDB.models import Department, Student, Course
from StudentDB.serializers import DepartmentOptionSerializer, StudentListSerializer, StudentFormSerializer, CourseOptionSerializer, CourseListSerializer, CourseFormSerializer

# Department

@swagger_auto_schema(method='GET', responses={200: DepartmentOptionSerializer(many=True)})
@api_view(['GET'])
def department_option_list(request):
    departments = Department.objects.all()
    serializer = DepartmentOptionSerializer(departments, many=True)
    return Response(serializer.data)

#Course

@swagger_auto_schema(method='GET', responses={200: CourseOptionSerializer(many=True)})
@api_view(['GET'])
def course_option_list(request):
    courses = Course.objects.all()
    serializer = CourseOptionSerializer(courses, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: CourseListSerializer(many=True)})
@api_view(['GET'])
def courses_list(request):
    courses = Course.objects.all()
    serializer = CourseListSerializer(courses, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=CourseFormSerializer, responses={200: CourseFormSerializer()})
@api_view(['POST'])
def course_form_create(request):
    data = JSONParser().parse(request)
    serializer = CourseFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=CourseFormSerializer, responses={200: CourseFormSerializer()})
@api_view(['PUT'])
def course_form_update(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({'error': 'Course does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = CourseFormSerializer(course, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: CourseFormSerializer()})
@api_view(['GET'])
def course_form_get(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({'error': 'Course does not exist.'}, status=404)

    serializer = CourseFormSerializer(course)
    return Response(serializer.data)


@api_view(['DELETE'])
def course_delete(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({'error': 'Course does not exist.'}, status=404)
    course.delete()
    return Response(status=204)

#Student

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
    except Course.DoesNotExist:
        return Response({'error': 'Student does not exist.'}, status=404)
    student.delete()
    return Response(status=204)
