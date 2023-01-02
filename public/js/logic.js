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
    constructor(id, id2, img1, img2, titulo, descripcion1, descripcion2){
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
    'desarrollo','eventDesarrollo',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'DESARROLO','Imagine y cree su sistema',
    'La programación es una parte importante en el ambito de desarollo de software, ya que es el paso de lo imaginado a su creación. Esto gracias a los diferente jenguajes de programación que existen, cada uno ajustansoe a la necesidades requeridas')

let baseDatos = new Tarjetas (
    'baseDatos','eventBaseDatos',
    'https://i.ibb.co/ZJFxsdt/database.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'BASE DE DATOS','Alamacene su información importante.',
    'Gracias a las base de datos podemos almacenar y ver nuestra informacion de manera segura. Estas base de datos se integran a los sistemas brindando mayor seguridad y rendimiento al realizar operaciones sobre estos datos almacenados.')

let metodologia = new Tarjetas (
    'metodologia', 'eventMetodologia',
    'https://i.ibb.co/k40dYQC/metodologia.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'METODOLOGIA','Por que el tiempo es oro.',
    'La utilización de metodologias de trabajo en el ambito de desarrollo de software, se hace indispensable para culminar las metas propuestas en el tiempo acordado.')

let controlVersiones = new Tarjetas (
    'controlVersiones', 'eventControlVersiones',
    'https://i.ibb.co/LJzNcfz/git.png',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CONTROL DE VERSIONES','Conocer cada cambio en el desarrollo.',
    'Cuando se desarrolla un sistema es importante es importante conocer cada cambio que se va haciendo en el codigo; por ello implementar un controlador de versiones es indispensable ya que este nos brinda información de cada cambio, ademas de verlos detalladamente.')

let cleanCode  = new Tarjetas (
    'cleanCode','eventCleanCode',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CLEAN CODE','Por que lo simple enamora.',
    'Escribir un codigo es una caulidad importante para el desarrollo de software, ya que ayuda a entender de una manera eficiente el codigo escrito. ademas de volver mas agil la comprension de este.')

listaActitudes.push(desarrollo, baseDatos, metodologia, controlVersiones, cleanCode)


/* CONOCIMIENTOS */

let javaScript = new Tarjetas (
    'javaScript','eventjavaScript',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'JAVASCRIPT','JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let java = new Tarjetas (
    'java','eventjava',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'JAVA','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let html5 = new Tarjetas (
    'html5','eventhtml5',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'HTML5','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let css = new Tarjetas (
    'css','eventcss',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CSS','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let angular = new Tarjetas (
    'angular','eventangular',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'ANGULAR','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let spring = new Tarjetas (
    'spring','eventSpring',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'SPRING','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let git = new Tarjetas (
    'git','eventGit',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'GIT','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

listaConocimientos.push(javaScript, java, html5, css, angular, spring, git)



let nombreSection
function conocimientos(){    
    
    ocultarInicio()
    sectionConocimientos.style.display = 'flex'
    console.log(listaConocimientos)
    listaConocimientos.forEach((actitud) => {

        metodoTemp = "mostrar('" + actitud.id2 +"')"
        ocultarTemp = "hide('" + actitud.id2 +"')"
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
                                            <p class="parrafoTarjeta">${actitud.descripcion2}</p>
                                        </div>
                                </div>
                        </div>`       
        divTarjetasCon.innerHTML += tipoActitud
       })
    
       popupOcul = document.querySelector('.envolturaPopup')
       popupClose = document.querySelector(".popupClose");
       popupClose.addEventListener('click',hide)
       listaConocimientos = []  
}
let popupClose
function inicio(){

mostrarInicio()
    
    nombreSection = 'inicio'
   sectionConocimientos.style.display = 'none'
   /* crearTarjetasPopUps(listaActitudes, nombreSection)  */
    listaActitudes.forEach((actitud) => {
    metodoTemp = "mostrar('" + actitud.id2 +"')"
    ocultarTemp = "hide('" + actitud.id2 +"')"
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
   })

   popupOcul = document.querySelector('.envolturaPopup')
   popupClose = document.querySelector(".popupClose");
   popupClose.addEventListener('click',hide)
   listaActitudes = []  
}

function crearTarjetasPopUps(x,nombre){
    let metodoTemp = null   
    let ocultarTemp = null
   
    x.forEach((actitud) => {
        
        metodoTemp = "mostrar('" + actitud.id2 +"')"
        ocultarTemp = "hide('" + actitud.id2 +"')"
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
                        
                        if (nombre === 'inicio'){
                            divTarjetas.innerHTML += tipoActitud
                                }else if(nombre === 'conocimientos'){
                                    divTarjetasCon.innerHTML += tipoActitud 
                                }
       })

       

       listaActitudes = []

       console.log(x)
       popupOcul = document.querySelector('.envolturaPopup')
       popupClose = document.querySelector(".popupClose");
       popupClose.addEventListener('click',hide)
       
}



function mostrar(x){
    let tempEvent
    console.log(x)
    tempEvent = document.getElementById(x)
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