<template>
  <div class="hello">
    <h2>Persons on Nette Camp 2019</h2>

    <div v-if="persons.length === 0">
      <p>Please add first one.</p>
      <input type="button" value="+" @click="onAddNewPerson">
    </div>
    <div v-else>
      <div
        :key="person.id" 
        v-for="(person, i) in persons"
      >
        #{{i}} / @{{person.id}}
        <person-input :person="person" @typed="onPersonTyped" />
        <input type="button" value="x" @click="onPersonDrop(i)">
      </div>
      <input type="button" value="+" @click="onAddNewPerson">
      <input type="button" value="Save" @click="onPersonsSave">
      <input type="button" value="Register" @click="onFormSent">
    </div>
    <div v-if="saved">{{persons}}</div>
    <div v-if="registered">All data saved!</div>
  </div>
</template>

<script>
import PersonInput from "./PersonInput.vue";

export default {
  components: {
    PersonInput
  },
  data: () => ({
    persons: [],
    ids: 0,
    saved: false,
    registered: false,
  }),
  methods: {
    onAddNewPerson() {
      this.persons.push({
        id: this.ids++,
        firstname: "",
        surname: ""
      });
    },
    onPersonTyped(person) {
      const personKey = this.persons.findIndex(p => p.id === person.id);
      this.$set(this.persons, personKey, person);
    },
    onPersonDrop(index) {
      this.$delete(this.persons, index);
    },
    onPersonsSave() {
      this.saved = true;
    },
    async onFormSent() {
      const res = await fetch("URL", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ persons: this.persons })
      });

      if (res.ok) {
        this.registered = true;
      }
    }
  }
};
</script>