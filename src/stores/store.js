import services from "../services/service";

const  state = {
  movies : []
}
const  getters = {

};

const mutations = {

};

const  actions = {

  fetchMovies() {
    services.fetchMovies().then((response) =>{
      console.log(response)
    })
  }

};

export  default {
  state,
  getters,
  mutations,
  actions
}
