function redireccionar() {
    setTimeout("enviarMapa()", 3000);
}
function enviarMapa() {
    window.location.href="mapa.html";
}
var piezas=document.getElementsByClassName('movil');
var tamWidth=[70,70,70,70,70,70,70,70,70];
var tamHeight=[70,70,70,70,70,70,70,70,70];
var cont=0;
for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height",tamHeight[i]);
    piezas[i].setAttribute("x",(50+cont));
    piezas[i].setAttribute("y", 286);
    piezas[i].addEventListener("touchstart",seleccionarElemento,false)
}
var elementSelect=0;
var currentX=0;
var currentY=0;
var currentPosX=0;
var currentPosY=0;
var clientX=0, clientY=0;

function seleccionarElemento(evt){ 
    elementSelect=evt.target; 
    clientX = evt.touches[0].clientX;
    clientY = evt.touches[0].clientY;
    currentPosx=parseFloat(elementSelect.getAttribute("x"));
    currentPosy=parseFloat(elementSelect.getAttribute("y"));
    elementSelect.addEventListener("touchmove",moverElemento,false);
}

function moverElemento(evt){
    var dx=evt.changedTouches[0].clientX - clientX;
    var dy=evt.changedTouches[0].clientY - clientY;
    currentPosx=currentPosx+dx;
    currentPosy=currentPosy+dy;
    elementSelect.setAttribute("x",currentPosx);
    elementSelect.setAttribute("y",currentPosy);
    clientX = evt.touches[0].clientX;
    clientY = evt.touches[0].clientY;
    elementSelect.addEventListener("touchend",deseleccionarElemento,false);
    iman();
}
function deseleccionarElemento(evt){
    testing();
    if(elementSelect!=0){
        elementSelect.removeEventListener("touchend",null);
        elementSelect=0;
    }
}
var entorno=document.getElementById('entrono')

function reordenar(evt){
    var padre= evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    entrono.removeChild(document.getElementById(id));
    entrono.appendChild(clone);
    return entrono.lastChild.firstChild;

}
var origX=[60,127,194,60,127,194,60,127,194];
var origY=[3,3,3,72,72,72,142,142,142];
function iman(){
    for(var i=0;i<piezas.length;i++){
        if(Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15){
            elementSelect.setAttribute("x",origX[i]);
            elementSelect.setAttribute("y",origY[i]);
        }        
    }
}
var win = document.getElementById('win');
function testing(){
    var bien_ubicada=0;
    var padres=document.getElementsByClassName('padre');
    for(var i=0; i<piezas.length;i++){
        var posx=parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy=parseFloat(padres[i].firstChild.getAttribute("y"));
        ide=padres[i].getAttribute("id");
        if(origX[ide]==posx && origY[ide] ==posy){
            bien_ubicada++;
        }

    }
    if(bien_ubicada==9){
        if(window.location.href="nivelmedellinpreguntas.html"){
            window.location.href="nivelmedellinilustrado.html";
        }else if(window.location.href="nivelmedellinilustrado.html"){
                window.location.href="felicitacionesMedellin.html";
        }else if(window.location.href="niveldubaipregunta.html"){
                    window.location.href="niveldubaiilustrado.html";
        }else if(window.location.href="niveldubaipregunta.html"){
            window.location.href="niveldubaiilustrado.html";
        }else if(window.location.href="nivelnewyokpregunta.html"){
            window.location.href="nivelnewyorkilustrado.html";
        }else if(window.location.href="nivelnewyorkilustrado.html"){
            window.location.href="felicitacionesNewYork.html";
        }else if(window.location.href="nivelnewyorkilustrado.html"){
            window.location.href="felicitacionesNewYork.html";
        }else if(window.location.href="nivelparispregunta.html"){
            window.location.href="nivelparisilustrado.html";
        }else if(window.location.href="nivelparisilustrado.html"){
            window.location.href="felicitacionesParis.html";
        }else if(window.location.href="niveltokiopregunta.html"){
            window.location.href="niveltokioilustustrado.html";
        }else if(window.location.href="niveltokioilustustrado.html"){
            window.location.href="felicitacionesTokio.html";
        }
        
        
    }
}