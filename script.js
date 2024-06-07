$(document).ready(function() {
    // Boton modo claro
    $('#modoClaroBtn').click(function() {
      $('body').removeClass('dark-mode');
    });
  
    // Boton modo oscuro
    $('#modoOscuroBtn').click(function() {
      $('body').addClass('dark-mode');
    });
  });
  