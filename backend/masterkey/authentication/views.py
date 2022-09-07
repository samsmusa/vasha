from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import exceptions
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404

from authentication import  serializers
from authentication.models import User

from masterkey.mixins.models import CustomPagination

from masterkey.email import send_mail, send_reset_otp, send_otp


class UserRegisterApiView(generics.CreateAPIView):
    serializer_class = serializers.UserRegisterSerializer
    parser_classes = (MultiPartParser, FormParser)


class AdminRegisterApiView(generics.CreateAPIView):
    serializer_class = serializers.AdminRegisterSerializer
    parser_classes = (MultiPartParser, FormParser)



    
class UserBasicInfoUpdateApiView(generics.UpdateAPIView):
    serializer_class = serializers.UserBasicInfoUpdateSerializer
    lookup_field = "id"
    queryset = User
    parser_classes = (MultiPartParser, FormParser)


class UserProfileApiView(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserProfileSerializer
    # parser_classes = (MultiPartParser, FormParser)
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = "id"

class ChangePasswordApiView(generics.UpdateAPIView):
    serializer_class = serializers.ChangePasswordSerializer
    model = User
    permission_classes = [IsAuthenticated]
    
    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(generics.GenericAPIView):
    serializer_class = serializers.LoginSerializer
    queryset = User.objects.all()
    
    def post(self, request, *args, **kwargs):
        """ Login system: User and Merchent both. """
        User = get_user_model()
        username = request.data.get('username')
        password = request.data.get('password')
        response = Response()
        if (username is None) or (password is None):
            raise exceptions.AuthenticationFailed('username and password required')

        user = User.objects.filter(username=username).first()
        if(user is None):
            raise exceptions.AuthenticationFailed('user not found')
        if (not user.check_password(password)):
            raise exceptions.AuthenticationFailed('wrong password')
        
        
        response.data = serializers.LoginSuccessSerializer(user).data
        return response
    
class AdminLogin(Login):
    serializer_class = serializers.AdminLoginSerializer
    def post(self, request, *args, **kwargs):
        """ Login system: User and Merchent both. """
        User = get_user_model()
        username = request.data.get('email')
        password = request.data.get('password')
        response = Response()
        if (username is None) or (password is None):
            raise exceptions.AuthenticationFailed('eamil and password required')

        user = User.objects.filter(email=username).first()
        if(user is None):
            raise exceptions.AuthenticationFailed('user not found')
        if (not user.check_password(password)):
            raise exceptions.AuthenticationFailed('wrong password')
        
        response.data = serializers.LoginSuccessSerializer(user).data
        return response
        
class AccountVerifyApiView(generics.CreateAPIView):
    serializer_class = serializers.AccountVerificationSerializer 
    queryset = User.objects.all()
 

class PasswordResetAPIView(generics.CreateAPIView):
    serializer_class = serializers.PasswordResetSerializer
    queryset = User 







class PasswordResetConfirmAPIView(generics.CreateAPIView):
    serializer_class = serializers.PasswordResetConfirmSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.get(id=serializer.data.get('id'))
            print(user.id)
            if user is None:
                return Response({"details": "User not found !"}, 404)
            

        user.set_password(serializer.data.get("password"))
        user.save()
        print(user)
        return Response( {
            'status': 'success',
            'code': status.HTTP_200_OK,
            'message': 'Password updated successfully'
        })
        



# user_permission branch 
class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserProfileSerializer
    permission_classes = [IsAdminUser]
    pagination_class = CustomPagination


from rest_framework.response import Response
from rest_framework.views import APIView
class CurrentUserApi(APIView):
    def get(self, request, format=None):
        if request.user.is_anonymous:
            return Response({'detail':'user not found', "user":None})
        serializer = serializers.UserProfileSerializer(self.request.user)
        print(self.request.user)
        return Response({"user": serializer.data})