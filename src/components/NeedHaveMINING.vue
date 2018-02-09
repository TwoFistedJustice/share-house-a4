<template>

<div>

      <div class="row">
          <h2>Shared Supplies</h2>
          <span><button class="btn btn-primary" 
                        @click="swtichAllHaveStatus()">Switch all to {{haveNeedText}}</button></span>
          <ul>
              <li v-for="supply in sharedSupplies">
                  <span class="btn"
                        @click="changeItemHaveStatus(supply)"
                        v-bind:class="{'btn-success': supply.have, 'btn-danger': !supply.have}"
                        >{{supply.item}} : We {{itemNeedText(supply.have)}} this.
                        </span>
                  </li>
          </ul>
      </div>

      
</div>
</template>

<script>


export default {

    data: function(){
        return {
            
            //will get shared or sourced out to other components
            sharedSupplies:[
                        // {item: 'Paper Towels', have: false},
                        // {item: 'Toilet Paper', have: false},
                        // {item: 'Dish Soap', have: false}
                    ]
        };
        
    },
    methods: {
                       
        //when user clicks on the button, switch the bool and add or remove from
        //the shopping list component
        changeItemHaveStatus(sharedSupplyObj){
            sharedSupplyObj.have = !sharedSupplyObj.have;
            },

            swtichAllHaveStatus(){
                //click the switch button to flip all the supply have-bools
                //first switch the main bool
                this.haveSwitch = !this.haveSwitch;
                //then switch the item bools
               for(let i = 0; i < this.sharedSupplies.length; i++){
                       this.sharedSupplies[i].have = this.haveSwitch;
                   }
                
           }//end
       },


}
</script>

