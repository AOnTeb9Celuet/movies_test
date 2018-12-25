import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieDetails, clearMovieDetails } from "../../../actions/Actions";

import "./MovieModal.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowAltCircleLeft);
library.add(faArrowAltCircleRight);

class MovieModal extends Component {

  componentDidMount() {
    const pathname = this.props.location.pathname
    this.props.getMovieDetailsAction(pathname);
  }

  componentWillUnmount() {
    this.props.clearMovieDetailsAction()
  }
  render() {
    if (!this.props.details.data) {
      return <div>...Loading</div>;
    }

    const {
      poster_path,
      title,
      release_date,
      vote_average,
      adult,
      overview
    } = this.props.details.data;
    const posterPath = `http://image.tmdb.org/t/p/w342${poster_path}`;

    return (
      <div className="movie-modal">
        <div
          className="background-img"
          style={{ backgroundImage: `url(${posterPath})` }}
        />{" "}
        <Row noGutters>
          <Col className="d-flex justify-content-start">
            <Link to={"/"}>
              <p className="button-left">
                <FontAwesomeIcon
                  icon="arrow-alt-circle-left"
                  className="arrow-left"
                />
                Back to list
              </p>
            </Link>
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
              src={posterPath}
              alt="poster"
              className="img-fluid poster-modal"
            />
          </Col>

          <Col lg="7">
            <p className="d-flex justify-content-end favorite-but">
              <span>Add to favorite</span>
            </p>
            <p className="info-title">
              {title} ({release_date})
            </p>
            <p className="info-s-r-rd">
              <span className="info-s">Score: {vote_average}</span>
              <span className="info-r">Rating: {adult ? "R" : "PG"}</span>
              <span className="info-rd">Release Date: {release_date}</span>
            </p>
            <p className="info-about">{overview}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    info: store.info,
    details: store.details,
    isFetching: store.isFetching,
    error: store.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetailsAction: (pathname) => dispatch(getMovieDetails(pathname)),
    clearMovieDetailsAction: () => dispatch(clearMovieDetails())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(MovieModal);
