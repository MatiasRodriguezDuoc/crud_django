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
    preferencia: {
      required: true
    },
    pedido: {
      required: true,
      minlength: 3
    },
    mayor:{
      required: true
    }
  },
  messages: {
    "name": {

      required: 'Ingrese su nombre!!!',
      minlength: "El nombre debe tener al menos 3 caracteres"
    },
    email: {
      required: 'Ingrese email!!!',
      email: "Debe tener una sintaxis de email válida"
    },
    pedido: {
      required: "Ingrese su pedido",
      minlength: "El pedido debe tener al menos 3 caracteres"
    },
    mayor:{
      required:""
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