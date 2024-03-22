<script>
import axios from 'axios';
export default {
  data() {
    return {
      username:'',
      email:'',
      message:'',
    }
  },
  methods: {
    sendMessage() {
      if ( //Ulteriore controllo da parte di JS qualora l'utente sabotasse la validazione front-end
        this.username != null
        &&
        this.username != ''
        &&
        this.username.length <= 64
        &&
        this.email != null
        &&
        this.email != ''
        &&
        this.email.length <= 255
        &&
        this.message != null
        &&
        this.message != ''
        &&
        this.message.length <= 2048
        ) {
          axios
            .post('http://127.0.0.1:8000/api/contacts', {
              username: this.username,
              email: this.email,
              message: this.message,
            })
            .then(response => {
              console.log('Risposta: ', response.data)
            })
            .catch(err=> { //Terza validazione dei dati (che viene eseguita dalla form request di Contact nel backend)
              alert('ERRORE: dati non validi');
            })
     }
     else {
      alert('INSERISCI I DATI CORRETTI')
     }
      
    }
  }
};
</script>

<template>

  <main>
    <h2 class="page-title mb-4">
      Contatti
    </h2>

    <div class="container w-50 d-flex flex-column">

      <form action="" method="POST" @submit.prevent="sendMessage()">
        <div class=" mb-2 ">
          <label for="username">
            Username <span class="text-danger">*</span>
          </label>
          <input v-model="username" class="form-control" type="text" id="username" name="username" placeholder="Inserisci il tuo username..." maxlength="64" required>
        </div>
        <div class="mb-2 ">
          <label for="email">
            Email <span class="text-danger">*</span>
          </label>
          <input v-model="email" class="form-control" type="email" id="email" name="email" placeholder="Inserisci la tua email..." maxlength="255" required>
        </div>
        <div class="mb-3">
          <label for="message">
            Message <span class="text-danger">*</span>
          </label>
          <textarea v-model="message" class="form-control" type="message" id="message" name="message" rows="3" placeholder="Lascia un messaggio..." maxlength="2048" required></textarea>
        </div>
        <div class="d-flex justify-content-center ">
          <button class="btn page-btn" type="submit">
            Invia
          </button>
        </div>
      </form>
    </div>


  </main>

</template>

<style scoped>

</style>