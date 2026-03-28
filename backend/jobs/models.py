from django.db import models
from users.models import User

class Job(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.TextField()
    skills_required = models.JSONField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)