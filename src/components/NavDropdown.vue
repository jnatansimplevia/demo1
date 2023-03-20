<template>
    <div class="   m-1 flex  hover:bg-navDarkBlue rounded-md hover:text-white focus:bg-navDarkBlue">
        <div id="main-button" class="relative  block text-left" >
        <div class="flex " @click="isOpen = !isOpen " @focusout="isOpen = false">
            <a href="#" class="m-5">
            {{ title }}
            </a>
        </div>
        <div class="  absolute left-0 z-10  w-56 origin-top-right rounded-md bg-white shadow-md font-normal text-base" 
        v-if="isOpen" @click="activeTab()"
        >
        <div class="py-1">
          <div v-for="(item, i) in items" :key="i" class=" block px-4 py-2 text-gray-900 hover:bg-navLightBlue">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
        </div>
      
    </div>
</div>
  </template>
  
  <script>

  export default {
    name: 'dropdown',
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
      }
      
    },
    methods: {
        activeTab(){
          document.getElementById("main-button").classList.add("activetab")
        }
      },
  }
  </script>

  <style>
  .activetab{
    background-color: brown;
  }
  </style>