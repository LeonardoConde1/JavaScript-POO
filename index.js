/*importacion*/
import {Clientes} from "./Cliente.js";
import {CuentaCorriente} from './CuentaCorriente.js';


const cliente =new Clientes('leonardo','123455','12333' );
console.log(cliente);

const cuentaDeLeonardo = new CuentaCorriente('1','001',cliente,);
console.log(cuentaDeLeonardo);

/*let saldo = cuentaDeLeonardo.verSaldo();
console.log('el saldo actual es leonardo '+saldo);*/



const cliente2 =new Clientes('maria','123456','12334');
console.log(cliente2);

const cuentaDeMaria = new CuentaCorriente('2','002',cliente2);
console.log(cuentaDeMaria);


console.log('cantidad de cuentas: '+CuentaCorriente.cantidadCuentas);
/*
let saldo2 = cuentaDeMaria.verSaldo();
console.log('el saldo actual es maria '+saldo2);


saldo2= cuentaDeMaria.depositoEnCuenta(200);
console.log('el saldo actual es maria '+saldo2);


cuentaDeLeonardo.transeferirParaCuenta(50,cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();
const saldoLeonardo = cuentaDeLeonardo.verSaldo();

console.log(saldoMaria);
console.log(saldoLeonardo);*/