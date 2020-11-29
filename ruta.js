class Ruta {
    constructor(){
        this.anterior = null;
        this.siguiente = null;
        this.inicio = null;
    }

    agregar(nodo) {
        if(this.inicio === null) {
            this.inicio = nodo;
        } else {
            let aux = this.inicio;

            while(aux.siguiente != null) {
                aux = aux.siguiente
            }

            aux.siguiente = nodo;
            aux.siguiente.anterior = aux;

        }
    }
}