import { observable, action, autorun } from "mobx";
import axios from "axios";

class ModalStore {
  @observable details = {};
  @observable error = "";

  @action getMovieDetails(pathname) {
    axios
      .get(
        `http://api.themoviedb.org/3/movie${pathname}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`
      )
      .then(response => {
        this.isFetching = false;
        this.details = response;
      })
      .catch(err => (this.error = err));
  }

  @action clearMovieDetails() {
    this.details = {};
  }
}

const modalStore = new ModalStore();

autorun(() => {
  console.log("modalStore", modalStore.details);
});

export default modalStore;
