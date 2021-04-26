export default {
  fetchMovies(cb){
    firebase.database().ref
    return firebase.databese().ref('/movies').once('value');
  }
}
