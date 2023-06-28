<template>
<div>
    <b-row>
        <div class="card-group evet-card mb-2">
            <div class="card mb-0">
                <div class="card-body py-1">
                    <div class="row">
                        <b-col cols="3" sm="2">
                            <div class="display-4"> <span class="badge">{{dateFormatDD(evento.fecha_inicio)}}</span> </div>
                            <div class="display-4 d-flex"> {{dateFormatMMM(evento.fecha_inicio)}} </div>
                        </b-col>
                        <b-col cols="9" sm="10">
                            <div class="d-flex flex-column"> 
                                <h3 class="card-title text-uppercase">{{evento.titulo}}</h3>
                                <div class="card-text"> {{evento.descripcion}} </div>
                                <hr>
                                <b-row>
                                    <b-col md="auto" sm="12"><i class="far fa-clock"></i> {{dateFormatHHMM(evento.fecha_inicio)}} - {{dateFormatHHMM(evento.fecha_fin)}}</b-col>
                                    <b-col md="auto" sm="12"><i class="fas fa-calendar-check"></i> {{dateFormatDDDD(evento.fecha_inicio)}}</b-col>
                                    <b-col md="auto" sm="12"><i class="fas fa-map-marker-alt"></i> {{evento.lugar}}</b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </div>
                </div>
            </div>
        </div>
    </b-row>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EventCard',
  props: [
    'evento'
  ],
  created(){
    moment.locale('es-AR')
  },
  methods: { 
    dateFormatMMM(value){
      if (value) {
        let string = moment(String(value)).format('MMM')
        return string.charAt(0).toUpperCase() + string.slice(1)
      } 
    },
    dateFormatDD(value){
      if (value) {
        return moment(String(value)).format('DD')
      } 
    },
    dateFormatHHMM(value){
      if (value) {
        return moment(moment.utc(value)).format('HH:mm')
      } 
    },
    dateFormatDDDD(value){
      if (value) {
        let string = moment(String(value)).format('dddd')
        return string.charAt(0).toUpperCase() + string.slice(1)
      } 
    },
  }, 
}
</script>

<style scoped>

    .card{
        padding: 1rem;
        transition: transform .2s;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0px 0px 10px gray;
    }

    .card:hover{
        box-shadow: 0px 0px 10px gray;
        transform: scale(1.02);
    }

    .evet-card > .card .badge {
        background: #ba9643;
    }

</style>
