function agregaImagen() {
    var URL = document.getElementById('imagenURL').value.trim();
    var pie = document.getElementById('pieFoto').value.trim();
    var galeria = document.getElementById('galeriaImagenes');
    var mensaje = document.getElementById('mensajeError');


    // Limpiar mensaje anterior
    mensaje.textContent = "";


    if (URL && pie) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');


        img.src = URL;
        img.onerror = function() {
            alert("La URL de la imagen no existe o está mal escrita");
            div.remove();
        }


        p.textContent = pie;


        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);


        document.getElementById('imagenURL').value = "";
        document.getElementById('pieFoto').value = "";
    } else {
        mensaje.textContent = "Tienes que poner A FUERZAS la URL y el pie de foto";


        setTimeout(() => {
            mensaje.textContent = "";
        }, 5000);
    }
}