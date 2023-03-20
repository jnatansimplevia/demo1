<style scoped>
.active{
background: #000;
}
</style>
<template>
    <div class="relative  flex text-left px-11 flex-col sm:flex-row justify-between items-center  text-navGrey bg-navWhite font-Inter text-xs font-semibold">
      
      <div :class="[isActive ? 'bg-navDarkBlue text-white':'']"  class=" hover:bg-navDarkBlue hover:text-white" @mouseover="isOpen = true" @mouseleave="isOpen = false" @click=" isOpen = !isOpen">
      <button
      class="p-3 flex round-md"
      >Appropriation</button>
              <ul class=" absolute text-navGrey  z-10  w-56 origin-top-right rounded-md bg-white shadow-md font-normal text-base"
              v-show ="isOpen"
              
              >
                <router-link to="/site1"><li class="hover:bg-navLightBlue ">
                  home
                </li></router-link>
                <router-link to="/about">
                <li class="hover:bg-navLightBlue">
                  about
                </li></router-link>
                <router-link to="/site3">
                <li class="hover:bg-navLightBlue">
                  about
                </li></router-link>
                <router-link to="/site4">
                <li class="hover:bg-navLightBlue">
                  about
                </li></router-link>
              </ul>
       </div>

       <div :class="[tab2 ? 'bg-navDarkBlue text-white':'']"  class="hover:bg-navDarkBlue hover:text-white" @mouseover="drop2 = true" @mouseleave="drop2 = false" @click=" drop2 = !drop2">
      <button
      class="p-3 flex"
      >Appropriation</button>
              <ul class=" absolute text-navGrey  z-10  w-56 origin-top-right rounded-md bg-white shadow-md font-normal text-base"
              v-show ="drop2"
              
              >
                <router-link to="/site5"><li class="hover:bg-navLightBlue ">
                  site5
                </li></router-link>
                <router-link to="/site6">
                <li class="hover:bg-navLightBlue">
                  site6
                </li></router-link>
                <router-link to="/site7">
                <li class="hover:bg-navLightBlue">
                  site7
                </li></router-link>
                <router-link to="/site8">
                <li class="hover:bg-navLightBlue">
                  site8
                </li></router-link>
              </ul>
       </div>

       
             

    </div>
  </template>
  
  <script>
  import Dropdown from './NavDropdown.vue';
  export default {
    name: 'navbar',
    components: {
      Dropdown
    },
    data () {
      
      return {
        isOpen: false,
        drop2: false,
        isActive: false,
        tab2: false,
      }
    },
    async created() {
      
      try {
          var current = location.pathname
          const appro = ['/site3','/site4']
          const allot = ['/site5','/site6','/site7','/site8']
          if(appro.includes(current)){
            this.isActive = true;
          }
          else if(allot.includes(current)){
            this.tab2 = true;
          }
          }catch (e) {
          this.errors.push(e)
          }
          },
    methods: {
      toggle(){
        this.isOpen = false;
        this.isActive = true;
      }
    }
  }
  </script>
