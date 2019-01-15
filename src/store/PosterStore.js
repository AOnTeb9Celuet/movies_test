import { observable, action, autorun } from "mobx";
import axios from "axios";

class PosterStore {
  @observable info = [];
  @observable error = "error";
  @observable page = 1;

  @action getMoviesInfo = (page) => {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`
      )
      .then(response => (this.info = response))
      .catch(err => (this.error = err));
  }

  @action changePageNumber = (page) => {
    this.page = page;
  }
}

const posterStore = (window.mobxStore = new PosterStore());

autorun(() => {
    console.log('posterStore', posterStore.page)
})

export default posterStore;
