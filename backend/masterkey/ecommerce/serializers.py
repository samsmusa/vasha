from rest_framework import serializers
from ecommerce import models
from authentication.serializers import UserProfileSerializer

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Product
    fields = ('id', 'name', 'stock', 'price', 'created_at', 'updated_at', 'image1', 'image2')

class OrderSerializerPost(serializers.ModelSerializer):
  class Meta:
    model = models.Order
    fields = ['product']


class OrderSerializerGet(serializers.ModelSerializer):
  product = ProductSerializer()
  created_by = UserProfileSerializer()
  class Meta:
    model = models.Order
    fields = "__all__"


class OrderSerializerPut(serializers.ModelSerializer):
  class Meta:
    model = models.Order
    fields = ["status"]