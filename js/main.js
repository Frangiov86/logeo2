document.addEventListener("DOMContentLoaded", function() {
    const formularioLogin = document.getElementById("login-form");
    const estadoLogin = document.getElementById("login-status");
    const entradaUsuario = document.getElementById("username");
    const entradaContraseña = document.getElementById("password");



//  ! Sin desestructuracion aplicada.
    // async function validarUsuario(usuario, contraseña) {
    //     try {
    //         const respuesta = await fetch('./json/usuarios.json'); 
    //         const datos = await respuesta.text(); 
    //         const usuarios = JSON.parse(datos); 

    //         return usuarios.some(usuarioDatos => usuarioDatos.username === usuario && usuarioDatos.password === contraseña);
    //     } catch (error) {
    //         console.error('Error al obtener los usuarios:', error);
    //         return false;
    //     }
    // }

//!    Con desestructuración aplicada a nombre de usuario y clave, llamando alias

    async function validarUsuario(usuario, contraseña) {
        try {
            const respuesta = await fetch('./json/usuarios.json'); 
            const datos = await respuesta.text(); 
            const usuarios = JSON.parse(datos); 
    
            return usuarios.some(({ username: nombreUsuario, password: clave }) => nombreUsuario === usuario && clave === contraseña);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            return false;
        }
    }
    

 
// ! Sin ternarios

    // document.getElementById("login").addEventListener("submit", async function(evento) {
    //     evento.preventDefault();
        
    //     const usuario = entradaUsuario.value;
    //     const contraseña = entradaContraseña.value;


    //     if (usuario && contraseña) {

    //         const usuarioValido = await validarUsuario(usuario, contraseña);

    //         if (usuarioValido) {
                
    //             localStorage.setItem("loggedIn", "true");
    //             localStorage.setItem("username", usuario); 

               
    //             alert("Inicio exitoso");
    //             window.location.href = "./pages/logueado.html";
    //         } else {
    //             estadoLogin.textContent = "Nombre de usuario o contraseña incorrectos.";
    //         }
    //     } else {
    //         estadoLogin.textContent = "Por favor, complete todos los campos.";
    //     }
    // });



       // ! Se aplicaron ternarios.


    document.getElementById("login").addEventListener("submit", async function(evento) {
        evento.preventDefault();
        
        const usuario = entradaUsuario.value;
        const contraseña = entradaContraseña.value;
        // ! Se aplicaron ternarios.
        usuario && contraseña ?  
            (await validarUsuario(usuario, contraseña)) ? 
                (localStorage.setItem("loggedIn", "true"), 
                localStorage.setItem("username", usuario), 
                alert("Inicio exitoso"), 
                window.location.href = "./pages/logueado.html") : 
                estadoLogin.textContent = "Nombre de usuario o contraseña incorrectos." 
            : 
            estadoLogin.textContent = "Por favor, complete todos los campos.";
    });
    



});
