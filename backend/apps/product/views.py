from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import ProductSerializer
from django.http import JsonResponse
from .models import Product
from config.constants import *
from django_filters.rest_framework import DjangoFilterBackend


class ProductList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


filter_backends = [DjangoFilterBackend, filters.SearchFilter]
filterset_fields = ['category']
search_fields = ['name', 'description']
