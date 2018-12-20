import React, { Component } from "react";
import { Row, Col, div } from "reactstrap";
import axios from "axios";

import "./MovieModal.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowAltCircleLeft);
library.add(faArrowAltCircleRight);

class MovieModal extends Component {
  state = {
    aboutObj: []
  };

  componentDidMount() {
    axios
      .get(
        "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c"
      )
      .then(response => {
        const aboutObj = response.data.results.map(a => {
          return {
            original_title: a.original_title,
            overview: a.overview,
            adult: a.adult,
            poster_path: a.poster_path,
            key: a.id,
            release_date: a.release_date
          };
        });

        const newState = Object.assign({}, this.state, { aboutObj: aboutObj });

        this.setState(newState);

        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="movie-modal">
        <div
          className="background-img"
          style={{
            backgroundImage: `url(${"http://image.tmdb.org/t/p/w342/qIqXrTKCKkfrmTakvTsjlya7OWw.jpg"})`
          }}
        />{" "}
        <Row noGutters>
          <Col className="d-flex justify-content-start">
            <p className="button-left">
              <FontAwesomeIcon
                icon="arrow-alt-circle-left"
                className="arrow-left"
              />{" "}
              Back to list
            </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <p className="button-right">
              Next Movie{" "}
              <FontAwesomeIcon
                icon="arrow-alt-circle-right"
                className="arrow-right"
              />
            </p>
          </Col>
        </Row>
        <Row noGutters>
          <Col lg="4" className="d-flex justify-content-center info-col">
            <img
              src={`http://image.tmdb.org/t/p/w342/qIqXrTKCKkfrmTakvTsjlya7OWw.jpg`}
              alt="poster"
              className="img-fluid poster-modal"
            />
          </Col>

          <Col lg="7">
            <p className="d-flex justify-content-end favorite-but">
              <span>Add to favorite</span>
            </p>
            <p className="info-title">Ant-Man (2015)</p>
            <p className="info-s-r-rd">
              <span className="info-s">Score: 8.2</span>
              <span className="info-r">Rating: R</span>
              <span className="info-rd">Release Date: July 17, 2015</span>
            </p>
            <p className="info-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieModal;
