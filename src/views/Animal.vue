<template>
    <div>
        <b-container id="panel" v-if="!loading_sources">
             <b-row id="contact-info">
                <b-col sm="12" md="6">
                    <div class="container">
                        <img class="animal-img-blur" :src="animal.imagen_path">
                        <img class="animal-img" :src="animal.imagen_path">
                    </div>
                </b-col>
                <b-col sm="12" md="6" class="mt-3 mt-md-0">
                    <div class="animal-text container">
                        <h1>{{animal.nombre}}</h1>
                        <hr>
                        <div v-if="animal.descripcion && animal.descripcion.length > 0">
                            <h6>{{animal.descripcion}}</h6>
                            <hr>
                        </div>
                        <h5 v-if="animal.sexo === 'H'">Sexo: <i class="fa fa-venus"></i></h5>
                        <h5 v-else>Sexo: <i class="fa fa-mars"></i></h5>
                        <h5 v-if="animal.castrado">Castrado: Si <i class="fa fa-check" aria-hidden="true"></i></h5>
                        <h5 v-if="!animal.castrado">Castrado: No <i class="fa fa-times" aria-hidden="true"></i></h5>
                        <h5 v-if="animal.vacunas">Vacunas: {{animal.vacunas}}</h5>
                        <h5>Raza: {{animal.raza}}</h5>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import AnimalService from '@/services/animal'

export default {
  name: 'Animal',
  data() {
    return {
      animal: null,
      loading_sources: true,
    }
  },
  mounted() {
    this.getAnimalInfo(this.$route.params.id)
  },
  methods: {
    async getAnimalInfo(id) {
      this.animal = await AnimalService.getAnimalById(id)
      this.loading_sources = false
    }
  }
}
</script>

<style scoped>

    h1 {
        text-shadow: 2px 2px 2px rgb(185, 185, 185);
    }

    #panel {
        padding: 2rem;
        box-shadow: 0px 0px 10px gray;
        border-radius: 25px;
        margin-top: 3rem;
        margin-bottom: 3rem;
        background: white;
        height: fit-content;
    }

    .container {
        position: relative;
        overflow: hidden;
        height: 70vh;
    }

    .animal-img, .animal-img-blur {
        height: 100%;
        width: 100%;
    }

    .animal-img-blur {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        filter: blur(8px);
        -webkit-filter: blur(3px);
        z-index: 1;
    }

    .animal-img {
        position: absolute;
        object-fit: contain;
        z-index: 10;
        left: 0;
    }

    .fa-check {
        color: springgreen;
        text-shadow: 2px 2px 2px rgb(185, 185, 185);
    }

    .fa-times {
        color: red;
        text-shadow: 2px 2px 2px rgb(185, 185, 185);
    }

    .fa-venus {
        color: deeppink;
        text-shadow: 2px 2px 2px rgb(185, 185, 185);
    }

    .fa-mars {
        color: dodgerblue;
        text-shadow: 2px 2px 2px rgb(185, 185, 185);
    }

</style>