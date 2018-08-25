<template>
    <span>
    Jmeno <input @change="onChange" :value="firstname" type="text"/>
    Prijmeni <input @change="onChange" :value="surname" type="text"/>
    </span>
</template>

<script>
import Vue from "vue";

export default {
  props: { index: {}, firstname: {}, surname: {} },
  
  methods: {
    onChange() {
      this.$emit("input", this.index, this.firstname, this.surname);
    }
  }
};
</script>
