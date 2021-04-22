export default {
  fetchMovies(){
    return firebase.databese().ref("/movies").once('value');
  }
}
