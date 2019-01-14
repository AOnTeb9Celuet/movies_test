import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import "./Posters.css";

@inject("posterStore")
@observer
class Poster extends Component {
  componentDidMount() {
    this.props.posterStore.getMoviesInfo(this.props.posterStore.page);
  }

  onPageClick = e => {
    this.props.posterStore.changePageNumber(e);
    this.props.posterStore.getMoviesInfo(e);
  };

  render() {
    const { page } = this.props.posterStore;
    const { data } = this.props.posterStore.info;

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
            activePage={data && page}
            itemsCountPerPage={1}
            totalItemsCount={data && data.total_pages}
            pageRangeDisplayed={3}
            onChange={this.onPageClick}
            firstPageText="First"
            lastPageText="Last"
            prevPageText="Prev"
            nextPageText="Next"
            innerClass="pagination"
            linkClass="pagination-pages"
            linkClassFirst="pagination-link-first"
            linkClassLast="pagination-link-last"
            activeLinkClass="pagination-link-active"
          />
        </Container>
      </Container>
    );
  }
}

export default Poster;
