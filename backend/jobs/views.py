from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Job

@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all().values()
    return Response(jobs)

@api_view(['POST'])
def create_job(request):
    job = Job.objects.create(**request.data)
    return Response({"message": "Job created"})