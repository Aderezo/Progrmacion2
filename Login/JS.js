var checkbox= document.getElementById("checkbox");
checkbox.addEventListener("click",function(){

    var contraseña= document.getElementById("password");

    if (contraseña.type=== "password")
    {
        contraseña.type="text";
    }

    else 
    {
        contraseña.type="password";
    }
});


var iniciar_sesion= document.getElementById("boton_de_iniciar");
iniciar_sesion.addEventListener("click", function(){
    
    var usuario= document.getElementById("usuario").value;
    var contraseña= document.getElementById("password").value;

    if(usuario!= "" || contraseña!="")
    {
        if(contraseña==="ferreteria" && usuario==="Argentina")
        {
            Swal.fire({

                title: "Bienvenido!",
                text:"Acceso permitido",
                icon:"success"
                
            })
            window.location.href="index.html"
        }

        else
        {
            Swal.fire({

                title: "Usuario denegado",
                text: "El nombre de usuario o contraseña es incorrecto",
                icon:"error"
            });
        }

    }

    else
    {
        Swal.fire({
            title: "Complete los campos para poder ingresar",
            icon: "warning"
        });
    }

});



