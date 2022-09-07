import imp
from django.urls import path
from ecommerce import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('products', views.ProductAPI, basename='product')
router.register('orders', views.OrderAPI, basename='order')

urlpatterns = [

]+ router.urls