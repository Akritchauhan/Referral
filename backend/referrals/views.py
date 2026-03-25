from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Referral

@api_view(['POST'])
def request_referral(request):
    referral = Referral.objects.create(**request.data)
    return Response({"message": "Requested"})