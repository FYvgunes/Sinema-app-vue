import services from "../services/service";
import Vue from "vue";
import axios from "axios";
const  state = {
  movies : [],
  movieDetail :{},

};
const  getters = {
  Films(state){
    return state.movies;
  }

};

const mutations = {
  setMovies(state,movies){
    state.movies = movies;
  },
  setMovieDetail(state, payload){
    const {id ,data} = payload;
    const movieid = id.id;
    state.movieDetail= data;
  }


};

const  actions = {

  fetchMovies({commit}) {
  return axios.get("https://sinema-app-dcf45-default-rtdb.firebaseio.com/movies.json")
      .then(response =>{
      commit("setMovies",response.data);
      })

  },
  fetchMovieDetails({commit} , id){
    return axios.get("https://sinema-app-dcf45-default-rtdb.firebaseio.com/moviedetails.json")
      .then(response =>{

        commit("setMovieDetail",{
          id:response.data[id],
          data:response.data
          }
        );

      })
  }

};

export  default {
  state,
  getters,
  mutations,
  actions
}
