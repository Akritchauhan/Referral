from django.urls import path
from .views import get_jobs, create_job

urlpatterns = [
    path('', get_jobs),
    path('create/', create_job),
]