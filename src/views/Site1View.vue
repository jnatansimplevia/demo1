<script>
import BATHeader from '../components/BATHeader.vue'
import MenuBar2 from '../components/MenuBar2.vue'
import MenuBar from '../components/MenuBar.vue'

export default {
  components: {
    BATHeader,
    MenuBar2,
    MenuBar
  }
}
</script>

<template>
  <BATHeader />
  <MenuBar />
  <MenuBar2 />
  <body class=" bg-slate-600 min-h-full">
    <h1>
      body
    </h1>
  </body>  

  
</template>
