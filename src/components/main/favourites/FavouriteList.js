import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./FavouriteList.css";

class FavouriteList extends Component {

  state = {
    updateLocalStorage: true,
  }

  render() {
    const favArr = JSON.parse(localStorage.getItem("main-arr"));
    console.log('favArr', favArr);

    const updateLocalStorage = () => {
      this.setState({updateLocalStorage: !this.state.updateLocalStorage})
    }

    const removeFromLocalStorage = function(e) {
      console.log(e)
      favArr.forEach((el, index) => {
        if(+el.id === +e) {
          favArr.splice(index, 1)
          console.log(favArr)
        }
      })
      localStorage.setItem('main-arr', JSON.stringify(favArr))
      console.log(localStorage)
      updateLocalStorage()
    }


    return (
      <Container fluid className="fav-main-page">
        <Row noGutters>
          <Col>
            <p className="fav-text-p"> My Favourite </p>
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
                <div className="d-flex justify-content-between align-items-start">
                  <p className="fav-title"> {f.title} </p>
                  <p onClick = {() => removeFromLocalStorage(f.id)} className="fav-unfavourite">
                    {" "}
                    Unfavourite{" "}
                  </p>
                </div>
                <p className="fav-overview"> {f.overview} </p>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default FavouriteList;
