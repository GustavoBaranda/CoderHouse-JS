let nombre;
let menuElegido;
let pedidoCliente = []

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
const menu6 = new Menu(6,  "Combo McNifica", 880)
const menu7 = new Menu(7, "Combo Triple Hambueguesa con queso", 1030)

const menus = [menu1, menu2,menu3, menu4, menu5, menu6, menu7]

const usuario = () => {
  do {
    nombre = prompt("Bienvenido a la HomerBurger, cual es su nombre?:");
  } while (nombre === "" || !isNaN(nombre));

  document.getElementById("saludo").innerHTML = `Este es tu pedido ${nombre}`;
};


const menuCliente = () => {
  let compra = "";
  for (const menu of menus) {
    compra +=  `${menu.id}: ${menu.nombre}\n`;
  }
  const eleccionDeMenu = parseInt(
      prompt(`Hola como estas ${nombre}, que tipo de combo deseas llevar 🍔🍟🥤?
        1: Combo Big mac
        3: Combo McDuo
        4: Combo Cuarto de libra con queso 
        5: Combo Doble Cuarto de libra con queso
        6: Combo McNifica
        7: Combo Triple Hambueguesa con queso
      `)
  );

   while (eleccionDeMenu > 7 || eleccionDeMenu < 1) {
    eleccionDeMenu = parseInt(
    prompt(`Hola como estas ${nombre}, que tipo de combo deseas llevar 🍔🍟🥤?
      1: Combo Big mac
      2: Combo McFiesta
      3: Combo McDuo
      4: Combo Cuarto de libra con queso 
      5: Combo Doble Cuarto de libra con queso
      6: Combo McNifica
      7: Combo Triple Hambueguesa con queso
     `)
    );
  }
  return eleccionDeMenu;
}

const llevarMenu = () =>{
  let buscarMenu =  menus.find(
    (element) =>element.id === menuElegido);

    let existe = pedidoCliente.some(element => element.id === menuElegido);
    
    if (existe){
      buscarMenu.cantidad++
    }else {
      buscarMenu.cantidad = 1;
      pedidoCliente.push(buscarMenu)
    }

  const seguir = confirm("desea pedir otro menu?")
 
  if(seguir){
    menuElegido = menuCliente();
    llevarMenu();
  }
    
}

const mostrarMenu = () =>{

  const container = document.getElementById('container')
  const div = document.createElement('div')
  div.className = "pedido";
  container.appendChild(div);

  pedidoCliente.forEach((element) => {
    div.innerHTML += `
    <div class="card">
          <p class="descripcion">${element.nombre}</p>
          <p class="cantidad">${element.cantidad} Un</p>
          <p class="precio">$ ${element.precio}</p>
          <h5 class="subtotal">Subtotal $ ${element.precio * element.cantidad}</h5>
    </div>`;

  })
}

const calcularTotal = () =>{
  let cajaTotal = document.createElement('div')
  cajaTotal.className = "total"

  let total = pedidoCliente.reduce((acumulador, iterador)=> acumulador + iterador.precio * iterador.cantidad, 0);

  cajaTotal.innerHTML = `<h2>El total de compra es : $ ${total}</h2>`
  container.appendChild(cajaTotal)
}

usuario();
menuElegido = menuCliente();
llevarMenu();
mostrarMenu();
calcularTotal();