<template>
    <div>
        <div id="header">
            <h1 id="header-text" v-html="header_text"></h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
    'header_text'
  ]
}
</script>

<style scoped>

#header {
    position: relative;
    display : flex;
    align-items : center;
    justify-content: center;
    height: 15vh;
    background-color: white;
    box-shadow: 0px 0px 10px gray;
}

#header-text {
    text-align: center;
    font-size: 5vh;
}

</style>