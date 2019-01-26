<template>
  <div id="login">
    <header>
      <span>Welcome to login</span>
    </header>
    <main>
      <form action="">
        <h3>Login app is seperated with Main app.</h3>
        <a href="#" @click="onLogin">Login to Main App.</a>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    onLogin() {
      console.warn('login succeed, redirect to Home page.');
      window.location.href = 'http://localhost:8080/app.html';
    },
  },
};
</script>

<style>
input[type='button'] {
  height: 29px;
  min-width: 100px;
  outline: none;
  background: #feA230;
}

input[type='button']:active {
  outline: none;
  box-shadow: 1px 1px 1px rgba(230, 160, 90, .6);
}

body {
  margin: 0;
}

#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
