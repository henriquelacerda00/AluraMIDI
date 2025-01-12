function tocarSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);
  
    if(elemento != null&& elemento.localName === 'audio'){
      elemento.play()
    }else{
      alert('seletor invalido')
    }
  }
  
  const listaDeTeclas = document.querySelectorAll('.tecla');
  
      for(let i = 0 ; i<listaDeTeclas.length;i++){
         const teclas = listaDeTeclas[i];
         const instrumento = teclas.classList[1];
         const elementoAudio = `#som_${instrumento}`
  
         teclas.onclick = function(){
          tocarSom(elementoAudio)
         }
  
         teclas.onkeydown = function(event){
          if(event.code === 'Space' || event.code === 'Enter'){
              teclas.classList.add('ativa');
          }
         }
         teclas.onkeyup = function(){
          teclas.classList.remove('ativa');
         }
      }
