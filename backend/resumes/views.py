from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Resume

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_resume(request):
    file = request.FILES.get('file')

    if not file:
        return Response({"error": "No file provided"}, status=400)

    resume = Resume.objects.create(
        user=request.user,
        file=file
    )

    return Response({
        "message": "Resume uploaded successfully",
        "resume_id": resume.id
    })