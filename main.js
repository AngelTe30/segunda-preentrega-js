let totalCarrito = 0;
let carrito = [];  // Aquí almacenaremos los productos agregados
const listaproductos = [
    {
        id: 1,
        imagen:"./images/auriculares.jpg",
        nombre: "Auriculares",
        precio: 800,
        stock: 8,
    },
    {
        id: 2,
        imagen: "./images/camara.jpg",
        nombre: "Camara fotografica",
        precio: 1500,
        stock: 9,
    },
    {
        id: 3,
        imagen: "./images/lentes.jpg",
        nombre: "Lentes",
        precio: 750,
        stock: 7,
    },
    {
        id: 4,
        imagen: "./images/smartwatch.jpg",
        nombre: "Smarwatch",
        precio: 2500,
        stock: 10,
    },
    {
        id: 5,
        imagen:"./images/sneakers.jpg",
        nombre: "Sneakers",
        precio: 1300,
        stock: 5,
    },
];

    function mostrarProductos() {
        const contenedorProductos = document.querySelector('.productos');
        listaproductos.forEach(producto => {
            const productoCard = document.createElement('article');
            productoCard.classList.add('card');
            
            productoCard.innerHTML = `
                <div class="image">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <p class="name-product">${producto.nombre}</p>
                <div class="price">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <p id="price-product">${producto.precio}</p>
                </div>
                <div id="contador" class="contador-producto">
                    <button id="minus-button" onclick="modificarCantidad(${producto.id}, -1)">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <div class="cart-control">
                        <p id="add-product-${producto.id}">0</p>
                    </div>
                    <button id="plus-button" onclick="modificarCantidad(${producto.id}, 1)">
                        <i class="fa-regular fa-plus"></i>
                    </button>
                </div>
                <div id="add" class="add-button">
                    <button onclick="agregarAlCarrito(${producto.id})">Add cart</button>
                </div>
            `;
            
            contenedorProductos.appendChild(productoCard);
    });

document.querySelectorAll('.plus-button').forEach(button => {
    button.addEventListener('click', () => actualizarCantidad(button.dataset.id, 1));
});

document.querySelectorAll('.minus-button').forEach(button => {
    button.addEventListener('click', () => actualizarCantidad(button.dataset.id, -1));
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => agregarAlCarrito(button.dataset.id));
});
}

function actualizarCantidad(id, cantidad) {
const cantidadElemento = document.querySelector(`.cantidad[data-id="${id}"]`);
let cantidadActual = parseInt(cantidadElemento.textContent);
cantidadActual = Math.max(0, cantidadActual + cantidad); // Evitar valores negativos
cantidadElemento.textContent = cantidadActual;
}

function agregarAlCarrito(id) {
const cantidadElemento = document.querySelector(`.cantidad[data-id="${id}"]`);
const cantidad = parseInt(cantidadElemento.textContent);
if (cantidad > 0) {
    if (carrito[id]) {
        carrito[id] += cantidad;
    } else {
        carrito[id] = cantidad;
    }
    actualizarContadorCarrito();
    cantidadElemento.textContent = 0; // Reiniciar la cantidad en el contador
} else {
    alert("Seleccione al menos una cantidad antes de agregar al carrito.");
}
}

function actualizarContadorCarrito() {
const totalProductos = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
document.getElementById('count-cart').textContent = totalProductos;
}



mostrarProductos();