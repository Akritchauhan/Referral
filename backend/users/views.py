from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import status

User = get_user_model()  # ✅ Capital U (best practice)

# ✅ Profile
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    return Response({
        "id": request.user.id,
        "username": request.user.username,
        "role": request.user.role,
        "company_name": request.user.company_name,
        "designation": request.user.designation
    })


# ✅ Register
@api_view(['POST'])
def register(request):
    data = request.data

    username = data.get('username')
    password = data.get('password')
    role = data.get('role', 'student')

    if not username or not password:
        return Response(
            {"error": "Username and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if role not in ['student', 'employee']:
        return Response(
            {"error": "Invalid role"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        company_name = data.get('company_name') if role == 'employee' else None
        designation = data.get('designation') if role == 'employee' else None

        # ✅ FIX HERE
        new_user = User.objects.create_user(
            username=username,
            password=password,
            role=role,
            company_name=company_name,
            designation=designation
        )

        return Response({
            "message": f"{role} registered successfully",
            "role": role
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({"error": str(e)}, status=400)