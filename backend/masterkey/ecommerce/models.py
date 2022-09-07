from django.db import models

from masterkey.mixins.models import TimeStampMixin, AuthorMixin, AuthorWithTimeStampMixin
# Create your models here.

class Product(AuthorWithTimeStampMixin):
  name = models.CharField(max_length=255, null=False, blank=False)
  stock = models.IntegerField( null=True, blank=True)
  price = models.DecimalField(max_digits=5, decimal_places=2 , null=False, blank=False)
  image1 = models.ImageField(upload_to='product/', null=True, blank=True)
  image2 = models.ImageField(upload_to='product/', null=True, blank=True)

class Order(AuthorWithTimeStampMixin):
  ORDER_STATUS = (
        ('D', 'Delivered'),
        ('P', 'Pending'),
        ('C', 'Cancelled'),
    )
  product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL, related_name='productOrder')
  status = models.CharField(max_length=1, choices=ORDER_STATUS, default='P', null=True, blank=True)
