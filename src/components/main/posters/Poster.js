import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import axios from "axios";

import "./Poster.css";

class Poster extends Component {
  state = {
    posterUrls: [],
    key: ""
  };

  componentDidMount() {
    axios
      .get(
        "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c"
      )
      .then(response => {
        const posterPath = response.data.results.map(p => {
          return {
            poster_path: p.poster_path,
            key: p.id
          };
        });

        const posterUrls = posterPath.map(p => {
          return {
            poster_path: `http://image.tmdb.org/t/p/w300${p.poster_path}`,
            key: p.key
          };
        });
        console.log("posterUrls", posterUrls);

        const newState = Object.assign({}, this.state, {
          posterUrls: posterUrls
        });

        this.setState(newState);
      });
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <Container fluid>
          <Row className = 'justify-content-center poster-row'>
            {this.state.posterUrls.map(p => {
              return (
                <Col className=" col-6 col-md-3 col-xl-2 poster-col">
                  <img
                    key={p.key}
                    src={p.poster_path}
                    alt={"poster"}
                    className="poster img-fluid"
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Poster;
