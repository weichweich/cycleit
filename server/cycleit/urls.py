from django.urls import path

from cycleit import views

urlpatterns = [
    path('ManufacturesList/', views.ManufacturesList.as_view()),
    path('ManufacturesDetail/<int:pk>', views.ManufacturesDetail.as_view()),
    path('BicycleModelList/', views.BicycleModelList.as_view()),
    path('BicycleModelDetail/<int:pk>', views.BicycleModelDetail.as_view()),
    path('BicycleConfigurationList/', views.BicycleConfigurationList.as_view()),
    path('BicycleConfigurationDetail/<int:pk>',
         views.BicycleConfigurationDetail.as_view()),
    path('FrameList/', views.FrameList.as_view()),
    path('FrameDetail/<int:pk>', views.FrameDetail.as_view()),
    path('WheelList/', views.WheelList.as_view()),
    path('WheelDetail/<int:pk>', views.WheelDetail.as_view()),
    path('BreaksList/', views.BreaksList.as_view()),
    path('BreaksDetail/<int:pk>', views.BreaksDetail.as_view()),
    path('UserList/', views.UserList.as_view()),
    path('UserDetail/<int:pk>', views.UserDetail.as_view()),
]
