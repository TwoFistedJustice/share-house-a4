import Vue from 'vue';
import Vuex from 'vuex';

//Lecture 257
import { mapGetters } from 'vuex';

Vue.use(Vuex);

// Note the uppercase 'S' in .Store
export const store = new Vuex.Store({
    //this name is NOT arbitrary. It MUST be called 'state'
    state: {

        

        supplies: [
            {item: 'Paper Towels', have: true},
            {item: 'Toilet Paper', have: false},
            {item: 'Dish Soap', have: false}
          ]
    },
    getters: {
        getSupplies: state =>{
            return state.supplies;
        }
    },

    mutations: {
        suppliesChangeItemHaveStatus: (state, payload) =>{
            payload.have = !payload.have;
        },
        suppliesSwtichAllHaveStatus: (state, payload) => {

        }

    }, //END MUTATIONS
    actions: {
        suppliesChangeItemHaveStatus: ({commit}, payload) => {
            commit('suppliesChangeItemHaveStatus', payload);
            
        }
    } // END ACTIONS
    
}); // END STORE