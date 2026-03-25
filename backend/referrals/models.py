from django.db import models
from users.models import User
class Referral(models.Model):
    student = models.ForeignKey('users.User', related_name='student', on_delete=models.CASCADE)
    employee = models.ForeignKey('users.User', related_name='employee', on_delete=models.CASCADE)
    job = models.ForeignKey('jobs.Job', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, default='pending')