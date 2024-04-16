let sidebar=document.querySelector('.sidebar')
let sidebarbtn=document.querySelector('.sidebar-btn')
let navclosebtn=document.querySelector('.close-btn-sidenav')
sidebarbtn.addEventListener('click',()=>
{
    sidebar.classList.toggle('sidebar-animation')

})
navclosebtn.addEventListener('click',()=>
{
  
    sidebar.classList.remove('sidebar-animation')
})