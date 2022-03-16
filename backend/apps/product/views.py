from django.shortcuts import render
from rest_framework import generics
from .serializers import ProductSerializer
from django.http import JsonResponse
from .models import Product
from config.constants import *


class ProductList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Product.objects.order_by(
        'created_at').reverse().filter(status='active')
    serializer_class = ProductSerializer
