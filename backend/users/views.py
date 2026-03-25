from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import status

User = get_user_model()

# ✅ Register
@api_view(['POST'])
def register(request):
    data = request.data

    if not data.get('username') or not data.get('password'):
        return Response(
            {"error": "Username and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.create_user(
            username=data['username'],
            password=data['password'],
            role=data.get('role', 'student')
        )
        return Response(
            {"message": "User created successfully"},
            status=status.HTTP_201_CREATED
        )
    except Exception as e:
        return Response({"error": str(e)}, status=400)


# ✅ Get Logged-in User Profile
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    return Response({
        "id": request.user.id,
        "username": request.user.username,
        "role": request.user.role
    })