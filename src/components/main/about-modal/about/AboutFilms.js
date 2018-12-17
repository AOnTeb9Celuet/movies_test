import React, { Component } from 'react';
import axios from 'axios';

class AboutFilms extends Component {

    state = {
        aboutObj: [],
    }

    componentDidMount() {
        axios
          .get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')  
          .then(response => {

            const aboutObj = response.data.results.map(a => {
                return {
                    original_title: a.original_title,
                    overview: a.overview,
                    adult: a.adult,
                    poster_path: a.poster_path,
                    key: a.id,
                    release_date: a.release_date
                }
            })

            const newState = Object.assign({}, this.state, {aboutObj: aboutObj})

            this.setState(newState)

            console.log(this.state)
          })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AboutFilms;