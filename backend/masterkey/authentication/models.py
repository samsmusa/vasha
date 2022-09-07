from django.db import models

# Create your models here.


from django.contrib.auth.models import AbstractUser
from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import Group

from masterkey.mixins.models import TimeStampMixin, AuthorMixin, AuthorWithTimeStampMixin
# Create your models here.


class User(AbstractUser, TimeStampMixin):
    GENDER = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    email_verified_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True, null=False, blank=False)
    
    
    
    phone = models.CharField(max_length=40, null=True, blank=True)
    profile_image = models.ImageField(upload_to='profile/',null=True, blank=True)
    gender = models.CharField(max_length=2, choices=GENDER, blank=True, null=True)
    birth_date = models.DateField(null=True, blank=True)
    age = models.IntegerField(blank=True, null=True)


    location = models.CharField(max_length=200, null=True, blank=True)
    country_code = models.CharField(max_length=3, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    
    bio = models.TextField(null=True, blank=True)
    
    

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
        
    def name(self):
        return f"{self.first_name} {self.last_name}" 

    def __str__(self) -> str:
        return self.name()
    
    def role(self):
        group = self.groups.first()
        if group is not None:
            return group.name
        return 'No Role'

    

Group.add_to_class('active', models.BooleanField(default=True))
