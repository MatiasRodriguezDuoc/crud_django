from django.urls import include, path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # otras URLs del proyecto
    path('', include('crud.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),




]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

