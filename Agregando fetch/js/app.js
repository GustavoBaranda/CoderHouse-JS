const contenedorProductos = document.getElementById('contenedorProductos')

const precioTotal = document.getElementById('precioTotal')

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const contadorCarrito = document.getElementById('contCarrito')

const vaciar = document.getElementById('vaciar')

let menus=[]

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

fetch("./menus.json")
  .then((function (resp){
      return resp.json()
  .then((data) =>{ 
    menus = [...data]
      menus.forEach(menu => {
      const div = document.createElement('div')
      div.classList.add('producto')
      div.innerHTML += `
      <div class="tarjetas" style="width: 300px">
        <img class="imgProductos" src=${menu.imagen} alt=${menu.nombre}>
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
            gravity: "bottom",
            position: "right",
            style: {
              background: "#000090",
            },
            
          }).showToast();
      })
    })
  })
}));

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)

  if(existe){
    const prod = carrito.map (prod => {
      if (prod.id === prodId){
        prod.cantidad++
      }
    })
  }else{

    const item = menus.find((prod) =>  prod.id === prodId)
    item.cantidad = 1;
    carrito.push(item)
  }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML =""; 

  carrito.forEach((prod) => {
    const etiqueta = document.createElement('tr')
    etiqueta.innerHTML =`
      <td class="imagenCarrito"><img src="${prod.imagen}" width="60px"></td>
      <td class="nombreCarrito">${prod.nombre}</td>
      <td class="precioCarrito">$ ${prod.precio}</td>
      <td class="cantidadCarrito"><span id="cantidad">${prod.cantidad} un</span></td>
      <td class="precioTotalCarrito">$ ${prod.precio * prod.cantidad}</td>
      <td><button  onclick= "eliminarDelCarrito(${prod.id})" class="boton-eliminar">X</button><td>
    `
    contenedorCarrito.appendChild(etiqueta)

    localStorage.setItem('carrito', JSON.stringify(carrito))

  })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio * prod.cantidad, 0)
}

