import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getMoviesInfo,
  changePageNumber,
  changePaginationNumber
} from "../../../actions/Actions";

import "./Posters.css";

class Poster extends Component {
  componentDidMount() {
    this.props.getMoviesInfoAction(this.props.page);
  }

  onPageClick = e => {
    const {
      page,
      pagination_number,
      getMoviesInfoAction,
      changePageNumberAction,
      changePaginationNumberAction
    } = this.props;

    if (e.currentTarget.innerText === "First") {
      changePageNumberAction(1);
      changePaginationNumberAction(0);
      getMoviesInfoAction(1);
    } else if (e.currentTarget.innerText === "Prev" && page !== 1) {
      changePaginationNumberAction(this.props.pagination_number - 1);
    } else if (
      e.currentTarget.innerText === "Next" &&
      pagination_number !== Math.floor(this.props.info.data.total_pages / 3)
    ) {
      changePaginationNumberAction(pagination_number + 1);
    } else if (
      e.currentTarget.innerText === "Last" &&
      this.props.info.data.total_pages % 3
    ) {
      changePageNumberAction(this.props.info.data.total_pages);
      getMoviesInfoAction(this.props.info.data.total_pages);
      changePaginationNumberAction(
        Math.floor(this.props.info.data.total_pages / 3)
      );
    } else if (
      e.currentTarget.innerText === "Last" &&
      !this.props.info.data.total_pages % 3
    ) {
      changePageNumberAction(this.props.info.data.total_pages);
      getMoviesInfoAction(this.props.info.data.total_pages);
      changePaginationNumberAction(
        Math.floor(this.props.info.data.total_pages / 3 - 1)
      );
    } else {
      const pageNum = +e.currentTarget.innerText;
      changePageNumberAction(pageNum);
      getMoviesInfoAction(pageNum);
    }
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
        <Pagination
          aria-label="Page navigation"
          className="d-flex justify-content-center pagination-main"
        >
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages pagination-pages-edges"
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${
              data && this.props.pagination_number === 0
                ? "page-display-none"
                : false
            }`}
          >
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              Prev
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.pagination_number * 3 + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${
              data && this.props.pagination_number * 3 + 2 > data.total_pages
                ? "page-display-none"
                : false
            }`}
          >
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.pagination_number * 3 + 2}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${
              data && this.props.pagination_number * 3 + 3 > data.total_pages
                ? "page-display-none"
                : false
            }`}
          >
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.pagination_number * 3 + 3}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem
            className={`${
              data &&
              this.props.pagination_number >=
                Math.floor(this.props.info.data.total_pages / 3)
                ? "page-display-none"
                : false
            }`}
          >
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              Next
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages pagination-pages-edges"
            >
              Last
            </PaginationLink>
          </PaginationItem>
        </Pagination>
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
    pagination_number: store.pagination_number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoviesInfoAction: page => dispatch(getMoviesInfo(page)),
    changePageNumberAction: page => dispatch(changePageNumber(page)),
    changePaginationNumberAction: pagination =>
      dispatch(changePaginationNumber(pagination))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Poster);
