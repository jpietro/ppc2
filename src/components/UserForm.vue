<template>
<div>
  <h1>User Form</h1>
  <div>
    <label>Email:</label>
    <input v-model="email" class="user_input_email" type="email" name="userEmail">
  </div>
  <h4 v-show="isEmailFilled" class="user_h1_email" >O email deve ser no formato email@gmail.com</h4>
  <h4 v-show="isEmailEquals" class="user_h1_email_2" >O email deve ser o mesmo do login</h4>
  <div>
    <label>Idade:</label>
    <input v-model="age" class="user_input_idade" type="text" name="userAge">
  </div>
    <h4 v-show="isAgeOk" class="user_h1_idade" >A idade tem que estar entre 18 e 99, e deve ser apenas numérica</h4>
  <label for="system">SO</label>
    <select v-model="system" name="user_select_system">
      <option value="" disabled selected hidden>Choose your SO</option>
      <option value="Windows">Windows</option>
      <option value="Linux">Linux</option>
    </select>
    <br />
    <h4 v-show="isSoChosen" class="user_h1_so" >Deve escolher um SO</h4><br />
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
    
    isEmailFilled(){
        const { isEmailValid, email, isValidString} = this;
        return isEmailValid(email) && isValidString(email);
    },
    isEmailEquals(){
        const { isEmailLog, email, isValidString} = this;
        return (isEmailLog(email) && isValidString(email));
    },
    
    isAgeOk(){
        
        const {age, hasOnlyNumber} = this;
        return (age.length > 0 && ((age < 17 || age > 99) || hasOnlyNumber(age)));
    },
    isSoChosen(){
        const {system, isSoEmpty} = this;
        return !(isSoEmpty(system))
    },
    isFilled(){
        const {isAgeValid, isEmailLog, isSoEmpty, email, age, system} = this;
        return (!(isEmailLog(email)) && isAgeValid(age) && isSoEmpty(system));
    }
  },
  methods: {
    isValidString(string) {
      return string.length > 1;
    },
    hasOnlyNumber(string) {
      const regex = /^[0-9]+$/;
      return !(regex.test(string));
    },
    isAgeValid(number){
        return (number.length > 0 && ((number > 17 || number < 99)|| this.hasOnlyNumber(age)))
    },
    isEmailValid(string){
        const regex = /\S+@\S+\.\S+/;
        return !(regex.test(string));
    },
    isSoEmpty(string){
        return !!(string != '')
    },
    isEmailLog(string){
        var emailLog = "email_" + this.numberUser + "@gmail.com"
        if(string == emailLog) {
            return false;
        } else{
            return true
        }    
    },

  },
};
</script>

<style>
</style>