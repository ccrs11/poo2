export class Animal{
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre=nombre;
        this._edad=edad;
    }
    hacerSonido(){
        if(this._nombre==='perro'){
            console.log('bark bark');
        }
        else if(this._nombre==='gato'){
            console.log('miau miau')
        }
        else if(this._nombre==='raton'){
            console.log('raz raz raz')
        }
        else if(this._nombre==='ballena'){
            console.log('walleeee')
        }
        else if(this._nombre==='vaca'){
            console.log('muuuu')
        }
        else if(this._nombre==='pollo'){
            console.log('cua cua cua')
        }
    }
}
const animal1=new Animal('lucas',12);
animal1.hacerSonido();

export class Perro extends Animal{
    _raza
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this._raza=raza;
    }
    moverCola(laMueve){
        console.log(laMueve ? 'El perro esta moviendo la cola' : 'El perro no esta moviendo la cola');
    }
}

