
class Menu {
  constructor(id, nombre, precio) {
    this.id = id;  
    this.nombre = nombre;
    this.precio = precio;
  }
}

const menu1 = new Menu(1, "Combo Big mac", 860)
const menu2 = new Menu(2, "Combo McFiesta", 630)
const menu3 = new Menu(3, "Combo McDuo", 550)
const menu4 = new Menu(4, "Combo Cuarto de libra con queso", 880)
const menu5 = new Menu(5, "Combo Doble Cuarto de libra con queso", 1040)
const menu6 = new Menu(6, "Combo McNifica", 880)
const menu7 = new Menu(7, "Combo Triple Hambueguesa con queso", 1030)

const menus = [menu1, menu2,menu3, menu4, menu5, menu6, menu7]


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
const menusPublicado = document.querySelector('#menus')

const filtrar = ()=> {

  resultado.innerHTML = '';

  const texto = formulario.value.toLowerCase();
  for(let menu of menus){
    let nombre = menu.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1){
      resultado.innerHTML += `
      <div class="card">
        <p class="codigo">Codigo Nro. ${menu.id} </p>  
        <p class="descripcion">${menu.nombre}</p>
        <p class="precio">$ ${menu.precio}</p>
      </div>
      `
    }
  }

  if(resultado.innerHTML === ''){
    resultado.innerHTML += `
    <div class="card">
      <p class="noEncontrado">Producto no encontrado....</p>
    </div>
    `
  }
}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar();
