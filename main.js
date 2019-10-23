let lista = document.querySelector ('nav')
let close = document.querySelector('.xis')
let open = document.querySelector('.menu')

function openMenu(){
    lista.style.display = 'block' 
    close.style.display = 'block'
    open.style.display = 'none'
    console.log('igual none' , lista)
}

function closeMenu(){
    lista.style.display = 'none' 
    close.style.display = 'none'
    open.style.display = 'block'
}
