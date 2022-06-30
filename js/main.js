function validateForm() {
  //_______Variables del HTML
  const input_name = document.querySelector('#name');
  const input_lastName = document.querySelector('#lastname')
  const input_email = document.querySelector('#input-email')
  const input_password = document.querySelector('#input-password')
  const select_tipoBici = document.querySelector('select')
  
  // Variables
  let span
  const nombre = (input_name.value).trim();
  const apellido = input_lastName.value;
  const correo = input_email.value;
  const clave = input_password.value
  const expReg = new RegExp('[A-Z]+$', 'i')
  const emailRegex = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

  //__________Funciones___________
  function creadorSpan(mensaje, nombrePadre) {
    span = document.createElement('span');
    span.innerHTML = `${mensaje}`
    let contenedorPadre = document.querySelector(`${nombrePadre}`)
    contenedorPadre.appendChild(span)
  }
  function removerSpan() {
    let todosSpan = document.querySelectorAll('span')
    for (let span of todosSpan) {
      span.remove()
    }
  }
  // function limpiarCampos() {
  // 	input_name.value=''
  // 	input_lastName.value=''
  // 	input_email.value=''
  // 	input_password.value=''
  // }

  removerSpan()
  //______________Validaciones_________
  // nombre
  if (nombre == '') {
    padre = '.name-container'
    mensaje = 'Campo vacio'
    creadorSpan(mensaje, padre)
  }
  else if (!nombre.match(expReg)) {
    padre = '.name-container'
    mensaje = 'Sólo puede ingresar texto'
    creadorSpan(mensaje, padre)
  }
  else if (!(nombre.charCodeAt(0) >= 65 && nombre.charCodeAt(0) <= 90)) {
    padre = '.name-container'
    mensaje = 'falta la primera letra en mayusculas'
    creadorSpan(mensaje, padre)
  }
  //apellido
  if (apellido == '') {
    padre = '.lastname-container'
    mensaje = 'Campo vacio'
    creadorSpan(mensaje, padre)
  }
  else if (!apellido.match(expReg)) {
    padre = '.lastname-container'
    mensaje = 'Sólo puede ingresar texto'
    creadorSpan(mensaje, padre)
  }
  else if (!(apellido.charCodeAt(0) >= 65 && apellido.charCodeAt(0) <= 90)) {
    padre = '.lastname-container'
    mensaje = 'falta la primera letra en mayusculas'
    creadorSpan(mensaje, padre)
  }
  //Apellido
  if (!(emailRegex.test(correo))) {
    padre = '.email-container'
    mensaje = 'correo incorrecto'
    creadorSpan(mensaje, padre)
  }
  //passwword
	if (clave == ''){
    span = document.createElement('span');
    span.innerHTML = 'campo Vacio'
    padre = input_password.parentNode.appendChild(span)
  }
  else if (clave.length < 7 ){
    span = document.createElement('span');
    span.innerHTML = 'Passowrd muy corta'
    padre = input_password.parentNode.appendChild(span)
  }
  else if (clave == 'password' || clave === '0123456'|| clave === '1234567' || clave === '0987654'|| clave === '9876543') {
    span = document.createElement('span');
    span.innerHTML = 'no puede ser igual a " password "," 0123456 "," 1234567 "," 0987654 "'
    padre = input_password.parentNode.appendChild(span)
		span.style.width = '300px'
  }

  //select
  if (select_tipoBici.value == '0') {
    span = document.createElement('span');
    span.innerHTML = 'Seleccione una opción'
    padre = select_tipoBici.parentNode.appendChild(span)
  }
  // limpiarCampos()
}