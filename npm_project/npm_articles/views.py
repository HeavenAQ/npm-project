from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/articles/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of articles'
        },
        {
            'Endpoint': '/articles/<page_name>',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def get_articles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_page(request, pk):
    article = Article.objects.filter(page_index__name=pk)
    serializer = ArticleSerializer(article, many=True)
    return Response(serializer.data)
