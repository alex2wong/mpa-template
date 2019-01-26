<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <p> hello and About page is within one entry, share router instance and store </p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: 'About multi-page App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
