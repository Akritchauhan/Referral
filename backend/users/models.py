from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('employee', 'Employee'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    # 🔥 Extra for employee (hirer)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=255, blank=True, null=True)