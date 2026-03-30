# from django.http import JsonResponse
# from .models import Product, Category
#
# def product_list(request):
#     products = Product.objects.all()
#     data = []
#     for p in products:
#         data.append({
#             'id': p.id,
#             'name': p.name,
#             'price': p.price,
#             'description': p.description,
#             'count': p.count,
#             'is_active': p.is_active,
#             'category': p.category.id
#         })
#     return JsonResponse(data, safe=False)
#
# def product_detail(request, id):
#     p = Product.objects.get(id=id)
#     data = {
#         'id': p.id,
#         'name': p.name,
#         'price': p.price,
#         'description': p.description,
#         'count': p.count,
#         'is_active': p.is_active,
#         'category': p.category.id
#     }
#     return JsonResponse(data)
#
# def category_list(request):
#     categories = Category.objects.all()
#     data = []
#     for c in categories:
#         data.append({
#             'id': c.id,
#             'name': c.name
#         })
#     return JsonResponse(data, safe=False)
#
# def category_detail(request, id):
#     c = Category.objects.get(id=id)
#     data = {
#         'id': c.id,
#         'name': c.name
#     }
#     return JsonResponse(data)
#
# def category_products(request, id):
#     products = Product.objects.filter(category_id=id)
#     data = []
#     for p in products:
#         data.append({
#             'id': p.id,
#             'name': p.name,
#             'price': p.price,
#             'description': p.description,
#             'count': p.count,
#             'is_active': p.is_active,
#             'category': p.category.id
#         })
#     return JsonResponse(data, safe=False)
#

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer