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

let listaActitudes = []
let listaConocimientos = []
let tipoActitud 

class Tarjetas{
    constructor(id, img1, img2, titulo, descripcion1, descripcion2){
        this.id = id
        this.img1= img1
        this.img2= img2
        this.titulo= titulo
        this.descripcion1 = descripcion1
        this.descripcion2 = descripcion2
    }
}

/* ACTITUDES */

let desarrollo = new Tarjetas 
    ('desarrollo',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'DESARROLO','Lorem, ipsum dolor sit amet consectetur adipisicing elit.','descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let baseDatos = new Tarjetas 
    ('baseDatos',
    'https://i.ibb.co/ZJFxsdt/database.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'BASE DE DATOS','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let metodologia = new Tarjetas 
    ('metodologia', 
    'https://i.ibb.co/k40dYQC/metodologia.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'METODOLOGIA','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let controlVersiones = new Tarjetas ('controlVersiones', 
    'https://i.ibb.co/LJzNcfz/git.png',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CONTROL DE VERSIONES','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let cleanCode  = new Tarjetas ('cleanCode',
    'https://i.ibb.co/pJV8wYR/develpoing.jpg',
    'https://i.ibb.co/x6FM3zV/metodo.jpg',
    'CLEAN CODE','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

listaActitudes.push(desarrollo, baseDatos, metodologia, controlVersiones, cleanCode)


/* CONOCIMIENTOS */

let javaScript = new Tarjetas ('javaScript',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'JAVA SCRIPT','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let java = new Tarjetas ('java',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'JAVA','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let html5 = new Tarjetas ('html5',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'HTML5','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let css = new Tarjetas ('css',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'CSS','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let angular = new Tarjetas ('angular',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'ANGULAR','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let spring = new Tarjetas ('spring',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'SPRING','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

let git = new Tarjetas ('git',
'https://i.ibb.co/pJV8wYR/develpoing.jpg',
'https://i.ibb.co/x6FM3zV/metodo.jpg',
'GIT','Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
'descripcion2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.')

listaConocimientos.push(javaScript, java, html5, css, angular, spring, git)


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

function inicio(){
    
mostarInicio()
   sectionConocimientos.style.display = 'none'
   listaActitudes.forEach((actitud) => {
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
    divTarjetas.innerHTML += tipoActitud
   })
   listaActitudes = []

}

function ocultarInicio(){
    sectionPresentacion.style.display = 'none'
    sectionImgPubli.style.display = 'none'
    sectionCarrusel.style.display = 'none'
    sectionTecnologias.style.display = 'none' 
}

function  mostarInicio(){
    sectionPresentacion.style.display = 'flex'
    sectionImgPubli.style.display = 'flex'
    sectionCarrusel.style.display = 'flex'
    sectionTecnologias.style.display = 'flex'
   
}



window.onload = inicio