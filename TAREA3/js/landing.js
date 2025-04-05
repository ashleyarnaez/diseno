// Mostrar botón scroll top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('subscriptionForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se envíe el formulario

  const email = document.getElementById('email').value.trim();

  if (!email) {
    alert('Por favor ingresa tu correo electrónico.');
  } else if (!email.includes('@') || !email.includes('.')) {
    alert('Por favor ingresa un correo válido.');
  } else {
    alert('¡Gracias por suscribirte!');
    
    this.reset();
  }
});



