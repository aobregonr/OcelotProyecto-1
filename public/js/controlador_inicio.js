const inputCorreo = document.querySelector('#txtCorreo');
const inputContrasenna = document.querySelector('#txtContrasenna');
const botonIngresar = document.querySelector('#btnIngresar');
const botonRegistro = document.querySelector('#btnRegistro');
const botonCerrarSesion = document.querySelector('#cerrarsesion');

function obtenerDatos(){
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(correo, contrasenna);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, contrasenna);
        
        if (usuarioAceptado.success == true &&  usuarioAceptado.usuario.tipo == 'admin') {  // verifica si es admin
            sessionStorage.setItem('tipo_usuario', 'admin');
            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre);
            sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
            sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
            sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id);

            window.location.href = 'perfilAdmin.html';

        }else{
            if (usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar == usuarioAceptado.usuario.codigoverif) && (usuarioAceptado.usuario.estado == 'activo') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){   //verifica si es centro
                sessionStorage.setItem('tipo_usuario', 'CentroEducativo');
                sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombrecomercial);
                sessionStorage.setItem('sitioweb_usuario', usuarioAceptado.usuario.sitioweb);
                sessionStorage.setItem('escudo_usuario', usuarioAceptado.usuario.escudo);
                sessionStorage.setItem('ref_usuario', usuarioAceptado.usuario.refhist);
                sessionStorage.setItem('fb_usuario', usuarioAceptado.usuario.facebook);
                sessionStorage.setItem('bilingue_usuario', usuarioAceptado.usuario.bilingue);
                sessionStorage.setItem('idiomas_usuario', usuarioAceptado.usuario.idiomas);
                sessionStorage.setItem('primaria_usuario', usuarioAceptado.usuario.primaria);
                sessionStorage.setItem('secundaria_usuario', usuarioAceptado.usuario.secundaria);
                sessionStorage.setItem('tecnico_usuario', usuarioAceptado.usuario.tecnico);
                sessionStorage.setItem('mixto_usuario', usuarioAceptado.usuario.mixto);
                sessionStorage.setItem('vocacional_usuario', usuarioAceptado.usuario.vocacional);
                sessionStorage.setItem('tipoDeCentro_usuario', usuarioAceptado.usuario.tipodecentro);
                //
                sessionStorage.setItem('telefono_centro', usuarioAceptado.usuario.telefonoctro);
                sessionStorage.setItem('email_centro', usuarioAceptado.usuario.emailinstit);
                sessionStorage.setItem('direccion_centro', usuarioAceptado.usuario.direccionexacta);
                //
                sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id);
                sessionStorage.setItem('id_codigoverif', usuarioAceptado.usuario.codigoverif);
                sessionStorage.setItem('id_codigoautenticar', usuarioAceptado.usuario.codigoautenticar);

                window.location.href = 'perfilCentroEducEdit.html';

                //cuando el centro educativo ya fue aprobado por el admin pero no ha sido validado por ellos mismos.
                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar != usuarioAceptado.usuario.codigoverif) && (usuarioAceptado.usuario.estado == 'activo') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){ //si el codigo de verificacion autenticado esta en blanco o incorrecto, mostrar modal
                
                Swal.fire({
                    title: 'Su cuenta ha sido aprobada. Debe validar su cuenta.',
                    text: 'Ingrese el código de verificación que enviamos a su correo electrónico.',
                    input: 'text',
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'Digite el código'

                        } else if (value != usuarioAceptado.usuario.codigoverif){
                            return 'Código incorrecto'

                        } else{
                            //decirle al codigo autenticar que agarre el valor del verificar (el q se manda al correo)
                            usuarioAceptado.usuario.codigoautenticar = usuarioAceptado.usuario.codigoverif;

                            //actualizar el valor del codigo autenticar en la base de datos... para que solo se haga verificacion de usuario 1 vez y no siempre
                            autenticar_codigo(usuarioAceptado.usuario._id, usuarioAceptado.usuario.codigoverif, usuarioAceptado.usuario.codigoautenticar, usuarioAceptado.usuario.estado);
   
                            //iniciar sesion normal
                            
                            sessionStorage.setItem('tipo_usuario', 'CentroEducativo');
                            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombrecomercial);

                            sessionStorage.setItem('sitioweb_usuario', usuarioAceptado.usuario.sitioweb);
                            sessionStorage.setItem('escudo_usuario', usuarioAceptado.usuario.escudo);
                            sessionStorage.setItem('ref_usuario', usuarioAceptado.usuario.refhist);
                            sessionStorage.setItem('fb_usuario', usuarioAceptado.usuario.facebook);
                            sessionStorage.setItem('bilingue_usuario', usuarioAceptado.usuario.bilingue);
                            sessionStorage.setItem('idiomas_usuario', usuarioAceptado.usuario.idiomas);
                            sessionStorage.setItem('primaria_usuario', usuarioAceptado.usuario.primaria);
                            sessionStorage.setItem('secundaria_usuario', usuarioAceptado.usuario.secundaria);
                            sessionStorage.setItem('tecnico_usuario', usuarioAceptado.usuario.tecnico);
                            sessionStorage.setItem('mixto_usuario', usuarioAceptado.usuario.mixto);
                            sessionStorage.setItem('vocacional_usuario', usuarioAceptado.usuario.vocacional);
                            sessionStorage.setItem('tipoDeCentro_usuario', usuarioAceptado.usuario.tipodecentro);
                           

                            //
                            sessionStorage.setItem('telefono_centro', usuarioAceptado.usuario.telefonoctro);
                            sessionStorage.setItem('email_centro', usuarioAceptado.usuario.emailinstit);
                            sessionStorage.setItem('direccion_centro', usuarioAceptado.usuario.direccionexacta);
                            //
                            sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id);
                            sessionStorage.setItem('id_codigoverif', usuarioAceptado.usuario.codigoverif);
                            sessionStorage.setItem('id_codigoautenticar', usuarioAceptado.usuario.codigoautenticar);

                            window.location.href = 'perfilCentroEducEdit.html';
                            
                        }
                    }
                })
                //cuando el centro aun no ha sido aprobado por el admin. (es decir estado pendinte)
                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.estado == 'pendiente') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){ //si el codigo de verificacion autenticado esta en blanco o incorrecto, mostrar modal
                
                Swal.fire({
                    title: 'Su cuenta está pendiente de aprobación.',
                    text: 'En un máximo de 72 horas tendrá acceso a su cuenta. Agradecemos el tiempo de espera.'
                })
                            
            }else{
                if (usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar == usuarioAceptado.usuario.codigoverif) && usuarioAceptado.usuario.tipo == 'PadreFam'){  //verifica si es padre de familia
                    sessionStorage.setItem('tipo_usuario', 'PadreFam');
                    sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id); 
                    sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre); 
                    sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
                    sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
                    sessionStorage.setItem('provincia', usuarioAceptado.usuario.provincia);
                    window.location.href = 'perfilUsuario.html';

                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar != usuarioAceptado.usuario.codigoverif) && usuarioAceptado.usuario.tipo == 'PadreFam'){ //si el codigo de verificacion autenticado esta en blanco o incorrecto, mostrar modal
                
                Swal.fire({
                    title: 'Debe validar su cuenta.',
                    text: 'Ingrese el código de verificación que enviamos a su correo electrónico.',
                    input: 'text',
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'Digite el código'

                        } else if (value != usuarioAceptado.usuario.codigoverif){
                            return 'Código incorrecto'

                        } else{
                            //decirle al codigo autenticar que agarre el valor del verificar (el q se manda al correo)
                            usuarioAceptado.usuario.codigoautenticar = usuarioAceptado.usuario.codigoverif;

                            //actualizar el valor del codigo autenticar en la base de datos... para que solo se haga verificacion de usuario 1 vez y no siempre
                            autenticar_codigo(usuarioAceptado.usuario._id, usuarioAceptado.usuario.codigoverif, usuarioAceptado.usuario.codigoautenticar, usuarioAceptado.usuario.estado);
   
                            //iniciar sesion normal
                            
                            sessionStorage.setItem('tipo_usuario', 'PadreFam');
                            sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id); 
                            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre); 
                            sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
                            sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
                            sessionStorage.setItem('provincia', usuarioAceptado.usuario.provincia);
                            window.location.href = 'perfilUsuario.html';
                            
                        }
                    }
                })

                }else{
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                title: 'No se pudo iniciar sesión.',
                                text: 'Correo o contraseña inválidos, por favor verifique los datos.'
                              });
                }
            }
        }
    } 
};


