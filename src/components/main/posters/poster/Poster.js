import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../Posters.css'

const Poster = props => {
  const { data } = props
  console.log()
  return (
    <>
      {data &&
        data.results.map(p => {
          return (
            <Col key={p.id} className="col-6 col-md-3 col-xl-2 poster-col">
              <Link to={`/${p.id}`}>
                <div className = 'poster-wrapper'>
                    <img
                    src={`http://image.tmdb.org/t/p/w342${p.poster_path}`}
                    alt="poster"
                    className="poster img-fluid"
                    />
                </div>
              </Link>
            </Col>
          )
        })}
    </>
  )
}

export default Poster