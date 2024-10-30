function crearNodo(nodo){
    var nodo = document.createElement(nodo)
    return nodo
}
function crearNodoConTexto(nodo, texto){
    var nodo = document.createElement(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}
function crearImagen(rutaImagen, textoAlt, ancho, alto ) {

    var nodoImagen = crearNodo("img")
    nodoImagen.src = rutaImagen
    nodoImagen.alt = textoAlt
    nodoImagen.width = ancho
    nodoImagen.height = alto
    adicionarNodoABody(nodoImagen)
}
function crearNodoEnlace(texto,rutaEnlase,target){
    var enlase = crearNodo("a")
    var nodoTexto = document.createTextNode(texto)
    enlase.href = rutaEnlase
    enlase.target = target
    enlase.appendChild(nodoTexto)
    return enlase
}
function crearVideo(rutaVideo, ancho, alto, controles = true, autoplay = false) {
    var nodoVideo = document.createElement("video");

    
    nodoVideo.src = rutaVideo;
    nodoVideo.width = ancho;
    nodoVideo.height = alto;
    nodoVideo.controls = controles;
    nodoVideo.autoplay = autoplay;
    

    adicionarNodoABody(nodoVideo); 
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor (nodo, contenedor) {

    contenedor.appendChild(nodo)

}