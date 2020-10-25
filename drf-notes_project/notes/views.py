from rest_framework import generics

from .models import Note
from .serializers import NoteSerializer

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all().order_by('-created_at', '-updated_at')
    serializer_class = NoteSerializer


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
