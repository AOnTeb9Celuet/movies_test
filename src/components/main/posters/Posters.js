import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMoviesInfo, changePageNumber } from "../../../actions/Actions";
import "./Posters.css";

class Poster extends Component {
  componentDidMount() {
    this.props.getMoviesInfoAction(this.props.page);
  }

  onPageClick = e => {
    const { getMoviesInfoAction, changePageNumberAction } = this.props;

    changePageNumberAction(e);
    getMoviesInfoAction(e);
  };

  render() {
    const { data } = this.props.info;

    return (
      <Container fluid className="main-page">
        <Row noGutters>
          <Col>
            <p className="main-text-p">Latest Releases</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <Container fluid>
            <Row className="justify-content-center poster-row">
              {data &&
                data.results.map(p => {
                  return (
                    <Col
                      key={p.id}
                      className="col-6 col-md-3 col-xl-2 poster-col"
                    >
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
          <Container fluid>
            <Pagination
              activePage={data && this.props.page}
              itemsCountPerPage={1}
              totalItemsCount={data && data.total_pages}
              pageRangeDisplayed={3}
              onChange={this.onPageClick}
              firstPageText = 'First'
              lastPageText = 'Last'
              prevPageText = 'Prev'
              nextPageText = 'Next'
              innerClass = 'pagination'
              linkClass = 'pagination-pages'
              linkClassFirst = 'pagination-link-first'
              linkClassLast = 'pagination-link-last'
              activeLinkClass = 'pagination-link-active'
            />
          </Container>
      </Container>
    );
  }
}

const mapStoreToProps = store => {
  return {
    info: store.info,
    isFetching: store.isFetching,
    error: store.error,
    page: store.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoviesInfoAction: page => dispatch(getMoviesInfo(page)),
    changePageNumberAction: page => dispatch(changePageNumber(page))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Poster);
