import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./FavouriteList.css";

class FavouriteList extends Component {
  state = {
    updateLocalStorage: true
  };

  updateLocalStorage = () => {
    this.setState({ updateLocalStorage: !this.state.updateLocalStorage });
  };

  removeFromLocalStorage = function(e) {
    let favArr = JSON.parse(localStorage.getItem("main-arr"));
    favArr = favArr.filter(el => el.id !== e);
    localStorage.setItem("main-arr", JSON.stringify(favArr));
    this.updateLocalStorage();
  };

  render() {
    const favArr = JSON.parse(localStorage.getItem("main-arr"));

    if (!favArr[0]) {
      return <div className="empty-favArr">No favorite movies</div>;
    }

    return (
      <Container fluid className="fav-main-page">
        <Row noGutters>
          <Col>
            <p className="fav-text-p"> My Favorite </p>
          </Col>
        </Row>
        {favArr.map(f => {
          return (
            <Row noGutters key={f.id} className="fav-arr-row">
              <Col md="3" xs="6" key={f.id}>
                <img
                  src={`http://image.tmdb.org/t/p/w342${f.poster_path}`}
                  alt="poster"
                  className="img-fluid fav-poster"
                />
              </Col>
              <Col md="9" xs="6">
                <div className="fav-title-but">
                  <p className="fav-title"> {f.title} </p>
                  <p
                    onClick={() => this.removeFromLocalStorage(f.id)}
                    className="fav-unfavourite"
                  >
                    {" "}
                    Unfavorite{" "}
                  </p>
                </div>
                <p className="d-inline-block fav-overview"> {f.overview} </p>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default FavouriteList;
