<template>
  <div id="app">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

    <!-- navbar -->
    <b-navbar toggleable="md" type="dark" variant="dark"> 

      <b-container>

        <b-navbar-toggle class="nav" target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand class="nav">Refugio de Animales</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>

                <b-nav-item :to="{name: 'home'}">En Adopción</b-nav-item>
                <b-nav-item :to="{name: 'eventos'}">Eventos</b-nav-item>
                <b-nav-item :to="{name: 'about'}">¿Quienes somos?</b-nav-item>

            </b-navbar-nav>

        </b-collapse>

      </b-container>

    </b-navbar>

    <!-- body -->
    <router-view/>

    <!-- footer -->
    <b-container>

    </b-container>


  </div>
</template>

<style>
    #app{
        min-height: 100vh;
        height: 100% auto;
        background: rgb(241,233,255);
        background: linear-gradient(149deg, rgba(241,233,255,1) 0%, rgba(204,211,255,1) 35%, rgba(174,241,255,1) 100%);
    }

 
    .navbar.navbar-dark.bg-dark{
        background-color: rgb(98, 43, 226)!important;
    }
    
</style>
