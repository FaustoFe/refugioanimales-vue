<template>
    <div>
        <Header :header_text="header_text"/>
        <b-sidebar id="sidebar-1" title="Filtrar" shadow no-header>
            <div class="p-3">

                <div class="d-flex justify-content-between">
                    <h2>Filtrar</h2>
                    <b-button variant="link" class="text-dark" v-b-toggle.sidebar-1><i class="fa fa-times"></i></b-button>
                </div>

                <b-form-group class="mb-3">
                    <label>Tipo: </label>
                    <b-form-select class="w-100" v-model="filtro.tipo">
                        <b-form-select-option value="">Todos</b-form-select-option>
                        <option
                            v-for="tipo in tipos"
                            :key="tipo.id"
                            :value="tipo.id"
                            :title="tipo.nombre || null"
                        >
                            {{ tipo.nombre }}
                        </option>
                    </b-form-select>
                </b-form-group>

                <b-form-group class="mb-3">
                    <label>Sexo:</label>
                    <b-form-group class="" v-slot="{ ariaDescribedby }">
                        <b-form-radio v-model="filtro.sexo" :aria-describedby="ariaDescribedby" name="some-radios" value="">Todos</b-form-radio>
                        <b-form-radio v-model="filtro.sexo" :aria-describedby="ariaDescribedby" name="some-radios" value="M">Macho</b-form-radio>
                        <b-form-radio v-model="filtro.sexo" :aria-describedby="ariaDescribedby" name="some-radios" value="H">Hembra</b-form-radio>
                    </b-form-group>
                </b-form-group>

                <b-form-group class="mb-3">
                    <label>Edad: </label>
                    <b-form-input v-model="filtro.edad" type="number"></b-form-input>
                </b-form-group> 

                <b-button id="limpiar-sidebar" @click="cleanFilters()"><i class="fa fa-times"></i> Limpiar filtro</b-button>

            </div>    
        </b-sidebar>

        <div id="gallery">
            <b-container id="animals-container">
                <b-row>    
                    <b-col cols="6" sm="6" id="filter-btn">
                        <p v-b-toggle.sidebar-1><i class="fa fa-filter" aria-hidden="true"></i> Filtrar</p>
                    </b-col>
                    <b-col cols="6" sm="6" id="cant-mostrados" v-if="cantMostrando != cantTotal">
                        <p>Mostrando {{cantMostrando}} de {{cantTotal}}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="6" cols="12" v-for="animal in animales" :key="animal.id">
                        <AnimalCard :animal="animal"/>  
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import AnimalCard from '@/components/AnimalCard'
import Header from '@/components/Header'
import TipoAnimalService from '@/services/tipo_animal'
import AnimalService from '@/services/animal'

export default {
  name: 'Home',
  components: {
    AnimalCard,
    Header
  },
  data() {
    return {
      filtro: {
        edad: 0, 
        sexo: '', 
        tipo: '',
      },
      animales: [],
      tipos: [],
      header_text: '',  
      loading_sources: true,
      cantMostrando: 0,
      cantTotal: 0,
    }   
  },
  watch: {
    filtro: {
      handler: function () {
        this.getAnimales()
      },
      deep: true
    },
  },
  mounted() {
    this.getAnimales()
    this.getTipos()
  },
  methods: {
    async getAnimales(){
      this.animales = await AnimalService.getAnimales(this.filtro)
      this.cantMostrando = this.animales.length
      if(this.loading_sources) {
        this.header_text = 'Hay '+ this.animales.length +' <i class="fa fa-paw" aria-hidden="true"></i> buscando un hogar!'
        this.cantTotal = this.animales.length
      }
      this.loading_sources = false
    },
    async getTipos(){
      this.tipos = await TipoAnimalService.getTipoAnimal()
    },
    cleanFilters(){
      this.filtro.edad = 0
      this.filtro.sexo = ''
      this.filtro.tipo = ''
      this.getAnimales()
    }
  },
}
</script>

<style scoped>

#gallery {
    margin-top: 1rem;
}

#filter-btn {
    justify-content: flex-start;
    display: flex;
    margin-top: 1rem;
}

#cant-mostrados {
    justify-content: flex-end;
    display: flex;
    margin-top: 1rem;
}

#limpiar-sidebar{
    margin-top: 2rem;
    background-color: rgb(255, 39, 1);
    border: none;
}

</style>
