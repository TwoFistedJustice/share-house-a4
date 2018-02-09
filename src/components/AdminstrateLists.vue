<template>

<div>
    <div class="row">
        <h1>AdministrateLists.vue alpha 4 Vuex Basic</h1>
       <h3>Features and Breakdown of this component</h3>
        <p>Edit list here, it shows up on other two components</p>
        
    </div>
      <div class="row">
           <div class="form-group">
          <label for="supplyAdd"></label>
          <input type="text"
                 id="supplyAdd"
                 class="form-control"
                 v-on:keyup.enter="addToSuppliesList"
                 v-model='supplyToAdd'>
        <button class="btn btn-primary"
                @click="addToSuppliesList"
                >Add Supply Item</button>
        <h3>Global this.$store.state.supplyObject.supplies Supplies List</h3>
      <ul>
            <li class="list-group-item" 
                v-for="(supply, index) in getSupplies" >{{supply.item}}
                <button class="btn btn-danger" @click="suppliesDeleteItem(index)">Delete</button>
                </li>
      </ul>

      </div>   
      </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    
    data: function(){
        return {
            supplyToAdd: ''
        };
    },
    computed: {
        ...mapGetters([
            'getSupplies'
        ]),
    }, //END COMPUTED

    methods: {
        ...mapActions([
            'suppliesAddSupply',
            'suppliesDeleteItem'
        ]),

        addToSuppliesList(){
            // console.log("ljlk");
            let supply = {item: this.supplyToAdd, have: false};
            // this.suppliesAddSupply(this.supplyToAdd);
            this.suppliesAddSupply(supply);
        }
        
    } // END METHODS
    


}
</script>

<style scoped>

</style>
