import { Animal, Perro } from "./objects.js";
const formPerson = document.getElementById("myForm");
const card = document.querySelector(".card");

let buttonRol=document.getElementById('rol');
buttonRol.addEventListener("change", (event)=>{
    event.preventDefault();
    card.innerHTML=`<div class="alert"></div>`;
    card.style.display = "none"
    const changeName = document.getElementById("nameFor");
    const divRaza=document.getElementById("razaField");
    if(buttonRol.value==='perro'){
        changeName.innerHTML=  `<div id="nameFor">
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" id="name">
                                </div>`;
        divRaza.innerHTML=`<label for="raza">Ingrese su raza</label>
        <input type="text" name="raza" id="raza">`;
        
    }else if(buttonRol.value==='animal'){
        divRaza.innerHTML=``;
        changeName.innerHTML=`<label for="nombre">Seleccionar nombre</label>
        <select id="nombre" name="nombre">
            <option value="option" selected> escoger una opcion </option>
            <option value="perro">perro</option>
            <option value="gato">gato</option>
            <option value="raton">raton</option>
            <option value="ballena">ballena</option>
            <option value="vaca">vaca</option>
            <option value="pollo">pollo</option>
        </select>`;
    }
    else{
        divRaza.innerHTML=``;
    }
});

