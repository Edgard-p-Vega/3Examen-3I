function todito() {
    document.getElementById("todito").style.display = 'block'; 
}

/*  IMAGENES */
ads = new Array(7);
ads[0] = "imagenes/slider/slider1.jpg";
ads[1] = "imagenes/slider/slider2.jpg";
ads[2] = "imagenes/slider/slider3.jpg";
ads[3] = "imagenes/slider/slider4.jpg";
ads[4] = "imagenes/slider/slider5.jpg";
ads[5] = "imagenes/slider/slider6.jpg";
ads[6] = "imagenes/slider/slider7.jpg";
ads[7] = "imagenes/slider/slider9.jpg";

// cuenta de la imagen siguiente
var longuitudArray = ads.length;
var contador = 0
contador = Math.floor((Math.random() * longuitudArray))
var tiempo = 2// En segundos
var timer = tiempo * 2000;
function banner() {
	contador++;
	contador = contador % longuitudArray
	document.banner.src = ads[contador];
	setTimeout("banner()", timer);
}

/*<ul class="slider">
                        <li><img src="imagenes/slider/slider1.jpg" alt="The"></li>
                        <li><img src="imagenes/slider/slider2.jpg" alt="Royal"></li>
                        <li><img src="imagenes/slider/slider3.jpg" alt="Ballet"></li>
                        <li><img src="imagenes/slider/slider4.jpg" alt="Ballet"></li>
                        <li><img src="imagenes/slider/slider5.jpg" alt="Ballet"></li>
                        <li><img src="imagenes/slider/slider6.jpg" alt="Ballet"></li>
                        <li><img src="imagenes/slider/slider7.jpg" alt="Ballet"></li>                       
                        <li><img src="imagenes/slider/slider9.jpg" alt="Ballet"></li>                       
                    </ul>*/