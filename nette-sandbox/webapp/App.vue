<template>
  <div>
    <div :key="index" v-for="(person, index) in persons">
      #{{index}}
      <user-input
       :index="index"
       :firstname="person.firstname"
       :surname="person.surname"
       @input="onUserChange" />
      
      <a 
        v-show="persons.length > 1" 
        href="#" 
        @click.prevent.stop="onPersonDelete(index)"
      >
        Smazat
      </a>
    </div>
    <input type="button" @click="onAddPerson" value="+">
    <input type="submit" @click="onInputSend" value="Send"/>
    <br>
    <div class="alert alert-success" v-if="formSend">Formular odeslan</div>
  </div>
</template>

<script>
import Vue from "vue";
import UserInput from "./UserInput.vue";

export default {
  components: { UserInput },
  data() {
    return {
      persons: [{ firstname: "", surname: "" }],
      formSend: false
    };
  },
  methods: {
    onUserChange(index, firstname, surname) {
      this.persons[index].firstname = firstname;
      this.persons[index].surname = surname;
    },
    onAddPerson() {
      this.persons.push({ firstname: "", surname: "" });
    },
    onPersonDelete(i) {
      // this.persons = this.persons.filter((p, index) => {
      // return index !== i;
      // });
      this.persons.splice(i);
    },
    async onInputSend() {
      const res = await fetch("http://0.0.0.0:8888/homepage/vue", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ persons: this.persons })
      });

      if (res.ok) {
        this.formSend = true;
        console.log(res);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
