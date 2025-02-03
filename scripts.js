
const botonesAgregar = document.querySelectorAll('.producto button');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});