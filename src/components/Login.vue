<template>
<div>
  <h1>Login</h1>
  <div>
    <label>Email:</label>
    <input v-model="email" class="login_input_email" type="email" name="loginEmail">
  </div>
  <h1 v-show="isEmailFilled" class="login_h1_email" >
    O email deve ser no formato email@gmail.com
  </h1>
  <div>
    <label>Password:</label>
    <input v-model="password" class="login_input_password" type="text" name="loginPassword">
  </div>
    <h1 v-show="isPasswordFilled" class="login_h1_password" >
      A senha deve ter mais que 6 caracteres</h1>
  <button @click="doLogin" class="login_button_login" >Login</button>
  <h1 id="erroLogin" style="visibility:hidden">O usuário não possui acesso</h1>

</div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {

    isEmailFilled() {
      const { isEmailValid, email, isValidString } = this;
      return isEmailValid(email) && isValidString(email);
    },
    isPasswordFilled() {
      const { isPasswordValid, password } = this;
      return isPasswordValid(password);
    },
    isLoginCompleted() {
      const {
        isEmailValid, isPasswordValid, email, password,
      } = this;
      return !(isEmailValid(email) && isPasswordValid(password));
    },
  },
  methods: {
    isValidString(string) {
      return string.length > 1;
    },

    isEmailValid(string) {
      const regex = /\S+@\S+\.\S+/;
      return !(regex.test(string));
    },
    isPasswordValid(string) {
      return string.length < 6 && string.length > 0;
    },
    doLogin() {
      const { hasAccess, email, password } = this;
      if (hasAccess(email, password)) {
        this.$router.push({ name: 'UserForm' });
      } else {
        document.getElementById('erroLogin').style.visibility = 'visible';
      }
    },
    hasAccess(emailValid, passwordValid) {
      for (let i = 1; i < 101; i += 1) {
        const end = 'email_';
        const dom = '@gmail.com';
        const passTeste = `password${i}`;
        const emailTeste = end + i + dom;
        if (emailValid === emailTeste && passwordValid === passTeste) {
          localStorage.token = i;
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style>
</style>
