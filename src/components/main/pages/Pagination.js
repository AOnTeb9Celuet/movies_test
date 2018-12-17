import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Pagination.css'

export const Pages = () => {
    return (
        <Pagination size = 'lg' aria-label="Page navigation" className = 'd-flex justify-content-center pagination-main'>
          <PaginationItem className = ''>
            <PaginationLink href="#" className = 'pagination-pages pagination-pages-edges'>
                First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                Prev
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                ...
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages'>
                Next
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className = 'pagination-pages pagination-pages-edges'>
                Last
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      )
}