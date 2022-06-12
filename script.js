// Ejecuta una funcion al cargar la pagina.
window.onload = function() {
    iniciarLabelFlotante();
};

/**
 * 
 * 
 */
function iniciarLabelFlotante(){
    if (document.getElementById("floatField1").value) {
        document.getElementById("labelFlotante").classList.add('active');
    }  
}

/**
 * 
 * @param {*} input 
 */
function manejadorFoco(input) {
    const target = document.getElementById("labelFlotante");
    target.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
}

/**
 * Elimina o mantiene las propiedades del input en función de si este contiene datos.
 * 
 * @param {Object} input Input del DOM.
 */
function manejadorBlur(input) {
    let label = document.getElementById("labelFlotante")
    if (!input.value) {
        label.classList.remove("active");
    }
    label.removeAttribute('placeholder');
}