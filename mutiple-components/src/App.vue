<template>
  <!-- 
    @click.[right, left, alt, shift, self, ...]
   -->
  <div>
    <h1>{{ title }}</h1>
    <!-- <div v-if="showModal">
      <Modal :header="header" text="text content" :theme="theme[1]" @close="toggleModal" />
    </div> -->
      <teleport to=".modals" v-if="showModal">
      <ModalSlots :theme="theme[0]" @close="toggleModal" >
        <template v-slot:links>
          <a href="">Signup now</a>
          <a href="">more Info</a>
        </template>
        <h1>Title</h1>
        <p>Content</p>
        
      </ModalSlots>
    </teleport>
    <button @click="toggleModal">Open Modal</button>

    <!-- modal 2 -->
    <teleport to=".modals" v-if="showModal2">
      <Modal2  @close="toggleModal2" @subscribe="subscribeData($event)" >
        <template v-slot:heading>
          Please write your email and phone for the gaveaway
        </template>
        <template v-slot:body>
          <input type="text" placeholder="Phone">
          <input type="text" placeholder="Email">
        </template>
        <template v-slot:footer>
          No Buttons, I'm the buttons
        </template>
      </Modal2>
    </teleport>
    <button @click="toggleModal2" >Open Modal 2</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Modal2 from './components/Modal2.vue'
import ModalSlots from './components/ModalSlots.vue';

export default {
  name: 'App',
  data(){
    return {
      title: 'My first App',
      header: 'Signup for the Giveaway!',
      theme: ['sale', 'winner'],
      showModal: false,
      showModal2: false,
    }
  },
  components: {
    Modal,
    ModalSlots,
    Modal2
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    },
    subscribeData(data){
      alert(data);
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
h1{
  color:#f00
}
</style>
