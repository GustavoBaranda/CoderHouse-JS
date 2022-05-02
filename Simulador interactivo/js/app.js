let compra = "";
let total = 0;
let nombre;

const usuario = () => {
  do {
    nombre = prompt("Bienvenido a la CoderBurger, cual es su nombre?:");
  } while (nombre === "" || !isNaN(nombre));

  document.getElementById("cliente").innerHTML = nombre + " " + "este es tu tiket:";
};


const menuCoderBuger = () => {
  let combos = parseInt(
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

  while (combos > 7 || combos < 1) {
    combos = parseInt(
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

  let combosMc;

  switch (combos) {
    case 1:
      combosMc = "Combo Big mac";
    break;
    case 2:
      combosMc = "Combo McFiesta";
    break;
    case 3:
      combosMc = "Combo McDuo";
    break;
    case 4:
      combosMc = "Combo Cuarto de libra con queso";
    break;
    case 5:
      combosMc = "Combo Doble Cuarto de libra con queso";
      break;
    case 6:
      combosMc = "Combo McNifica";
      break;
    case 7:
      combosMc = "Combo Triple Hambueguesa con queso";
      break;
  }
  return combosMc;
};

const valorCombo = (combo) => {
  if (combo === "Combo Big mac") {
    return 860;
  } else if (combo === "Combo McFiesta") {
    return 630;
  } else if (combo === "Combo McDuo") {
    return 550;
  } else if (combo === "Combo Cuarto de libra con queso") {
    return 880;
  } else if (combo === "Combo Doble Cuarto de libra con queso") {
    return 1040;
  } else if (combo === "Combo McNifica") {
    return 880;
  }else {
    return 1030;
  }
};

const totalAPagar = (combo, precio) => {
  compra += `${combo}🍔🍟🥤 : $${precio}\n`;
  total += precio;
    
  let seguir = confirm("Te gustaria agregar otro combo a la compra 🍔🍟🥤?");

  if (seguir) {
    inicio();
  } else {
    alert(`Su orden es la siguiente: 🍔🍟🥤\n\n${compra}\n Total:💵 $${total}`);

    let pago = parseInt(prompt("Con cuanto abonaria el pedido?💵"));
    
    if (pago > total) {
      alert(`Tu Cambio es $${pago - total}💵\n\nMuchas gracias por su compra!🙏🛒\n\n..::..Que tengas un excelente dia ${nombre}!..::..`);
    } else {
      alert("😱Tu saldo es insuficiente!😱");
      document.getElementById("texto").innerHTML ="Faltaria abonar $";
      document.getElementById("diferencia").innerHTML = pago - total;
    }

    document.getElementById("pago").innerHTML = pago;
    document.getElementById("vuelto").innerHTML = pago - total;
  }
  document.getElementById("total").innerHTML = total;
};

const inicio = () => {
  let combosElegidos = menuCoderBuger();
  let precioCombo = valorCombo(combosElegidos);
  totalAPagar(combosElegidos, precioCombo);
};

usuario();
inicio();
