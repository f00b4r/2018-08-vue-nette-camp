<template>
  <span>
    Jmeno: <input @change="onType" name="name" v-model="p.firstname" type="text">
    Prijmeni: <input @change="onType" name="surname" v-model="p.surname" type="text">
  </span>
</template>

<script>
export default {
  props: {
    person: {
        type: Object
    }
  },
  data: () => ({
      p: {}
  }),
  created() {
      this.p.id = this.person.id;
      this.p.firstname = this.person.firstname;
      this.p.surname = this.person.surname;
  },
  methods: {
    onType() {
        this.$emit('typed', this.p);
    }
  }
};
</script>