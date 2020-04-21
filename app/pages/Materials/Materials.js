import React from 'react';
import { Container, Row, Col } from './../../components';

import {
    MaterialsTable
} from './components';
import { HeaderMain } from "./../../routes/components/HeaderMain";

export const Materials = () => (
    <Container>
        <HeaderMain 
            title="Materials"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col>
                <MaterialsTable />
            </Col>
        </Row>
    </Container>
);
