$("#contact-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 3
    },
    email: {
      required: true,
      email: true
    },
    Mayor: {
      required: true
    },
    subjet: {
      required: true,
      minlength: 3
    },
    message: {
      required: true,
      minlength: 3
    }
  },
  messages: {
    name: {
      required: 'Ingrese su nombre',
      minlength: 'El nombre debe tener al menos 3 caracteres'
    },
    email: {
      required: 'Ingrese su email',
      email: 'Debe ingresar un email válido'
    },
    Mayor: {
      required: 'Debe ser mayor de edad'
    },
    "subjet": {
      required: 'Ingrese el asunto',
      minlength: 'El asunto debe tener al menos 3 caracteres'
    },
    "message": {
      required: 'Ingrese el contenido del mensaje',
      minlength: 'El contenido del mensaje debe tener al menos 3 caracteres'
    }
  },
  errorPlacement: function (error, element) {
    error.addClass("error-message");
    error.insertAfter(element);
    element.addClass("error-input");
  },
  success: function (label, element) {
    // Restaurar el estilo predeterminado
    $(element).removeClass("error-input");
    $(element).siblings(".error-message").remove();
  }
});

$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault();

    if ($("#contact-form").valid()) {
      $(".alert-success")
        .text("El formulario se envió exitosamente.")
        .fadeIn(500)
        .delay(1500)
        .fadeOut(500, function () {
          window.location.href = "/";
        });
    } else {
      $(".alert-danger")
        .text("El formulario no se puede enviar debido a errores.")
        .fadeIn(500)
        .delay(1500)
        .fadeOut(500);
    }

  });
});
