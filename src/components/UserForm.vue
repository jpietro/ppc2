<template>
<div>
  <h1>User Form</h1>
  <div>
    <label>Email:</label>
    <input v-model="email" class="user_input_email" type="email" name="userEmail">
  </div>
  <h1 v-show="isEmailFilled" class="user_h1_email" >O email deve ser no formato email@gmail.com</h1>
  <h1 v-show="isEmailEquals" class="user_h1_email_2" >O email deve ser o mesmo do login</h1>
  <div>
    <label>Idade:</label>
    <input v-model="age" class="user_input_idade" type="text" name="userAge">
  </div>
    <h1 v-show="isAgeOk" class="user_h1_idade" >A idade tem que estar entre 18 e 99</h1>
  <label for="system">SO</label>
    <select v-model="system">
      <option value=""></option>
      <option value="Windows">Windows</option>
      <option value="Linux">Linux</option>
    </select>
    <br />
    <h1 v-show="isSoChosen" class="user_h1_so" >Deve escolher um SO</h1>
    <h1 v-show="isFilled" class="user_h1_filled" >Parabéns</h1>
  

</div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    age: '',
    system: '',
    numberUser: '',
  }),
  mounted() {
      this.numberUser = localStorage.getItem("token");
  },
  computed: {
    /*fullname() {
      return `${this.email} ${this.password}`;
    },*/
    /*isFormCompleted() {
      const {
        isValidString, hasOnlyLetter, name, lastName,
      } = this;
      return isValidString(name)
      && isValidString(lastName)
      && hasOnlyLetter(name)
      && hasOnlyLetter(lastName);
    },*/
    isEmailFilled(){
        const { isEmailValid, email, isValidString} = this;
        return isEmailValid(email) && isValidString(email);
    },
    isEmailEquals(){
        const { isEmailLog, email, isValidString} = this;
        return (isEmailLog(email) && isValidString(email));
    },
    /*isPasswordFilled(){
        const {isPasswordValid, password} = this;
        return isPasswordValid(password);
    },
    isLoginCompleted(){
        const { isEmailValid, isPasswordValid, email, password} = this;
        return isEmailValid(email) && isPasswordValid(password);
    }*/
    isAgeOk(){
        //const regex = /^[1-9][0-9]$|^(99)$/
        //return !!(regex.test(this.age) && this.age.length > 0 && this.age > 17);
        const {age, hasOnlyNumber} = this;
        return !!(age.length > 0 && age < 17 && age > 99);
    },
    isSoChosen(){

    },
    isFilled(){

    }
  },
  methods: {
    isValidString(string) {
      return string.length > 1;
    },
    hasOnlyNumber(string) {
      const regex = /^[0-9]+$/;
      return regex.test(string);
    },

    isEmailValid(string){
        const regex = /\S+@\S+\.\S+/;
        return !(regex.test(string));
    },

    isEmailLog(string){
        console.log(this.numberUser);
        var emailLog = "email_" + this.numberUser + "@gmail.com"
        if(string == emailLog) {
            return false;
        } else{
            return true
        }    
    },

    doLogin(){
        const { hasAccess, email, password} = this;
        if(hasAccess(email, password)){
            console.log("Deu certo");
        }else{
            console.log("Deu errado");
        }
        
    },
    hasAccess(emailValid, passwordValid){
        //const regex = /^[1-9]$|^[1-9][0-9]$|^(100)$/
        //return regex.test(email);

        for(var i=1; i < 101; i++){
            var end = "email_";
            var dom = "@gmail.com";
            var passTeste = "password" + i;
            var emailTeste = end + i + dom;
            if(emailValid == emailTeste && passwordValid == passTeste){
                return true;
            }
        }
        return false
    }
  },
};
</script>

<style>
</style>