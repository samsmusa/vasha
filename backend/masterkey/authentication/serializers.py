from tokenize import group
from rest_framework.response import Response
from rest_framework import serializers
from authentication.models import User
from rest_framework.exceptions import ValidationError
from django.contrib.auth.models import Permission, Group
from django.contrib.auth import password_validation as password_validator
from django.core import exceptions




class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username',
                  'email', 'phone', 'password', 'tokens', 'profile_image')
        extra_kwargs = {
            'password': {'write_only': True},
            'id': {'read_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            try:
                password_validator.validate_password(password) 
                instance.set_password(password)
            except exceptions.ValidationError as e:
                raise serializers.ValidationError({
                    'password':e.messages
                })

         
        instance.save()
        # Add Group
        user_group, created = Group.objects.get_or_create(name='user')
        user_group.user_set.add(instance)
        return instance



class AdminRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username',
                  'email', 'phone', 'password', 'tokens', 'profile_image')
        extra_kwargs = {
            'password': {'write_only': True},
            'id': {'read_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            try:
                password_validator.validate_password(password) 
                instance.set_password(password)
            except exceptions.ValidationError as e:
                raise serializers.ValidationError({
                    'password':e.messages
                })
        instance.is_superuser = True
        instance.is_staff = True
        if password is not None:
            instance.set_password(password)
        instance.save()
        # Add Group
        user_group, created = Group.objects.get_or_create(name='user')
        user_group.user_set.add(instance)
        return instance

class UserBasicInfoUpdateSerializer(serializers.ModelSerializer):
    extra_kwargs = {
        'id': {'read_only': True}
    }
    class Meta:
        model = User
        fields = ('id','age', 'gender', 'country', 'city', 'location')



class ChangePasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField()
    new_password = serializers.CharField()


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class AdminLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
        extra_kwargs = {
            'email':{'required':True}
        }


class LoginSuccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'email', 'tokens')







class AccountVerificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', )

    def create(self, validated_data):
        email = validated_data['email']
        if self.Meta.model.objects.filter(email=email).exists():
            user = User.objects.filter(email=email).first()
            return user

class PasswordResetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', )

    def create(self, validated_data):
        email = validated_data['email']
        if self.Meta.model.objects.filter(email=email).exists():
            user = User.objects.filter(email=email).first()
            return user
        else:
            raise serializers.ValidationError({'details':'user not exist!'})







class UserProfileSerializer(serializers.ModelSerializer):
    extra_kwargs = {
            'id': {'read_only': True},
        }
    full_name = serializers.SerializerMethodField(method_name='get_full_name')
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name','full_name', 'gender', 'email', 'birth_date', 'bio', 'location', 'phone',  'profile_image','is_active', )
    def get_full_name(self, instance:User):
        return instance.name()


class UsernameCheckSerialiezer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('username', ) 
        
class PasswordResetConfirmSerializer(serializers.Serializer):
    password = serializers.CharField()
    id = serializers.IntegerField()