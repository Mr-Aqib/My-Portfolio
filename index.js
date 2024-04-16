let sidebar=document.querySelector('.sidebar')
let sidebarbtn=document.querySelector('.sidebar-btn')

sidebarbtn.addEventListener('click',()=>
{
    sidebar.classList.toggle('sidebar-animation')
    sidebar.classList.toggle('sidebar-close')
})