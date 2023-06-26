from django.urls import path
from . import views
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',views.home),
    path('productos/', views.listar_productos, name='listar_productos'),
    path('producto/crear/', views.crear_producto, name='crear_producto'),
    path('producto/editar/', views.editar_producto, name='editar_producto'),
    path('producto/eliminar/', views.eliminar_producto, name='eliminar_producto'),
    path('registro/', views.registro, name='registro'),
    path('iniciar_sesion/', views.iniciar_sesion, name='iniciar_sesion'),
    path('cerrar_sesion/', views.cerrar_sesion, name='cerrar_sesion'),
    path('home/', views.home, name='home'),
    path('api/', views.api, name='api'),
    path('contacto/', views.contacto, name='contacto'),
    path('encargar/', views.encargar, name='encargar'),
    path('escencias/', views.escencias, name='escencias'),
    path('repuestos/', views.repuestos, name='repuestos'),
    path('tabacos/', views.tabacos, name='tabacos'),
    path('vaper/', views.vaper, name='vaper'),
    path('accesorios/', views.accesorios, name='accesorios'),
    
    
]
