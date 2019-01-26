<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <p> Use import('@/components/someModule') to lazy load.</p>
  </div>
</template>

<script>
export default {
  name: 'lazy',
  data() {
    return {
      msg: 'lazy loading this module',
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
