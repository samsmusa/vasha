from django.shortcuts import render

from ecommerce import models as emodels
from ecommerce import serializers as eserializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from masterkey.mixins.models import CustomPagination

# Create your views here.
from django_filters import rest_framework as filters


class ProductFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = emodels.Product
        fields = ['name', 'stock']

class ProductAPI(ModelViewSet):
  queryset = emodels.Product.objects.all()
  serializer_class = eserializers.ProductSerializer
  pagination_class = CustomPagination
  filter_backends = (filters.DjangoFilterBackend,)
  filterset_class = ProductFilter
  parser_classes = [FormParser, MultiPartParser]

  def get_permissions(self):
    if self.request.method in ["GET"]:
      return [AllowAny()]
    return [IsAdminUser()]

class OrderAPI(ModelViewSet):
  queryset = emodels.Order.objects.all()
  serializer_class = eserializers.OrderSerializerPost

  def get_permissions(self):
    if self.request.method in ['POST']:
      return [IsAuthenticated()]
    return [IsAdminUser()]

  def get_serializer_class(self):
    if self.request.method in ["GET"]:
      return eserializers.OrderSerializerGet
    if self.request.method in ['PUT', 'PATCH']:
      return eserializers.OrderSerializerPut
    return eserializers.OrderSerializerPost