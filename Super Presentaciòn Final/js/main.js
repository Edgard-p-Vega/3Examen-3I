// Defino el contenedor HTML en donde colocaré los datos a cargar dinamicamente.
let tagTBody = document.querySelector("#listaFun tbody");
// indicando la direccion donde esta mi API
let pUrl = "https://my-json-server.typicode.com/Edgard-p-Vega/FakeapiExam/funciones";

fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

    /*
    let listaComentario = data.comentarios;
    console.log(data.comentarios)
    */
   let listaComentario = data;

    listaComentario.forEach(element => {
        // Crear los objetos filas y columnas de la tabla con el DOM HTML
        let tagFila = document.createElement("tr");
        let tagID = document.createElement("td");
        let tagHora = document.createElement("td");
        let tagCompra = document.createElement("td");
       

        tagFila.setAttribute("id", element.id);
        tagID.innerHTML = element.id;
        tagHora.innerHTML = element.hora;
        tagCompra.innerHTML = element.compra;
        

        // Agrego los objetos DOM HTML a su contenedor
        tagFila.appendChild(tagID);
        tagFila.appendChild(tagHora);
        tagFila.appendChild(tagCompra);
        

        tagTBody.appendChild(tagFila);       
    });        
    }     
     ); 
