let liInicio = document.getElementById('liInicio')
let liConocimientos = document.getElementById('liConocimientos')
let liProyectos = document.getElementById('liProyectos')
let liDocumentos = document.getElementById('liDocumentos')



const divTarjetas = document.getElementById('divTarjetas') 
const divTarjetasCon = document.getElementById('divTarjetasCon')
let sectionCarrusel = document.getElementById('carrusel')
let sectionPresentacion = document.getElementById('secPresentacion')
let sectionTecnologias = document.getElementById('tecnologias')
let sectionImgPubli = document.getElementById('sectionImgPubli')
let sectionConocimientos = document.getElementById('sectionConocimientos')
let seccionInicio = ['sectionCarrusel', 'sectionPresentacion', 'sectionTecnologias', 'sectionImgPubli']



liConocimientos.addEventListener('click',conocimientos)
liInicio.addEventListener('click',inicio)

let arreglo =[]

let listaActitudes = []
let listaConocimientos = []
let tipoActitud 

class Tarjetas{
    constructor(var1, var2, id, id2, img1, img2, titulo, descripcion1, descripcion2){
        this.var1 = var1
        this.var2 = var2
        this.id = id
        this.id2 = id2
        this.img1= img1
        this.img2= img2
        this.titulo= titulo
        this.descripcion1 = descripcion1
        this.descripcion2 = descripcion2
    }
}

/* ACTITUDES */

let desarrollo = new Tarjetas (
    'desarrolloEnlace','desarrolloPopUp',
    'desarrollo','eventDesarrollo',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'DESARROLO','Lorem, ipsum dolor sit amet consectetur adipisicing elit.','descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let baseDatos = new Tarjetas (
    'baseDatosEnlace','baseDatosPopUp',
    'baseDatos','eventBaseDatos',
    'https://i.ibb.co/ZJFxsdt/database.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'BASE DE DATOS','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let metodologia = new Tarjetas (
    'metodologiaEnlace','metodologiaPopUp',
    'metodologia', 'eventMetodologia',
    'https://i.ibb.co/k40dYQC/metodologia.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'METODOLOGIA','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let controlVersiones = new Tarjetas (
    'controlVersionesEnlace','controlVersionesPopUp',
    'controlVersiones', 'eventControlVersiones',
    'https://i.ibb.co/LJzNcfz/git.png',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CONTROL DE VERSIONES','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let cleanCode  = new Tarjetas (
    'cleanCodeEnlace','cleanCodePopUp',
    'cleanCode','eventCleanCode',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CLEAN CODE','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

listaActitudes.push(desarrollo, baseDatos, metodologia, controlVersiones, cleanCode)


/* CONOCIMIENTOS */

let javaScript = new Tarjetas (
    'javaSEnlace','javaPopUp',
    'javaScript','eventjavaScript',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'JAVA SCRIPT','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let java = new Tarjetas (
    'javaEnlace','javaPopUp',
    'java','eventjava',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'JAVA','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let html5 = new Tarjetas (
    'html5Enlace','html5PopUp',
    'html5','eventhtml5',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'HTML5','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let css = new Tarjetas (
    'cssEnlace','cssPopUp',
    'css','eventcss',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CSS','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let angular = new Tarjetas (
    'angularEnlace','angularPopUp',
    'angular','eventangular',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'ANGULAR','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let spring = new Tarjetas (
    'springEnlace','springPopUp',
    'spring','eventSpring',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'SPRING','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let git = new Tarjetas (
    'gitEnlace','gitPopUp',
    'git','eventGit',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'GIT','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

listaConocimientos.push(javaScript, java, html5, css, angular, spring, git)
let metodoTemp   
let ocultarTemp

function conocimientos(){    
   
    ocultarInicio()
    sectionConocimientos.style.display='flex'
    listaConocimientos.forEach((actitud) => {
        console.log(actitud.titulo)
        tipoActitud = `<a href="#">
                    <div class="tarjetaTec">
                        <img src=${actitud.img1} alt="">
                        <div class="contendidoDivTec">
                            <span>${actitud.titulo}</span>
                            <p>${actitud.descripcion1}</p>
                        </div>
                    </div>
                </a>` 
        divTarjetasCon.innerHTML += tipoActitud
       })
       listaConocimientos = []
}
let popupClose
function inicio(){

mostrarInicio()
   sectionConocimientos.style.display = 'none'
   listaActitudes.forEach((actitud) => {
    console.log(actitud.titulo)
    metodoTemp = "mostrar('" + actitud.id2 +"')"
    ocultarTemp = "hide('" + actitud.id2 +"')"
    console.log(ocultarTemp)
    tipoActitud = `<a id=${actitud.id}  onClick=${metodoTemp} >
                        <div class="tarjetaTec">
                            <img src=${actitud.img1} alt="">
                            <div class="contendidoDivTec">
                                <span>${actitud.titulo}</span>
                                <p>${actitud.descripcion1}</p>
                            </div>
                        </div>
                    </a>
                    <div id=${actitud.id2} onClick=${ocultarTemp} class="envolturaPopup" >
                            <div class="popup">
                                <div class="popupClose">X</div>
                                    <div class="modal-content">
                                        <img src=${actitud.img2} alt="">
                                        <span>${actitud.titulo}</span>
                                        <p>${actitud.descripcion2}</p>
                                    </div>
                            </div>
                    </div>`       
    divTarjetas.innerHTML += tipoActitud
    console.log(metodoTemp)


   })

   popupOcul = document.querySelector('.envolturaPopup')
   popupClose = document.querySelector(".popupClose");
   popupClose.addEventListener('click',hide)
   listaActitudes = [] 
}



function mostrar(x){
    let tempEvent = document.getElementById(x)
    tempEvent.style.display = "block";
}  

function hide(z) {
    let occult = document.getElementById(z)
    occult.style.display = 'none'
}

function ocultarInicio(){
    sectionPresentacion.style.display = 'none'
    sectionImgPubli.style.display = 'none'
    sectionCarrusel.style.display = 'none'
    sectionTecnologias.style.display = 'none' 
}

function  mostrarInicio(){
    sectionPresentacion.style.display = 'flex'
    sectionImgPubli.style.display = 'flex'
    sectionCarrusel.style.display = 'flex'
    sectionTecnologias.style.display = 'flex'
}
window.onload = inicio