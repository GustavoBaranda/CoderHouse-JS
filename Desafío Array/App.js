class Deuda {
    constructor(nombre, fecha, monto, cuotas) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.monto = monto;
        this.cuotas = cuotas;
    }

    valorCTAS() {
        
        if(this.cuotas <= 0 || isNaN(this.cuotas)) {
            alert("Ingrese un carácter válido");

        } else if(this.cuotas >=1 && this.cuotas <=3) {
            return(this.monto / this.cuotas);

        } else if(this.cuotas <=4 && this.cuotas >=6) {
            return((this.monto / this.cuotas) * 1.2);

        } else if(this.cuotas <=7 && this.cuotas >=9 ) {
            return((this.monto / this.cuotas) * 1.25);

        } else (this.cuotas <=10 && this.cuotas >=12 )
            return((this.monto / this.cuotas) * 1.30)
        
    }

}

//Almacenamiento de deudas
const deudas = [];
deudas.push(new Deuda(prompt("Ingrese su nombre"), prompt("Ingrese fecha de endeudamiento. DD/MM/AAAA"), parseInt(prompt("Ingrese su deuda actual")), parseInt(prompt("Ingrese de 1 a 12 cuotas"))));
deudas.push(new Deuda("Matías", "30/08/2021", 7000, 6));
deudas.push(new Deuda("Anita", "10/10/2010", 13500, 10));

console.log(deudas)
console.log("Estas son las deudas refinanciadas")
for (const deuda of deudas){
    console.log(`${deuda.nombre} usted tiene una deuda desde ${deuda.fecha} cuyo monto asiente a $ ${deuda.monto} y ha sido refinanciada en ${deuda.cuotas} CTAS de $ ${deuda.valorCTAS()}`) 
}

