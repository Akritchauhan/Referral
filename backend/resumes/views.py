from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Resume

@api_view(['POST'])
def upload_resume(request):
    file = request.FILES.get('file')

    resume = Resume.objects.create(
        user=request.user,
        file=file
    )

    return Response({"message": "Uploaded"})