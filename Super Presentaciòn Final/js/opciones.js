 /* programando el evento onClick del menu*/
 let listaMenus = document.querySelectorAll('#menuOpc article a');
 for (let j=0; j<listaMenus.length; j++){
     listaMenus[j].onclick = function (){

         if (listaArticle[j].classList.contains('oculta')){
             listaArticle[j].classList.remove('oculta');
         }
         listaArticle[j].classList.add('visible');
     };
 }