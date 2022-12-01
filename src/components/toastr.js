/* eslint-disable */
import toastr from 'toastr';

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export function showMessage(type, title, message) {
  toastr[type](message, title)
}

export function showSuccessMessage(message) {
  showMessage("success", "Sucesso", message)
}

export function showErrorMessage(message) {
  showMessage("error", "Erro", message)
}
