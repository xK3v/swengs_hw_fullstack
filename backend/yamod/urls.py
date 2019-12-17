from django.conf.urls import url
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from django.contrib import admin

#from rest_framework_jwt.views import obtain_jwt_token

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('department/options', views.department_option_list),

    path('student/list', views.students_list),
    path('student/create', views.student_form_create),
    path('student/<int:pk>/get', views.student_form_get),
    path('student/<int:pk>/update', views.student_form_update),
    path('student/<int:pk>/delete', views.student_delete),


    path('course/options', views.course_option_list),
    path('course/list', views.courses_list),
    path('course/create', views.course_form_create),
    path('course/<int:pk>/get', views.course_form_get),
    path('course/<int:pk>/update', views.course_form_update),
    path('course/<int:pk>/delete', views.course_delete),

    
    #url(r'^api-token-auth/', obtain_jwt_token),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
