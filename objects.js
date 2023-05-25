class Animal{
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre=nombre;
        this._edad=edad;
    }
    hacerSonido(){
        if(this._nombre==='lucas'){
            console.log('bark bark');
        }else{
            console.log('miau miau');
        }
    }
}
const animal1=new Animal('lucas',12);
animal1.hacerSonido();

class Perro extends Animal{
    _raza
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this._raza=raza;
    }
    moverCola(laMueve){
        console.log(laMueve ? 'El perro esta moviendo la cola' : 'El perro no esta moviendo la cola');
    }
}

