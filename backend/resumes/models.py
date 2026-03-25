from django.db import models
from users.models import User
class Resume(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    file = models.FileField(upload_to='resumes/')
    extracted_skills = models.TextField(blank=True)
    score = models.FloatField(null=True)