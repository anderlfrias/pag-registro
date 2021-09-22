    const form = document.getElementById("form");
    const parrafo = document.getElementById("parrafo");
    
    const name = document.getElementById("name");
    const last_name = document.getElementById("last_name");
    const cedula = document.getElementById("cedula");
    const email = document.getElementById("email");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const ced = document.getElementById("ced");
    const correo = document.getElementById("correo");


    cedula.oninput = function(){
        
        let valor_cedula = cedula.value;

        if(valor_cedula.length == 3 || valor_cedula.length == 11){
            cedula.value += "-";
        }
    }

    function validarCedula(e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla==8) return true; 
        patron =/[0-9]/;
        te = String.fromCharCode(tecla); 
        return patron.test(te); 
    }

    function boton_enviar(){

        //Campo nombre
        if(name.value.length < 4 || name.value.length == null){
            nombre.innerHTML = `Nombre *campo obligatorio`;
            nombre.style.color = ("red");
            nombre.style.top = "-14px";
            nombre.style.fontSize = "12px";

        }
        else{
            nombre.innerHTML = `Nombre`;
            nombre.style.color = ("#49454567");
        }

        //Campo apellido
        if(last_name.value.length <= 4 || last_name.value.length == null){
            apellido.innerHTML = `Apellido *campo obligatorio`;
            apellido.style.color = ("red");
            apellido.style.top = "-14px";
            apellido.style.fontSize = "12px";
        }
        else{
            apellido.innerHTML = `Apellido`;
            apellido.style.color = ("#49454567");
        }

        //Campo cedula
        if(cedula.value.length < 13 || cedula.value.length == null){
            ced.innerHTML = `Cedula *campo obligatorio`;
            ced.style.color = ("red");
            ced.style.top = "-14px";
            ced.style.fontSize = "12px";
        }
        else{
            ced.innerHTML = `Cedula`;
            ced.style.color = ("#49454567");
        }

        //Campo correo
        if (email.value == "") {
            correo.innerHTML = `Correo Electronico *campo obligatorio`;
            correo.style.color = ("red");
            correo.style.top = "-14px";
            correo.style.fontSize = "12px";
        } else if (email.value.indexOf("@") < 0) {
            correo.innerHTML = `Correo Electronico *campo obligatorio`;
            correo.style.color = ("red");
            correo.style.top = "-14px";
            correo.style.fontSize = "12px";
        } else if (email.value.indexOf(".", email.value.indexOf("@")) < 0) {
            correo.innerHTML = `Correo Electronico *campo obligatorio`;
            correo.style.color = ("red");
            correo.style.top = "-14px";
            correo.style.fontSize = "12px";
        } else{
            correo.innerHTML = `Correo Electronico`;
            correo.style.color = ("#49454567");
        } 
        
    }

    
    form.addEventListener("submit", e =>{
        e.preventDefault();
        parrafo.innerHTML = `Enviado!`;
        name.value = null;
        last_name.value = null;
        cedula.value = null;
        email.value = null;
    })
