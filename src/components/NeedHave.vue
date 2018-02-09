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
            show: true,
            //true means we have it, false means we need it
            haveSwitch: null,
            
            //will get shared or sourced out to other components
            sharedSupplies:[
                        // {item: 'Paper Towels', have: false},
                        // {item: 'Toilet Paper', have: false},
                        // {item: 'Dish Soap', have: false}
                    ]
        };
        
    },
    methods: {
        itemNeedText(have){
                if(have){
                    return 'have';
                }else{
                    return 'need';
                }
           },
         checkArrayBools(){
               //This fn sets the haveSwitch property to govern the switch-all button text
               //check boolean contents of sharedSupplies[], if all are same 
               //change the button value
               let holdingBool = false;

                //convert the have bools to zero or one and add them up
                //if the sum is equal to zero or to the length of the array
                //set the holding bool to false if zero, and true if length
               let sum = 0;
               for(let i = 0; i < this.sharedSupplies.length; i++){
                   let val = this.sharedSupplies[i].have ? 1 : 0;
                   sum += val;
               }
                if(sum === 0){
                    holdingBool = false;
                }else if (sum === this.sharedSupplies.length){
                    holdingBool = true;
                } else{
                    holdingBool = this.haveSwitch;
                }
                    return holdingBool;
                       }, //end checkArrayBools
                       
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
       computed: {
           
          
           haveNeedText(){
               //changes the switch button text to match functionality
            this.haveSwitch = this.checkArrayBools();

            if(this.haveSwitch == true){
                return 'Need';
            } else {
                return 'Have';
            }
           }

       }, //end Computed



}
</script>

<style scoped>

</style>
