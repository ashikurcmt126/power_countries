<template>
  <div>
      <div v-for="(customer,id) in customers" :key="id">
    <h4>Customer</h4>
    <div>
      <label>Name: </label> {{customer.name}}
    </div>
    <div>
      <label>Age: </label> {{customer.age}}
    </div>
    <div>
      <label>Active: </label> {{customer.active}}
    </div>
  </div>
  </div>
  
</template>
 
<script>

 
export default {
  data () {
    return {
      customers: null
    }
  },
  mounted(){
    this.$store.dispatch('getUsers')
        .then(response => {
          console.log(response);
          this.customers = this.$store.getters.returnAllUsers;
    })
  }
};
</script>