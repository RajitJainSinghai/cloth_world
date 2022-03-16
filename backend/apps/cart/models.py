from django.db import models
from apps.users.models import User
from apps.product.models import Product


class Cart(models.Model):
    class Meta:
        db_table = 'cart'

    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, db_index=True
    )
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, db_index=True
    )
    quantity = models.IntegerField(
        'Quantity', blank=False, null=False, db_index=True, default=0
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )
