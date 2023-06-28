<template>
    <div>
        <b-container id="container">
            <h1>Sobre nosotros</h1>
            <p>Somos un grupo de personas que trabaja para promover y lograr la tenencia responsable de animales domésticos, y adhiere a toda medida que procure el bienestar animal en general.
                Para esto, contamos con esta página web a la que acaba de acceder y desde ella facilitamos la adopción de perros y gatos rescatados de la calle.
                Estos son alojados provisoriamente, y rehabilitados si la situación lo requiere en nuestro Refugio.</p>
            <b-row id="contact-info">
                <b-col sm="12" md="6">
                    <h1>Contacto</h1>
                    <div class="contact-links">
                        <a href="" target="_blank"><i class="fa fa-phone"></i> +54 9 0000 000000</a>
                        <a href="" target="_blank"><i class="fab fa-whatsapp"></i> +54 9 0000 000000</a>
                        <a href="" target="_blank"><i class="fab fa-facebook-f"></i> /refugioanimales</a>
                        <a href="" target="_blank"><i class="fab fa-instagram"></i> /refugioanimales</a>
                    </div>
                </b-col>
                <b-col sm="12" md="6">
                    <h1>¿Donde estamos?</h1>
                    <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    #container {
        padding: 2rem;
        box-shadow: 0px 0px 10px gray;
        border-radius: 25px;
        margin-top: 3rem;
        margin-bottom: 3rem;
        background: white;
    }

    #contact-info {
        margin-top: 3rem;
    }

    .map-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
    }

    .map-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }

    .contact-links{
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .contact-links a {
        font-size: 1.1rem;
        text-align: left;
        text-decoration: none;
        color: #000;
        width: fit-content;
        height: auto;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
        margin-bottom: 0.5rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        transition: transform .2s;
    }

    .contact-links a:hover{
        box-shadow: 0px 0px 10px gray;
    }

    .contact-links a .fab{
        line-height: 40px;
        font-size: 1.3rem;
    }

    .contact-links a .fa {
        line-height: 40px;
        font-size: 1rem;
    }

    .social-links a {
        position: relative;
        transition: transform 0.5s;
    }

</style>