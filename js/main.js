function redireccionar() {
    setTimeout("enviarMapa()", 3000);
}
function enviarMapa() {
    window.location.href="mapa.html";
}
var piezas=document.getElementsByClassName('movil');
var tamWidth=[65,65,65,65,65,65,65,65,65];
var tamHeight=[65,65,65,65,65,65,65,65,65];
var cont=0;
var cont2=0;
for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height",tamHeight[i]);
    if(i<5){
        if(i==0){
            piezas[i].setAttribute("x",(171));
            piezas[i].setAttribute("y", 336);
        }else if(i==1){
            piezas[i].setAttribute("x",(223));
            piezas[i].setAttribute("y", 336);
        }else if(i==2){
            piezas[i].setAttribute("x",(119));
            piezas[i].setAttribute("y", 336);
        }else if(i==3){
            piezas[i].setAttribute("x",(15));
            piezas[i].setAttribute("y", 336);
        }else if(i==4){
            piezas[i].setAttribute("x",(67));
            piezas[i].setAttribute("y", 336); 
        }
    }if(i>=5){
        if(i==5){
            piezas[i].setAttribute("x",142);
            piezas[i].setAttribute("y", 420);
        }else if(i==6){
            piezas[i].setAttribute("x",204);
            piezas[i].setAttribute("y", 420);
        }else if(i==7){
            piezas[i].setAttribute("x",18);
            piezas[i].setAttribute("y", 420);
        }else if(i==8){
            piezas[i].setAttribute("x",80);
            piezas[i].setAttribute("y", 420);
        }
    }       
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
var origX=[55,120,185,55,120,185,55,120,185];
var origY=[110,110,110,175,175,175,240,240,240];
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
        if(document.getElementById('fondoMedellin')){
            window.location.href="nivelmedellinilustrado.html";
        }else if(document.getElementById('fondoMedellinilustrado')){
                window.location.href="felicitacionesMedellin.html";
        }else if(document.getElementById('fondoDubai')){
                    window.location.href="niveldubaiilustrado.html";
        }else if(document.getElementById('fondoDubaiilustrado')){
            window.location.href="felicitacionesDubai.html";
        }else if(document.getElementById('fondoNewYork')){
            window.location.href="nivelnewyorkilustrado.html";
        }else if(document.getElementById('fondoNewYorkilustrado')){
            window.location.href="felicitacionesNewYork.html";
        }else if(document.getElementById('fondoParis')){
            window.location.href="nivelparisilustrado.html";
        }else if(document.getElementById('fondoParislustrado')){
            window.location.href="felicitacionesParis.html";
        }else if(document.getElementById('fondoTokio')){
            window.location.href="niveltokioilustrado.html";
        }else if(document.getElementById('fondoTokiolustrado')){
            window.location.href="felicitacionesTokio.html";
        }         
    }
}