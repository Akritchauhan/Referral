from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Job
from .serializers import JobSerializer


# ✅ Get all jobs (Protected)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_jobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)


# ✅ Create job (Employee = Recruiter)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_job(request):

    # 🔴 FIXED role check
    if getattr(request.user, "role", "").lower() != "employee":
        return Response(
            {"error": "Only employees (recruiters) can post jobs"},
            status=status.HTTP_403_FORBIDDEN
        )

    serializer = JobSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(posted_by=request.user)
        return Response(
            {
                "message": "Job created successfully",
                "job": serializer.data
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)