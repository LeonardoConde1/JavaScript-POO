import { Clientes } from "./Cliente.js";

export class CuentaCorriente{
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0;

    set cliente(valor){
        if(valor instanceof Clientes)
            this.#cliente = valor;

    }

    get cliente(){
        return this.#cliente;
    }
    constructor(cliente,numero,agencia){
        this.cliente = cliente;
        this.#saldo = 0;
        this.numero = numero;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++;
    }
   
    depositoEnCuenta(valor){
        if(valor > 0){
        this.#saldo += valor;
       
       }
       return this.#saldo;
    }
    retirarDeCuenta(valor){
        if (valor<= this.#saldo) {
     /*this.saldo = this.saldo -valor;*/
        this.#saldo -= valor;
        
      }
      return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
    transeferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}