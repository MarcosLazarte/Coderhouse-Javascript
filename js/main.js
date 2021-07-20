//Clase del elemento Trago
class Trago {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
var pivotCaribe = 0;
var pivotPenicilina = 0;
var pivotExperimento = 0;
var pivotExpedicion = 0;
var pivotNegroni = 0;
var pivotTotal = 0;
var pivotTonico = 0;
var precioTotal = 0;
//Agrega al carrito un las bebidas
function agregarCarritoCaribeS(){
    pivotCaribe++;
    pivotTotal++;
    precioTotal=precioTotal+ caribeSolar.precio;
    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    carrito.push(caribeSolar);
    sessionStorage.setItem('caribe',pivotCaribe);
    localStorage.setItem('pivotTotal',pivotTotal);
    
    var totales =  localStorage.getItem('pivotTotal');
    var store = sessionStorage.getItem("caribe");
    console.log("cantidad de caribe en session storage", store);

    if(pivotCaribe==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1n1gsZ_3q8NLwm2wLgqs3S1fFnUrSXPD3"/>
                                            <h3 class="carritoTitulo_compras">Caribe<br>Solar</h3>
                                            <div class="testin c1">
                                                <p class="holon" value="${pivotCaribe}"></p>
                                            </div>
                                        </div>`);
        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotCaribe!=1){
        $(".c1").empty();
        $(".c1").append(`<input class="holon" value="${pivotCaribe}"></input>`);

        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }
}
function agregarCarritoPeniciA(){
    pivotPenicilina++;
    pivotTotal++;
    precioTotal=precioTotal+ penicilinaAhumada.precio;

    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    if(pivotPenicilina==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1VJoGcGqBoO-KOohsCDZXPcCTDKt3IH_M"/>
                                            <h3 class="carritoTitulo_compras">Penicilina<br>Ahumada</h3>
                                            <div class="testin c2">
                                                <input class="holon" value="${pivotPenicilina}"></input>
                                            </div>
                                        </div>`);
        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotPenicilina!=1){
        $(".c2").empty();
        $(".c2").append(`<input class="holon" value="${pivotPenicilina}"></input>`);

        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }

    carrito.push(penicilinaAhumada);
}

function agregarCarritoExp(){
    pivotExperimento++;
    pivotTotal++;

    precioTotal=precioTotal+ expNro9.precio;

    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    if(pivotExperimento==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1Z1t1cXHbZ2wgbOkswtcvFR2XsHW2NRrq"/>
                                            <h3 class="carritoTitulo_compras">Experimento<br>Nro9</h3>
                                            <div class="testin c3">
                                                <input class="holon" value="${pivotExperimento}"></input>
                                            </div>
                                        </div>`);

                                        $(".carritoPrecio_num").empty();
                                        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotExperimento!=1){
        $(".c3").empty();
        $(".c3").append(`<input class="holon" value="${pivotExperimento}"></input>`);

        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }

    carrito.push(expNro9);
}
function agregarCarritoSaturno(){
    pivotExpedicion++;
    pivotTotal++;
    precioTotal=precioTotal+ expedicionSaturno.precio;

    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    if(pivotExpedicion==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1XXUfx2q_vUtxNohXX7vDTQRxO3KTYwBJ"/>
                                            <h3 class="carritoTitulo_compras">Expedición<br>Saturno</h3>
                                            <div class="testin c4">
                                                <input class="holon" value="${pivotExpedicion}"></input>
                                            </div>
                                        </div>`);
                                        $(".carritoPrecio_num").empty();
                                        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotExpedicion!=1){
        $(".c4").empty();
        $(".c4").append(`<input class="holon" value="${pivotExpedicion}"></input>`);
        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }

    carrito.push(expedicionSaturno);
}

