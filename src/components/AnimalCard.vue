<template>
    <div>
        <router-link :to="{ name: 'animal', params: { id: animal.id }}" class="card mb-3" style="max-width: 25rem;">
            <b-card-img :src="animal.imagen_path" class="card-img-top" :alt="animal.nombre"></b-card-img>
            <div class="card-body">
                <b-card-title>
                    {{animal.nombre}}
                    <i v-if="animal.sexo === 'H'" class="fa fa-venus"></i>
                    <i v-else class="fa fa-mars"></i>
                </b-card-title>
                <b-card-img id="img-blur" :src="animal.imagen" top ></b-card-img>
                <b-card-text>
                    <div v-if="animal.edad === 1">
                        Edad: {{animal.edad}} año
                    </div>
                    <div v-else>
                        Edad: {{animal.edad}} años
                    </div>
                </b-card-text> 
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: [
    'animal'
  ]
}
</script>

<style scoped>
    .card{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        transition: transform .2s;
        border-radius: 15px;
        overflow: hidden;
        text-decoration: none;
        color: #000000;
    }

    .card:hover{
        box-shadow: 0px 0px 10px gray;
        transform: scale(1.02);
    }

    #img-blur{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: 1;
        filter: blur(8px);
        -webkit-filter: blur(3px);
        height: 13rem;
    }

    .card-img-top {
        width: 100%;
        height: 12rem;
        object-fit: contain;
        z-index: 10;
    }

    img.medium{
        max-width: 29rem;
        max-height: 22rem;
        width: 100%;
    }

    .fa-venus {
        color: deeppink;
    }

    .fa-mars {
        color: dodgerblue;
    }
</style>
