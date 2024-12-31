function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')  
  
  if(html.classList.contains('light')){
       img.setAttribute('src', './Imagens/avatar-light.png')
       img.setAttribute('alt', 'foto perfil maykBrito usando oculos escuros')
  }
    else{
        img.setAttribute('src', './Imagens/avatar.png')
        img.setAttribute('alt','foto perfil Maykbrito' )
     }
    
}