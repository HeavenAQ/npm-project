from django.urls import path
from . import views

urlpatterns = [
    path('articles/', views.get_articles, name='articles'),
    path('articles/<str:pk>/', views.get_page, name='article'),
]
