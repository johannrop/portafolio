let liInicio = document.getElementById('liInicio')
let liConocimientos = document.getElementById('liConocimientos')
let liProyectos = document.getElementById('liProyectos')
let liDocumentos = document.getElementById('liDocumentos')

let sectionCarrusel = document.getElementById('carrusel')
let sectionPresentacion = document.getElementById('secPresentacion')
let sectionTecnologias = document.getElementById('tecnologias')
let sectionImgPubli = document.getElementById('sectionImgPubli')


let seccionInicio = ['sectionCarrusel', 'sectionPresentacion', 'sectionTecnologias', 'sectionImgPubli']



liConocimientos.addEventListener('click',conocimientos)
liInicio.addEventListener('click',inicio)



function conocimientos(){
    ocultarInicio()
    /* seccionInicio.forEach((secciones) =>{
        secciones.style.display = 'none'
    })  */ 
}

function inicio(){
   mostarInicio()
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