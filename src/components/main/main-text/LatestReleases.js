import React from 'react';
import { Row, Col } from 'reactstrap';
import './LatestReleases.css';

export const LatestReleases = () => {
    return (
        <div className = 'main-text'>
            <Row>
                <Col>
                    <p className = 'main-text-p'>Latest Releases</p>
                </Col>
            </Row>
        </div>
    )
}