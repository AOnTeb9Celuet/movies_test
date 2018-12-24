import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMoviesInfo } from "../../../actions/Actions";

import "./Poster.css";

class Poster extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getMoviesInfoAction();
  }

  render() {
    const { data } = this.props.info
    return (
      <div className="d-flex justify-content-between">
        <Container fluid>
          <Row className="justify-content-center poster-row">
            {data && data.results.map(p => {
              return (
                <Col key={p.id} className="col-6 col-md-3 col-xl-2 poster-col">
                  <Link to={`/${p.id}`}>
                    <img
                      src={`http://image.tmdb.org/t/p/w342${p.poster_path}`}
                      alt="poster"
                      className="poster img-fluid"
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}


const mapStoreToProps = store => {
  return {
    info: store.info,
    isFetching: store.isFetching,
    error: store.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoviesInfoAction: () => dispatch(getMoviesInfo())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Poster);
