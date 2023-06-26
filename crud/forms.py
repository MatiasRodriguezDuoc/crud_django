from django import forms
from .models import Producto
from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class ProductoForm(forms.ModelForm):
    imagen = forms.ImageField(required=False)  # Agrega el campo de imagen

    class Meta:
        model = Producto
        fields = ['nombre', 'precio', 'descripcion', 'imagen']

class RegistroForm(UserCreationForm):
    # Puedes personalizar los campos del formulario si es necesario
    # Añadir campos adicionales si lo deseas

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['username', 'password1']  # Campos requeridos para el registro


class LoginForm(AuthenticationForm):
    # Puedes personalizar los campos del formulario si es necesario

    class Meta:
        model = User