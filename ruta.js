export default class Ruta {
    constructor(){
        this.inicio = null;
    }

    agregar(nodo) {
        if(this.inicio === null) {
            this.inicio = nodo;
            this.inicio.siguiente = this.inicio;
        } else {
            let aux = this.inicio;

            while(aux.siguiente !== this.inicio) {
                aux = aux.siguiente
            }
            aux.siguiente = nodo;
            aux.siguiente.anterior = aux;
            aux.siguiente.siguiente = this.inicio;
            this.inicio.anterior = nodo;

        }
    }


    buscar(base) {
        let aux = this.inicio;

        while(base != aux.nombre) {
            aux = aux.siguiente;
        }

        console.log(aux);
        return aux;        
    }


    borrar(base) {
        let aux = this.inicio;

        while(base !== aux.nombre) {
            aux = aux.siguiente;
        }

        aux.anterior.siguiente = aux.siguiente;
        aux.siguiente.anterior = aux.anterior;
        
        return aux;
    }

    Imprimir() {
        console.log(this.inicio);

        let aux = this.inicio
        while(aux.siguiente !== this.inicio) {
            console.log(`Nombre de la base: ${aux.nombre}, minutos: ${aux.minutos}`)

            aux = aux.siguiente;
        }
    }

    insertar(base, casilla) {
        let aux = this.inicio;
        if (casilla == 1) {
            base.siguiente = aux;
            base.anterior = aux.anterior;
            base.anterior.siguiente = base;
            aux.anterior = base;
            this.inicio = base;
        } else {
            var i = 1;
            while (i != casilla) {
                if (aux.siguiente != this.inicio) {
                    aux = aux.siguiente;
                    i++;
                } else {
                    break;
                }
            }
            if (i == casilla) {
                try {
                    base.anterior = aux.anterior;
                    base.siguiente = aux;
                    base.anterior.siguiente = base;
                    base.siguiente.anterior = base;
                    return true;
                } catch (error) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
}