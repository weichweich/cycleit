from django.urls import path

from cycleit import views

urlpatterns = [
    path('ManufacturesList/', views.ManufacturesList.as_view()),
    path('ManufacturesDetail/', views.ManufacturesDetail.as_view()),
    path('BicycleModelList/', views.BicycleModelList.as_view()),
    path('BicycleModelDetail/', views.BicycleModelDetail.as_view()),
    path('BicycleConfigurationList/', views.BicycleConfigurationList.as_view()),
    path('BicycleConfigurationDetail/',
         views.BicycleConfigurationDetail.as_view()),
    path('FrameList/', views.FrameList.as_view()),
    path('FrameDetail/', views.FrameDetail.as_view()),
    path('WheelList/', views.WheelList.as_view()),
    path('WheelDetail/', views.WheelDetail.as_view()),
    path('BreaksList/', views.BreaksList.as_view()),
    path('BreaksDetail/', views.BreaksDetail.as_view()),
    path('UserList/', views.UserList.as_view()),
    path('UserDetail/', views.UserDetail.as_view()),
]
