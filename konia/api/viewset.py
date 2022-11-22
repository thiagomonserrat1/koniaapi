from rest_framework import viewsets
from konia.api import serializers
from konia import models

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()