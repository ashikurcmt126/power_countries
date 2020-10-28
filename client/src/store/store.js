import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


 const store = new Vuex.Store({

    state: {
        allUser:[],
        population:[]
    },
    mutations : {
        GET_ALL_USERS(state,users)
        {
            state.allUser = users;
        },
        GET_ALL_POPULATION(state,population){
            state.population=population
        }
    },
    getters: {

        returnAllUsers(state)
        {
            return state.allUser;
        },
        returnAllPopulation(state){
            return state.population;
        }
    },
    actions : {

        getUsers({commit})
        {
           return new Promise((resolve, reject) => {

            axios.get('http://localhost:8081/api/customer')
                .then(response => {
                    commit('GET_ALL_USERS',response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        getPopulation({commit}){
            return new Promise((resolve, reject) => {

                axios.get('http://localhost:8081/api/populations')
                    .then(response => {
                        commit('GET_ALL_POPULATION',response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
                })
        }
    }
    
})

export default store;
