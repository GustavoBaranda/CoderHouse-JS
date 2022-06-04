class Menu {
  constructor(id, nombre, precio, img) {
    this.id = id;  
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const menu1 = new Menu(1, "Big mac", 860, 'img/bigMac.png')
const menu2 = new Menu(2, "McFiesta", 630, 'img/mcfiesta.png')
const menu3 = new Menu(3, "McDuo", 550, 'img/mcDuo.png')
const menu4 = new Menu(4, "Cuarto de libra con queso", 880, 'img/cuartoDeLibra.png')
const menu5 = new Menu(5, "Doble Cuarto de libra con queso", 1040, 'img/dobleCuartoDeLibra.png')
const menu6 = new Menu(6, "McNifica", 880, 'img/mcNifica.png')
const menu7 = new Menu(7, "Triple Hamburguesa con queso", 1030,'img/tripleHamburguesaConQueso.png')
const menu8 = new Menu(8, "Hamburguesa Con Queso", 350, 'img/hamburguesaConQueso.png')
const menu9 = new Menu(9, "McPollo", 580, 'img/mcPollo.png')

const menus = [menu1, menu2,menu3, menu4, menu5,menu6, menu7, menu8, menu9]

const contenedorProductos = document.getElementById('contenedorProductos')

const precioTotal = document.getElementById('precioTotal')

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const contadorCarrito = document.getElementById('contCarrito')

const vaciar = document.getElementById('vaciar')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito')) ?? []
    actualizarCarrito()
  }
})

vaciar.addEventListener('click', () => {
  carrito.length = 0
  const vaciar = document.getElementById('vaciarCarrito')
  actualizarCarrito()
  localStorage.clear()
})

menus.forEach(menu => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <div class="tarjetas" style="max-width: 350px">
    <img src=${menu.img} alt=${menu.nombre} style="width:100%">
    <h2>${menu.nombre}</h2>
    <p class="precio"><b>$ ${menu.precio} </b></p>
    <p><button class="boton" id="agregar${menu.id}">Agregar al Carrito</button></p>
  </div>
  `
  contenedorProductos.appendChild(div)

  const boton = document.getElementById(`agregar${menu.id}`)

  boton.addEventListener('click', () => {
      agregarAlCarrito(menu.id)
      Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        style: {
          background: "#000090",
        },
        
        }).showToast();
  })
})

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)

  if (existe) {
    const prod = carrito.map (prod => {
      if (prod.id === prodId){
        prod.cantidad++
      }
    })
  }else {

    const item = menus.find((prod) =>  prod.id === prodId)
    item.cantidad = 1;
    carrito.push(item)
    console.log(carrito)

  }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML =""; 


  carrito.forEach((prod) => {
    const etiqueta = document.createElement('tr')
    etiqueta.innerHTML =`
       
      <td class="nombreProducto">${prod.nombre}</td>
      <td>$ ${prod.precio}</td>
      <td><span id="cantidad">${prod.cantidad} un</span></td>
      <td>$ ${prod.precio * prod.cantidad}</td>
      <td><button onclick= "eliminarDelCarrito(${prod.id})" class="boton-eliminar">X</button><td>
   
    `
    contenedorCarrito.appendChild(etiqueta)

    localStorage.setItem('carrito', JSON.stringify(carrito))

  })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio * prod.cantidad, 0)
  }

