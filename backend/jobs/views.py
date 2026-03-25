from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Job

# ✅ Get all jobs
@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all().values()
    return Response(jobs)


# ✅ Create job (only logged-in users)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_job(request):
    job = Job.objects.create(
        title=request.data.get('title'),
        company=request.data.get('company'),
        description=request.data.get('description'),
        skills_required=request.data.get('skills_required'),
        posted_by=request.user
    )

    return Response({
        "message": "Job created successfully",
        "job_id": job.id
    })