function agregarCarritoNegroni(){
    pivotNegroni++;
    pivotTotal++;
    precioTotal=precioTotal+ negroniDeLaHuerta.precio;

    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    if(pivotNegroni==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1XXUfx2q_vUtxNohXX7vDTQRxO3KTYwBJ"/>
                                            <h3 class="carritoTitulo_compras">Negroni<br>de la Huerta</h3>
                                            <div class="testin c5">
                                                <input class="holon" value="${pivotNegroni}"></input>
                                            </div>
                                        </div>`);
                                        $(".carritoPrecio_num").empty();
                                        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotNegroni!=1){
        $(".c5").empty();
        $(".c5").append(`<input class="holon" value="${pivotNegroni}"></input>`);
        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }
    carrito.push(negroniDeLaHuerta);
}
function agregarCarritoTonic(){
    pivotTonico++;
    pivotTotal++;
    precioTotal=precioTotal+ tonicoHome.precio;

    $(".chariotContador").empty();
    $(".chariotContador").append(`${pivotTotal}`);
    if(pivotTonico==1){
        $(".carritoMensaje").empty();
        $(".carritoProductos").append(` <div class="testin2">
                                            <img class="carritoImagen" src="https://drive.google.com/uc?/export=view&id=1XXUfx2q_vUtxNohXX7vDTQRxO3KTYwBJ"/>
                                            <h3 class="carritoTitulo_compras">Tónico<br>de la Casa</h3>
                                            <div class="testin c6">
                                                <input class="holon" value="${pivotTonico}"></input>
                                            </div>
                                        </div>`);
                                        $(".carritoPrecio_num").empty();
                                        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }else if(pivotTonico!=1){
        $(".c6").empty();
        $(".c6").append(`<input class="holon" value="${pivotNegroni}"></input>`);
        $(".carritoPrecio_num").empty();
        $(".carritoPrecio_num").append(`<p>${precioTotal}</p>`);
    }
    carrito.push(tonicoHome);
}

//Funciones que permiten el funcionamiento del programa
function verCoste(){    //Suma los precios del carrito
    let suma = 0;
    for(const Trago of carrito){
        suma+=Trago.precio;   
    }
    console.log("El carrito actualmente tiene un valor de: "+ suma);
}
function ordenar(){                 //Ordena el carrito segun el costo de las bebidas del carrito
    carrito.sort(function(a,b){
        return a.precio -b.precio;
    })
    for (const Trago of carrito){
        carrito2.push(Trago.nombre);
    }
}
function limpiar(){
    for(i=0 ; i<150 ; i++){
        listado.removeChild(listado.childNodes[0]);
    }
}
function verItems(){                //Muestra en consola los items del carrito
    if (carrito != ""){
        let i=1;
        console.log("");
        //var filtro1 = carrito.filter(elemento => elemento.nombre == "Caribe Solar");
        //var filtro2 = carrito.filter(elemento => elemento.nombre == "Penicilina Ahumada");
        //var filtro3 = carrito.filter(elemento => elemento.nombre == "Petaca Cynar 70");
        //console.log("\nCantidad de Caribes solar que pediste: "+filtro1.length);
        //console.log("Cantidad de Penicilina Ahumada que pediste: "+filtro2.length);
        //console.log("Cantidad de Petaca Cynar 70 que pediste: "+filtro3.length);
        for(const Trago of carrito){
            console.log(+i+": "+Trago.nombre+"----"+Trago.precio);
            let parrafo = document.createElement("div");
            parrafo.innerHTML = "<div class='cartas'><h4>"+Trago.nombre+"</h4><p>"+Trago.precio+"</p></div>";
            listado.appendChild(parrafo);
            i++;
        }
    }else{
        console.log("No hay nada en el carrito");
    }
}

const m = document.getElementById("precios");
var tablero = document.getElementById("listado");
const carrito = [];
const carrito2 = [];

var parrafo2 = document.createElement("p");

const caribeSolar = new Trago("Caribe Solar", 300, 0);
const penicilinaAhumada = new Trago ("Penicilina Ahumada", 500, 0);
const negroniDeLaHuerta = new Trago ("Negroni de la Huerta", 450, 0);
const expedicionSaturno = new Trago ("Expedición Saturno", 300, 0);
const expNro9 = new Trago ("Experimento Nro9", 900, 0);
const tonicoHome = new Trago ("Tónico de la Casa", 700, 0);
const btnSwitch = document.querySelector("#switch")
const testo = document.getElementById("test")
//clase10
const gridDivNombre = document.getElementById("gridNombres_items--nombre");
const gridDivTipo = document.getElementById("gridNombres_items--tipo");
const gridDivDescripcion = document.getElementById("gridNombres_items--descripcion");
const divPrecio = document.getElementById("items--precio");
const divCart = document.getElementById("items--addCart");
var gridNombre = document.createElement("div");
var gridTipo = document.createElement("div");
var gridDescripcion = document.createElement("div");
var precio = document.createElement("span");
var cart = document.createElement("span");

const mitadA = document.getElementById("mitadA");
const cajaA = document.getElementById("verProd");
const cajaB = document.getElementById("descripcion");

//clase14
const urlGeteada = "https://jsonplaceholder.typicode.com/posts";
//clase9
var contador = 1;
var contadorOrdenar = 0;

var card = document.createElement("div");
var card2 = document.createElement("div");
document.addEventListener('keydown', logkey);

function logkey(e){
    if(e.keyCode == 40) {
        switch(contador){
            case 0:
                $("#caribe").css("bottom","-110%");
                $("#tonico").animate({bottom:'220%'},"slow");
                $("#caribe").animate({bottom:'10%'},"slow");

                $("#caribeG1").css("bottom","-110%");
                $("#tonicoG1").animate({bottom:'220%'},"slow");
                $("#caribeG1").animate({bottom:'10%'},"slow");

                $("#caribeG2").css("bottom","-110%");
                $("#tonicoG2").animate({bottom:'110%'},"slow");
                $("#caribeG2").animate({bottom:'0%'},"slow");
                
                $("#caribeG3").css("bottom","-110%");
                $("#tonicoG3").animate({bottom:'550%'},"slow");
                $("#caribeG3").animate({bottom:'0%'},"slow");

                $("#caribeG4").css("bottom","-110%");
                $("#tonicoG4").animate({bottom:'660%'},"slow");
                $("#caribeG4").animate({bottom:'0%'},"slow");

                $("#caribeG5").css("bottom","-110%");
                $("#tonicoG5").animate({bottom:'550%'},"slow");
                $("#caribeG5").animate({bottom:'0%'},"slow");

                $("#caribeG6").css("bottom","-110%");
                $("#tonicoG6").animate({bottom:'430%'},"slow");
                $("#caribeG6").animate({bottom:'0%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoCaribeS()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${caribeSolar.precio}.-</p>`)
                contador=1;
            break;
            case 1:
                $("#penicilina").css("bottom","-110%");
                $("#caribe").animate({bottom:'110%'},"slow");
                $("#penicilina").animate({bottom:'10%'},"slow");
                
                $("#penicilinaG1").css("bottom","-110%");
                $("#caribeG1").animate({bottom:'110%'},"slow");
                $("#penicilinaG1").animate({bottom:'10%'},"slow");

                $("#penicilinaG2").css("bottom","-110%");
                $("#caribeG2").animate({bottom:'100%'},"slow");
                $("#penicilinaG2").animate({bottom:'0%'},"slow");
                
                $("#penicilinaG1").css("bottom","-110%");
                $("#caribeG3").animate({bottom:'100%'},"slow");
                $("#penicilinaG3").animate({bottom:'87%'},"slow");

                $("#penicilinaG1").css("bottom","-110%");
                $("#caribeG4").animate({bottom:'100%'},"slow");
                $("#penicilinaG4").animate({bottom:'100%'},"slow");

                $("#penicilinaG1").css("bottom","-110%");
                $("#caribeG5").animate({bottom:'100%'},"slow");
                $("#penicilinaG5").animate({bottom:'75%'},"slow");

                $("#penicilinaG1").css("bottom","-110%");
                $("#caribeG6").animate({bottom:'100%'},"slow");
                $("#penicilinaG6").animate({bottom:'50%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoPeniciA()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${penicilinaAhumada.precio}.-</p>`)
                contador=2;
            break;
            case 2:

                $("#experimento").css("bottom","-110%");
                $("#penicilina").animate({bottom:'110%'},"slow");
                $("#experimento").animate({bottom:'10%'},"slow");

                $("#experimentoG1").css("bottom","-110%");
                $("#penicilinaG1").animate({bottom:'110%'},"slow");
                $("#experimentoG1").animate({bottom:'10%'},"slow");

                $("#experimentoG2").css("bottom","-110%");
                $("#penicilinaG2").animate({bottom:'100%'},"slow");
                $("#experimentoG2").animate({bottom:'0%'},"slow");
                
                $("#experimentoG3").css("bottom","-110%");
                $("#penicilinaG3").animate({bottom:'150%'},"slow");
                $("#experimentoG3").animate({bottom:'138%'},"slow");
                
                $("#experimentoG4").css("bottom","-110%");
                $("#penicilinaG4").animate({bottom:'200%'},"slow");
                $("#experimentoG4").animate({bottom:'195%'},"slow");

                $("#experimentoG5").css("bottom","35%");
                $("#penicilinaG5").animate({bottom:'150%'},"slow");
                $("#experimentoG5").animate({bottom:'135%'},"slow");

                $("#experimentoG6").css("bottom","-110%");
                $("#penicilinaG6").animate({bottom:'150%'},"slow");
                $("#experimentoG6").animate({bottom:'90%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoExp()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${expNro9.precio}.-</p>`)
                contador=3;
            break;
            case 3:
                $("#expedicion").css("bottom","-110%");
                $("#experimento").animate({bottom:'110%'},"slow");
                $("#expedicion").animate({bottom:'10%'},"slow");

                $("#expedicionG1").css("bottom","-110%");
                $("#experimentoG1").animate({bottom:'110%'},"slow");
                $("#expedicionG1").animate({bottom:'10%'},"slow");

                $("#expedicionG2").css("bottom","-110%");
                $("#experimentoG2").animate({bottom:'100%'},"slow");
                $("#expedicionG2").animate({bottom:'0%'},"slow");
                
                $("#expedicionG3").css("bottom","150%");
                $("#experimentoG3").animate({bottom:'238%'},"slow");
                $("#expedicionG3").animate({bottom:'250%'},"slow");
                
                $("#expedicionG4").css("bottom","230%");
                $("#experimentoG4").animate({bottom:'350%'},"slow");
                $("#expedicionG4").animate({bottom:'330%'},"slow");

                $("#expedicionG5").css("bottom","-110%");
                $("#experimentoG5").animate({bottom:'250%'},"slow");
                $("#expedicionG5").animate({bottom:'215%'},"slow");

                $("#expedicionG6").css("bottom","-110%");
                $("#experimentoG6").animate({bottom:'150%'},"slow");
                $("#expedicionG6").animate({bottom:'125%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoSaturno()");   
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${expedicionSaturno.precio}.-</p>`)             
                contador=4;
            break;
            case 4:
                $("#negroni").css("bottom","-110%");
                $("#expedicion").animate({bottom:'110%'},"slow");
                $("#negroni").animate({bottom:'10%'},"slow");

                $("#negroniG1").css("bottom","-110%");
                $("#expedicionG1").animate({bottom:'110%'},"slow");
                $("#negroniG1").animate({bottom:'10%'},"slow");

                $("#negroniG2").css("bottom","-110%");
                $("#expedicionG2").animate({bottom:'100%'},"slow");
                $("#negroniG2").animate({bottom:'0%'},"slow");
                
                $("#negroniG3").css("bottom","-110%");
                $("#expedicionG3").animate({bottom:'350%'},"slow");
                $("#negroniG3").animate({bottom:'330%'},"slow");
                
                $("#negroniG4").css("bottom","-110%");
                $("#expedicionG4").animate({bottom:'450%'},"slow");
                $("#negroniG4").animate({bottom:'425%'},"slow");

                $("#negroniG5").css("bottom","-110%");
                $("#expedicionG5").animate({bottom:'300%'},"slow");
                $("#negroniG5").animate({bottom:'290%'},"slow");

                $("#negroniG6").css("bottom","-110%");
                $("#expedicionG6").animate({bottom:'200%'},"slow");
                $("#negroniG6").animate({bottom:'160%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoNegroni()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${negroniDeLaHuerta.precio}.-</p>`)
                contador=5;
            break;
            case 5:
                $("#tonico").css("bottom","-110%");
                $("#negroni").animate({bottom:'110%'},"slow");
                $("#tonico").animate({bottom:'10%'},"slow");

                $("#tonicoG1").css("bottom","-110%");
                $("#negroniG1").animate({bottom:'110%'},"slow");
                $("#tonicoG1").animate({bottom:'10%'},"slow");

                $("#tonicoG2").css("bottom","-110%");
                $("#negroniG2").animate({bottom:'110%'},"slow");
                $("#tonicoG2").animate({bottom:'0%'},"slow");

                $("#tonicoG3").css("bottom","-110%");
                $("#negroniG3").animate({bottom:'450%'},"slow");
                $("#tonicoG3").animate({bottom:'390%'},"slow");
                
                $("#tonicoG4").css("bottom","-110%");
                $("#negroniG4").animate({bottom:'550%'},"slow");
                $("#tonicoG4").animate({bottom:'500%'},"slow");
                
                $("#tonicoG5").css("bottom","-110%");
                $("#negroniG5").animate({bottom:'450%'},"slow");
                $("#tonicoG5").animate({bottom:'370%'},"slow");

                $("#tonicoG6").css("bottom","-110%");
                $("#negroniG6").animate({bottom:'300%'},"slow");
                $("#tonicoG6").animate({bottom:'225%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoTonic()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${tonicoHome.precio}.-</p>`)
                contador=0;
            break;
        }
    }else if(e.keyCode == 38){
        switch(contador){
            case 1:
                $("#tonico").css("bottom","110%");
                $("#caribe").animate({bottom:'-110%'},"slow");
                $("#tonico").animate({bottom:'10%'},"slow");

                $("#tonicoG1").css("bottom","110%");
                $("#caribeG1").animate({bottom:'-90%'},"slow");
                $("#tonicoG1").animate({bottom:'10%'},"slow");

                $("#tonicoG2").css("bottom","110%");
                $("#caribeG2").animate({bottom:'-100%'},"slow");
                $("#tonicoG2").animate({bottom:'0%'},"slow");
                
                $("#tonicoG3").css("bottom","480%");
                $("#caribeG3").animate({bottom:'-150%'},"slow");
                $("#tonicoG3").animate({bottom:'370%'},"slow");
                
                $("#tonicoG4").css("bottom","580%");
                $("#caribeG4").animate({bottom:'-130%'},"slow");
                $("#tonicoG4").animate({bottom:'470%'},"slow");

                $("#tonicoG5").css("bottom","460%");
                $("#caribeG5").animate({bottom:'-105%'},"slow");
                $("#tonicoG5").animate({bottom:'350%'},"slow");

                $("#tonicoG6").css("bottom","348%");
                $("#caribeG6").animate({bottom:'-110%'},"slow");
                $("#tonicoG6").animate({bottom:'238%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoTonic()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${tonicoHome.precio}.-</p>`)
                contador=0;
            break;
            case 2:
                $("#caribe").css("bottom","110%");
                $("#penicilina").animate({bottom:'-110%'},"slow");
                $("#caribe").animate({bottom:'10%'},"slow");

                $("#caribeG1").css("bottom","110%");
                $("#penicilinaG1").animate({bottom:'-110%'},"slow");
                $("#caribeG1").animate({bottom:'10%'},"slow");

                $("#caribeG2").css("bottom","110%");
                $("#penicilinaG2").animate({bottom:'-110%'},"slow");
                $("#caribeG2").animate({bottom:'10%'},"slow");

                $("#caribeG3").css("bottom","110%");
                $("#penicilinaG3").animate({bottom:'-110%'},"slow");
                $("#caribeG3").animate({bottom:'0%'},"slow");

                $("#caribeG4").css("bottom","110%");
                $("#penicilinaG4").animate({bottom:'-110%'},"slow");
                $("#caribeG4").animate({bottom:'3%'},"slow");

                $("#caribeG5").css("bottom","110%");
                $("#penicilinaG5").animate({bottom:'-110%'},"slow");
                $("#caribeG5").animate({bottom:'3%'},"slow");

                $("#caribeG6").css("bottom","110%");
                $("#penicilinaG6").animate({bottom:'-110%'},"slow");
                $("#caribeG6").animate({bottom:'10%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoCaribeS()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${caribeSolar.precio}.-</p>`)
                contador=1;
            break;
            case 3:
                $("#penicilina").css("bottom","110%");
                $("#experimento").animate({bottom:'-110%'},"slow");
                $("#penicilina").animate({bottom:'10%'},"slow");

                $("#penicilinaG1").css("bottom","110%");
                $("#experimentoG1").animate({bottom:'-110%'},"slow");
                $("#penicilinaG1").animate({bottom:'10%'},"slow");

                $("#penicilinaG2").css("bottom","110%");
                $("#experimentoG2").animate({bottom:'-110%'},"slow");
                $("#penicilinaG2").animate({bottom:'0%'},"slow");

                $("#penicilinaG3").css("bottom","187%");
                $("#experimentoG3").animate({bottom:'-138%'},"slow");
                $("#penicilinaG3").animate({bottom:'87%'},"slow");

                $("#penicilinaG4").css("bottom","200%");
                $("#experimentoG4").animate({bottom:'-110%'},"slow");
                $("#penicilinaG4").animate({bottom:'100%'},"slow");
                
                $("#penicilinaG5").css("bottom","175%");
                $("#experimentoG5").animate({bottom:'35%'},"slow");
                $("#penicilinaG5").animate({bottom:'75%'},"slow");

                $("#penicilinaG6").css("bottom","135%");
                $("#experimentoG6").animate({bottom:'-10%'},"slow");
                $("#penicilinaG6").animate({bottom:'35%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoPeniciA()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${penicilinaAhumada.precio}.-</p>`)
                contador=2;
            break;
            case 4:
                $("#experimento").css("bottom","110%");
                $("#expedicion").animate({bottom:'-110%'},"slow");
                $("#experimento").animate({bottom:'10%'},"slow");

                $("#experimentoG1").css("bottom","110%");
                $("#expedicionG1").animate({bottom:'-100%'},"slow");
                $("#experimentoG1").animate({bottom:'10%'},"slow");

                $("#experimentoG2").css("bottom","100%");
                $("#expedicionG2").animate({bottom:'-100%'},"slow");
                $("#experimentoG2").animate({bottom:'0%'},"slow");
                
                $("#experimentoG3").css("bottom","230%");
                $("#expedicionG3").animate({bottom:'150%'},"slow");
                $("#experimentoG3").animate({bottom:'130%'},"slow");
                
                $("#experimentoG4").css("bottom","385%");
                $("#expedicionG4").animate({bottom:'230%'},"slow");
                $("#experimentoG4").animate({bottom:'185%'},"slow");

                $("#experimentoG5").css("bottom","210%");
                $("#expedicionG5").animate({bottom:'15%'},"slow");
                $("#experimentoG5").animate({bottom:'115%'},"slow");

                $("#experimentoG6").css("bottom","210%");
                $("#expedicionG6").animate({bottom:'0%'},"slow");
                $("#experimentoG6").animate({bottom:'110%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoExp()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${expNro9.precio}.-</p>`)
                contador=3;
            break;
            case 5:
                $("#expedicion").css("bottom","110%");
                $("#negroni").animate({bottom:'-110%'},"slow");
                $("#expedicion").animate({bottom:'10%'},"slow");

                $("#expedicionG1").css("bottom","110%");
                $("#negroniG1").animate({bottom:'-110%'},"slow");
                $("#expedicionG1").animate({bottom:'10%'},"slow");

                $("#expedicionG2").css("bottom","200%");
                $("#negroniG2").animate({bottom:'-100%'},"slow");
                $("#expedicionG2").animate({bottom:'0%'},"slow");
                
                $("#expedicionG3").css("bottom","370%");
                $("#negroniG3").animate({bottom:'150%'},"slow");
                $("#expedicionG3").animate({bottom:'260%'},"slow");
                
                $("#expedicionG4").css("bottom","485%");
                $("#negroniG4").animate({bottom:'300%'},"slow");
                $("#expedicionG4").animate({bottom:'340%'},"slow");

                $("#expedicionG5").css("bottom","410%");
                $("#negroniG5").animate({bottom:'100%'},"slow");
                $("#expedicionG5").animate({bottom:'200%'},"slow");

                $("#expedicionG6").css("bottom","310%");
                $("#negroniG6").animate({bottom:'100%'},"slow");
                $("#expedicionG6").animate({bottom:'110%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoSaturno()");        
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${expedicionSaturno.precio}.-</p>`)        
                contador=4;
            break;
            case 0:
                $("#negroni").css("bottom","110%");
                $("#tonico").animate({bottom:'-110%'},"slow");
                $("#negroni").animate({bottom:'10%'},"slow");

                $("#negroniG1").css("bottom","110%");
                $("#tonicoG1").animate({bottom:'-110%'},"slow");
                $("#negroniG1").animate({bottom:'10%'},"slow");

                $("#negroniG2").css("bottom","200%");
                $("#tonicoG2").animate({bottom:'-100%'},"slow");
                $("#negroniG2").animate({bottom:'0%'},"slow");
                
                $("#negroniG3").css("bottom","430%");
                $("#tonicoG3").animate({bottom:'220%'},"slow");
                $("#negroniG3").animate({bottom:'320%'},"slow");
                
                $("#negroniG4").css("bottom","520%");
                $("#tonicoG4").animate({bottom:'300%'},"slow");
                $("#negroniG4").animate({bottom:'410%'},"slow");

                $("#negroniG5").css("bottom","400%");
                $("#tonicoG5").animate({bottom:'250%'},"slow");
                $("#negroniG5").animate({bottom:'290%'},"slow");

                $("#negroniG6").css("bottom","310%");
                $("#tonicoG6").animate({bottom:'0%'},"slow");
                $("#negroniG6").animate({bottom:'180%'},"slow");

                $(".addCart_boton").attr("onclick","agregarCarritoNegroni()");
                $("#items--precio").empty();
                $("#items--precio").append(`<p>$${negroniDeLaHuerta.precio}.-</p>`)
                contador=5;
        }
    }
}
function checkin(){
    $(".carritoBoton").empty();
    $(".carritoBoton").append(`<p>Aún no implementado</p>`);
}
btnSwitch.addEventListener('click', () =>{
    testo.classList.toggle('dark');
    mitadA.classList.toggle('dark');
    cajaA.classList.toggle('dark');
    cajaB.classList.toggle('dark');
    btnSwitch.classList.toggle('dark');

    if(testo.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});
if(localStorage.getItem("dark-mode") === "true"){
    testo.classList.add("dark");
    mitadA.classList.add('dark');
    cajaA.classList.add('dark');
    cajaB.classList.add('dark');
    btnSwitch.classList.add('dark');
} else {
    testo.classList.remove("dark");
    mitadA.classList.remove('dark');
    cajaA.classList.remove('dark');
    cajaB.classList.remove('dark');
    btnSwitch.classList.remove('dark');
}
//12
$(document).ready(function() {
    var cantCS = 0;
    var cantPA = 0;
    totales=localStorage.getItem('pivotTotal')

    $(".testin").append(`<input  value="${totales}"></input></>`);


    $(".telon").animate({   width:'0px',},
                            "slow",
                            function(){
                                $(".telon2").delay("100").animate({  width:'0px',},
                                                        "fast",
                                )
                            })
                .delay(2000)
    $("#silverChariot").click(function(){
            $(".carrito12").fadeIn("fast");
            $(".sombraCarrito").fadeIn("fast");
        for(const Trago of carrito){ 

            if(Trago.nombre == "Caribe Solar"){
                cantCS = 1 + cantCS;
            }else if(Trago.nombre == "Penicilina Ahumada"){
                cantPA = 1 + cantPA;
            }
        }
        //$(".carrito12").append(`<div>  <h3>Caribe Solar</h3> <h2>${cantCS}</h2></div>`);
        //$(".carrito12").append(`<div><h3>Penicilina Ahumada</h3> <h2>${cantPA}</h2></div>`);
        //$(".carrito12").append(`<div><h3>Experimento Nro 9</h3> <h2>${cantPA}</h2></div>`);

        cantCS = 0;
        cantPA = 0;
    });

});
$("#equis").click(function(){
    $(".carrito12").fadeOut();
    $(".sombraCarrito").fadeOut("fast");
})