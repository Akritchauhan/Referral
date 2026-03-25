from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Referral

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def request_referral(request):
    student = request.user
    employee_id = request.data.get('employee')
    job_id = request.data.get('job')

    if not employee_id or not job_id:
        return Response({"error": "Employee and Job required"}, status=400)

    referral = Referral.objects.create(
        student=student,
        employee_id=employee_id,
        job_id=job_id
    )

    return Response({
        "message": "Referral requested successfully",
        "referral_id": referral.id
    })