function validar(pcorreo, pcontrasenna) {
    let error = false;

    if (pcorreo == '') {
        error = true;
        inputCorreo.classList.add('error_input');
    } else {
        inputCorreo.classList.remove('error_input');
    }

    if (pcontrasenna == '') {
        error = true;
        inputContrasenna.classList.add('error_input');
    } 
    if(pcorreo == '' || pcontrasenna == ''){ //esto es si le dan iniciar sesion sin haber escrito nada
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                //title: 'No se pudo iniciar sesión.',
                                text: 'Por favor ingrese su correo y contraseña.'
                              });

    }else {
        inputContrasenna.classList.remove('error_input');
    }

    return error;
};


function reenviarRegistro(){
    const r = document.getElementsByName('tipo');
    let tipo = "";
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked){
            tipo = r[i].value;
        }
    }
    
    if (tipo == 'padrefamilia'){
        window.location.href = "registroPadreFamilia.html";
    } else if(tipo == 'centroeducativo'){
        window.location.href = "registroCentroEducativo.html";
    }else if (tipo == ''){
                swal.fire({
                            type : 'warning',
                            buttonsStyling: false,
                            customClass: {
                            title: 'title-class',
                            confirmButton: 'confirm-button-class'},
                            //title: 'No se puede hacer el registro.',
                            text: 'Por favor seleccione si es padre de familia o centro educativo.'
                          });
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.href = 'index.html';
}

