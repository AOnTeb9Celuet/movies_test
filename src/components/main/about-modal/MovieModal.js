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
    const pathname = this.props.location.pathname;
    this.props.getMovieDetailsAction(pathname);
    
  }

  componentWillUnmount() {
    this.props.clearMovieDetailsAction();
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
    const releaseDate = release_date && release_date.slice(0, 4);

    const addToLocalStorage = () => {
      const { data } = this.props.details;
      if(!JSON.parse(localStorage.getItem('main-arr2'))) {
        const oldArr = JSON.parse(localStorage.getItem('main-arr'))
        const newArr = oldArr.concat(data)
        localStorage.setItem('main-arr2', JSON.stringify(newArr))
      } else {
          let oldArr = JSON.parse(localStorage.getItem('main-arr2'));
          console.log('oldArr before', oldArr)
          const boolCheck = oldArr.map(obj => 
            obj.id !== data.id ? true : false
          )
          console.log('boolCheck', boolCheck)
          if(!boolCheck.includes(false)) {
            oldArr = oldArr.concat(data)
            localStorage.setItem('main-arr2', JSON.stringify(oldArr))
          } return oldArr
          
    }
  }

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
                <span>Back to list</span>
              </p>
            </Link>
          </Col>

          <Col className="d-flex justify-content-end">
            <p className="button-right">
              <span>Next Movie </span>
              <FontAwesomeIcon
                icon="arrow-alt-circle-right"
                className="arrow-right"
              />
            </p>
          </Col>
        </Row>
        <Row noGutters>
          <Col lg="4" xs="6" className="d-flex justify-content-center info-col">
            <img
              src={posterPath}
              alt="poster"
              className="img-fluid poster-modal"
            />
          </Col>

          <Col lg="8" xs="6">
            <p
              onClick={addToLocalStorage}
              className="d-flex justify-content-end favorite-but"
            >
              <span>Add to favorite</span>
            </p>
            <p className="info-title">
              {title} ({releaseDate})
            </p>
            <p className="info-s-r-rd justify-content-start">
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
    getMovieDetailsAction: pathname => dispatch(getMovieDetails(pathname)),
    clearMovieDetailsAction: () => dispatch(clearMovieDetails())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(MovieModal);
