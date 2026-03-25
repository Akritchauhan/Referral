from django.urls import path
from .views import request_referral

urlpatterns = [
    path('', request_referral),
]