<template>

<div>
    <div class="row">
        <h1>ShoppingList.vue alpha 4 Vuex Basic</h1>
       <p>No user input here - it just displays the list</p>
        
    </div>
     <div class="row">
         <h1>Shopping List</h1>
         <p>Only shows items where supply.have == false</p>
         <ol>
            <li  
                v-for="supply in getSupplies"
                v-if="!supply.have">{{supply.item}}</li>
         </ol>
         <!-- <p v-for="supply in getSupplies"  v-if="!supply.have">{{supply.item}}</p> -->
      
      </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function(){
        return {};
    },
    computed: {
        ...mapGetters([
            'getSupplies'
        ])
    }//end computed


}
</script>

<style scoped>

</style>
