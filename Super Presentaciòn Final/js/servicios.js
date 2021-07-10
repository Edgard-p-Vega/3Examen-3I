  /* Ocultar los article*/
  var listaArticle = document.querySelectorAll('#servicios div');
  let cantidadItem = listaArticle.length; // Obtiene la cantidad de elementos en el arreglo
  console.log ('Cantidad de article: ' + cantidadItem);       

  for (let i = 0; i < cantidadItem; i++){
      if (listaArticle[i].classList.contains('visible')) {
          listaArticle[i].classList.remove('visible');
      }
      listaArticle[i].classList.add('oculta');
  }

  /* programando el evento onClick del menu*/
  let listaMenus = document.querySelectorAll('#menuSer li');
  for (let j=0; j<listaMenus.length; j++){
      listaMenus[j].onclick = function (){
          /* Asegurarme que todos los demas estan ocultos*/
          for (let k=0; k<listaArticle.length; k++){
              if (listaArticle[k].classList.contains('visible')){
                listaArticle[k].classList.remove('visible');
                listaArticle[k].classList.add('oculta');
              }   
          }

          if (listaArticle[j].classList.contains('oculta')){
              listaArticle[j].classList.remove('oculta');
          }
          listaArticle[j].classList.add('visible');

          
      };
  }