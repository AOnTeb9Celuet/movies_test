import { observable } from 'mobx';
import axios from 'axios';

class MobxStore {
    @observable info = [];
    @observable details = {};
    @observable isFetching = false;
    @observable error = '';
    @observable page = 1;

    getMoviesInfo(page) {
            axios
                .get(
                    `http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`
                    )
                .then(response => this.info = response)
                .catch(err => this.error = err)
        }

    getMovieDetails(pathname) {
            axios
                .get(
                    `http://api.themoviedb.org/3/movie${pathname}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`
                )
                .then(response => this.details = response)
                .catch(err => this.error = err)
    }

    clearMovieDetails() {
        this.details = {};
    }

    changePageNumber(page) {
        this.page = page
    }
}

const mobxStore = new MobxStore()

export default mobxStore