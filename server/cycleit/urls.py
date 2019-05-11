from django.urls import path

from cycleit import views

urlpatterns = [
    path('cycleit/', views.snippet_list),
]

