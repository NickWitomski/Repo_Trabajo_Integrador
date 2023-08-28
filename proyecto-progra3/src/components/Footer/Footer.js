import React from "react";

function Footer(){
    return(
        <React.Fragment>
        <div>
            <footer>
            <section>
                <article>
                    <br> 
                    <p class="texto2">Todos los derechos reservados</p>
                    <p class="texto2"> Copyright © 2003-2022 Fort Corporation</p>
                    <p class="texto1"> Marcos Pinto Escalier, Bautista Porcello y  Nicole Witomski</p> 
                    
                    <ul class="contacto">
                        
                        <li class="icono"><i class="fa-brands fa-whatsapp"></i>  </li>
                        <li class="icono"><i class="fa-regular fa-envelope"></i> </li>
                        <li class="icono"> <i class="fa-brands fa-instagram"> </i> </li>
                        <li class="icono"> <i class="fa-solid fa-link"></i> </li>
                        <li class="icono"> <i class="fa-solid fa-circle-info"></i> </li>
                    </ul>
                </article> 
                <article class="art2_footer">
                    <img class="logo_tmdb" src="./img/Logo_TMDB.svg" alt="Logo_themoviedatabase"/> 
                </article>
            </section>   
        </footer>
        </div>
    </React.Fragment>
    )
}

export default Footer;