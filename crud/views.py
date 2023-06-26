from django.shortcuts import render, redirect
from .models import Producto
from .forms import ProductoForm
from django.shortcuts import get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from .forms import RegistroForm, LoginForm



def home(request):
    return render(request,'pages/home.html')

def api(request):
    return render(request,'pages/api.html')

def accesorios(request):
    return render(request,'pages/accesorios.html')

def contacto(request):
    return render(request,'pages/contacto.html')

def encargar(request):
    return render(request,'pages/encargar.html')

def escencias(request):
    return render(request,'pages/escencias.html')

def repuestos(request):
    return render(request,'pages/repuestos.html')

def tabacos(request):
    return render(request,'pages/tabacos.html')

def vaper(request):
    return render(request,'pages/vaper.html')


def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'crud/listar_productos.html', {'productos': productos})


def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('listar_productos')
    else:
        form = ProductoForm()
    return render(request, 'crud/crear_producto.html', {'form': form})



def editar_producto(request):
    productos = Producto.objects.all()
    if request.method == 'POST':
        producto_id = request.POST.get('id')
        producto = get_object_or_404(Producto, pk=producto_id)
        form = ProductoForm(request.POST, request.FILES, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('listar_productos')
    else:
        form = ProductoForm()
    return render(request, 'crud/editar_producto.html', {'form': form, 'productos': productos})


from django.shortcuts import render, redirect, get_object_or_404
from .models import Producto

def eliminar_producto(request):
    productos = Producto.objects.all()
    if request.method == 'POST':
        producto_id = request.POST.get('id')
        producto = get_object_or_404(Producto, pk=producto_id)
        producto.delete()
        return redirect('listar_productos')
    return render(request, 'crud/eliminar_producto.html', {'productos': productos})




def registro(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Reemplaza 'inicio' con el nombre de tu vista de inicio
    else:
        form = UserCreationForm()
    return render(request, 'accounts/registro.html', {'form': form})

def iniciar_sesion(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # Reemplaza 'inicio' con el nombre de tu vista de inicio
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/iniciar_sesion.html', {'form': form})


def cerrar_sesion(request):
    logout(request)
    return render(request,'pages/home.html')


