from django.contrib import admin

from .models import Question
from .models import Article

admin.site.register(Article)
admin.site.register(Question)
