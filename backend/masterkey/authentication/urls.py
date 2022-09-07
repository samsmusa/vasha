from django.urls import path, include
from authentication import views as Uviews
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView, TokenVerifyView)



urlpatterns = [
    path('user/signup/', Uviews.UserRegisterApiView.as_view(), name='user_signup'),
    path('admin/signup/', Uviews.AdminRegisterApiView.as_view(), name='admin_signup'),
    path('admin/login/', Uviews.AdminLogin.as_view(), name='admin_login'),
    path('user/profile/<int:id>/', Uviews.UserProfileApiView.as_view(), name='user_profile'),
    path('account-verify/', Uviews.AccountVerifyApiView.as_view()),
    path('change-password/', Uviews.ChangePasswordApiView.as_view(), name='change-password'),
    path('password-reset/', Uviews.PasswordResetAPIView.as_view(), name='password_reset'),
    path('password-reset-confirm/', Uviews.PasswordResetConfirmAPIView.as_view(), name='password_reset_verify'),
    path('login/', Uviews.Login.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # user_permission branch
    path('user/list/', Uviews.UserListAPIView.as_view()),
    path('user/me', Uviews.CurrentUserApi.as_view())
]
