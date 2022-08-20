function modalShow(modalId){
    let modalMenu = document.getElementById(modalId)
    modalMenu.classList.add('show') 
    modalMenu.addEventListener('click', (e)=>{
       if(e.target.id == 'modal' || e.target.id == 'link'){
        modalMenu.classList.remove('show')
    }
    })
}

const MENU = document.getElementById('menu')
MENU.addEventListener('click', ()=> modalShow('modal'))
