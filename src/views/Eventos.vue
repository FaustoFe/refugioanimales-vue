<template>
    <div>
        <Header :header_text="header_text"/>
        <div id="eventos">
            <b-container fluid="md">
                <b-row>
                    <b-col cols="12" v-for="evento in eventos" :key="evento.id">
                        <EventCard :evento="evento"/>  
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import Header from '@/components/Header'
import EventoService from '@/services/evento'

export default {
  name: 'Home',
  components: {
    EventCard,
    Header
  },
  data() {
    return {
      eventos: [],
      header_text: 'Eventos',
    }   
  },
  mounted() {
    this.getEventos()
  },
  methods: {
    async getEventos() {
      this.eventos = await EventoService.getEventos()
    },
  }
}
</script>

<style scoped>

    #eventos {
        margin-top: 1rem;
    }

</style>