botonIngresar.addEventListener('click', obtenerDatos);
botonRegistro.addEventListener('click', reenviarRegistro);
botonCerrarSesion.addEventListener('click', cerrarSesion);



//modal

const inputCorreoModal = document.querySelector('#txtCorreoModal');
const inputContrasennaModal = document.querySelector('#txtContrasennaModal');
const botonIngresarModal = document.querySelector('#btnIngresarModal');
const botonRegistroModal = document.querySelector('#btnRegistroModal');

function obtenerDatosModal(){
    let correoModal = inputCorreoModal.value;
    let contrasennaModal = inputContrasennaModal.value;

    let errorBlancos = validar(correoModal, contrasennaModal);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correoModal, contrasennaModal);
        if (usuarioAceptado.success == true && usuarioAceptado.usuario.tipo == 'admin') {  // verifica si es admin
            sessionStorage.setItem('tipo_usuario', 'admin');
            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre);
            sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
            sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
            

            window.location.href = 'perfilAdmin.html';



        }else{
            if (usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar == usuarioAceptado.usuario.codigoverif) && (usuarioAceptado.usuario.estado == 'activo') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){   //verifica si es centro
                sessionStorage.setItem('tipo_usuario', 'CentroEducativo');
                sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombrecomercial); 

                sessionStorage.setItem('sitioweb_usuario', usuarioAceptado.usuario.sitioweb);
                sessionStorage.setItem('escudo_usuario', usuarioAceptado.usuario.escudo);
                sessionStorage.setItem('ref_usuario', usuarioAceptado.usuario.refhist);
                sessionStorage.setItem('fb_usuario', usuarioAceptado.usuario.facebook);
                sessionStorage.setItem('bilingue_usuario', usuarioAceptado.usuario.bilingue);
                sessionStorage.setItem('idiomas_usuario', usuarioAceptado.usuario.idiomas);
                sessionStorage.setItem('primaria_usuario', usuarioAceptado.usuario.primaria);
                sessionStorage.setItem('secundaria_usuario', usuarioAceptado.usuario.secundaria);
                sessionStorage.setItem('tecnico_usuario', usuarioAceptado.usuario.tecnico);
                sessionStorage.setItem('mixto_usuario', usuarioAceptado.usuario.mixto);
                sessionStorage.setItem('vocacional_usuario', usuarioAceptado.usuario.vocacional);
                sessionStorage.setItem('tipoDeCentro_usuario', usuarioAceptado.usuario.tipodecentro);
                //
                sessionStorage.setItem('telefono_centro', usuarioAceptado.usuario.telefonoctro);
                sessionStorage.setItem('email_centro', usuarioAceptado.usuario.emailinstit);
                sessionStorage.setItem('direccion_centro', usuarioAceptado.usuario.direccionexacta);
                //
                sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id);
                sessionStorage.setItem('id_codigoverif', usuarioAceptado.usuario.codigoverif);
                sessionStorage.setItem('id_codigoautenticar', usuarioAceptado.usuario.codigoautenticar);
              
                window.location.href = 'perfilCentroEducEdit.html';


                //cuando el centro educativo ya fue aprobado por el admin pero no ha sido validado por ellos mismos.
                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar != usuarioAceptado.usuario.codigoverif) && (usuarioAceptado.usuario.estado == 'activo') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){ //si el codigo de verificacion autenticado esta en blanco o incorrecto, mostrar modal
                
                Swal.fire({
                    title: 'Su cuenta ha sido aprobada. Debe validar su cuenta.',
                    text: 'Ingrese el código de verificación que enviamos a su correo electrónico.',
                    input: 'text',
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'Digite el código'

                        } else if (value != usuarioAceptado.usuario.codigoverif){
                            return 'Código incorrecto'

                        } else{
                            //decirle al codigo autenticar que agarre el valor del verificar (el q se manda al correo)
                            usuarioAceptado.usuario.codigoautenticar = usuarioAceptado.usuario.codigoverif;

                            //actualizar el valor del codigo autenticar en la base de datos... para que solo se haga verificacion de usuario 1 vez y no siempre
                            autenticar_codigo(usuarioAceptado.usuario._id, usuarioAceptado.usuario.codigoverif, usuarioAceptado.usuario.codigoautenticar, usuarioAceptado.usuario.estado);
   
                            //iniciar sesion normal
                            
                            sessionStorage.setItem('tipo_usuario', 'CentroEducativo');
                            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombrecomercial);
                            sessionStorage.setItem('id', usuarioAceptado.usuario._id);
                            sessionStorage.setItem('sitioweb_usuario', usuarioAceptado.usuario.sitioweb);
                            sessionStorage.setItem('escudo_usuario', usuarioAceptado.usuario.escudo);
                            sessionStorage.setItem('ref_usuario', usuarioAceptado.usuario.refhist);
                            sessionStorage.setItem('fb_usuario', usuarioAceptado.usuario.facebook);
                            sessionStorage.setItem('bilingue_usuario', usuarioAceptado.usuario.bilingue);
                            sessionStorage.setItem('idiomas_usuario', usuarioAceptado.usuario.idiomas);
                            sessionStorage.setItem('primaria_usuario', usuarioAceptado.usuario.primaria);
                            sessionStorage.setItem('secundaria_usuario', usuarioAceptado.usuario.secundaria);
                            sessionStorage.setItem('tecnico_usuario', usuarioAceptado.usuario.tecnico);
                            sessionStorage.setItem('mixto_usuario', usuarioAceptado.usuario.mixto);
                            sessionStorage.setItem('vocacional_usuario', usuarioAceptado.usuario.vocacional);
                            sessionStorage.setItem('tipoDeCentro_usuario', usuarioAceptado.usuario.tipodecentro);
                            //
                            sessionStorage.setItem('telefono_centro', usuarioAceptado.usuario.telefonoctro);
                            sessionStorage.setItem('email_centro', usuarioAceptado.usuario.emailinstit);
                            sessionStorage.setItem('direccion_centro', usuarioAceptado.usuario.direccionexacta);
                            //
                            sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id);
                            sessionStorage.setItem('id_codigoverif', usuarioAceptado.usuario.codigoverif);
                            sessionStorage.setItem('id_codigoautenticar', usuarioAceptado.usuario.codigoautenticar);

                            window.location.href = 'perfilCentroEducEdit.html';
                            
                        }
                    }
                })
                //cuando el centro aun no ha sido aprobado por el admin. (es decir, estado pendinte)
                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.estado == 'pendiente') && usuarioAceptado.usuario.tipo == 'CentroEducativo'){ 
                
                Swal.fire({
                    title: 'Su cuenta está pendiente de aprobación.',
                    text: 'En un máximo de 72 horas tendrá acceso a su cuenta. Agradecemos el tiempo de espera.'
                })

            }else{
                if (usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar == usuarioAceptado.usuario.codigoverif) && usuarioAceptado.usuario.tipo == 'PadreFam'){  //verifica si es padre de familia
                    sessionStorage.setItem('tipo_usuario', 'PadreFam');
                    sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id); 
                    sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre); 
                    sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
                    sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
                    sessionStorage.setItem('provincia', usuarioAceptado.usuario.provincia);
                    

                    window.location.href = 'perfilUsuario.html';

                }else if(usuarioAceptado.success == true && (usuarioAceptado.usuario.codigoautenticar != usuarioAceptado.usuario.codigoverif) && usuarioAceptado.usuario.tipo == 'PadreFam'){ //si el codigo de verificacion autenticado esta en blanco o incorrecto, mostrar modal
                
                Swal.fire({
                    title: 'Debe validar su cuenta.',
                    text: 'Ingrese el código de verificación que enviamos a su correo electrónico.',
                    input: 'text',
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'Digite el código'

                        } else if (value != usuarioAceptado.usuario.codigoverif){
                            return 'Código incorrecto'

                        } else{
                            //decirle al codigo autenticar que agarre el valor del verificar (el q se manda al correo)
                            usuarioAceptado.usuario.codigoautenticar = usuarioAceptado.usuario.codigoverif;

                            //actualizar el valor del codigo autenticar en la base de datos... para que solo se haga verificacion de usuario 1 vez y no siempre
                            autenticar_codigo(usuarioAceptado.usuario._id, usuarioAceptado.usuario.codigoverif, usuarioAceptado.usuario.codigoautenticar, usuarioAceptado.usuario.estado);
   
                            //iniciar sesion normal
                            
                            sessionStorage.setItem('tipo_usuario', 'PadreFam');
                            sessionStorage.setItem('id_usuario', usuarioAceptado.usuario._id); 
                            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario.nombre); 
                            sessionStorage.setItem('apellido_usuario', usuarioAceptado.usuario.apellido);
                            sessionStorage.setItem('foto_usuario', usuarioAceptado.usuario.foto);
                            sessionStorage.setItem('provincia', usuarioAceptado.usuario.provincia);
                            window.location.href = 'perfilUsuario.html';
                            
                        }
                    }
                })

                }else{
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                title: 'No se pudo iniciar sesión.',
                                text: 'Correo o contraseña inválidos, por favor verifique los datos.'
                              });
                }
            }
        }
    } 
};


function validarModal(pcorreo, pcontrasenna) {
    let error = false;

    if (pcorreo == '') {
        error = true;
        inputCorreoModal.classList.add('error_input');
    } else {
        inputCorreoModal.classList.remove('error_input');
    }

    if (pcontrasenna == '') {
        error = true;
        contrasennaModal.classList.add('error_input');
    } 
    if(pcorreo == '' || pcontrasenna == ''){ //esto es si le dan iniciar sesion sin haber escrito nada
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                //title: 'No se pudo iniciar sesión.',
                                text: 'Por favor ingrese su correo y contraseña.'
                              });

    }else {
        contrasennaModal.classList.remove('error_input');
    }

    return error;
};



botonIngresarModal.addEventListener('click', obtenerDatosModal);
botonRegistroModal.addEventListener('click', reenviarRegistro);

