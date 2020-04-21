import React from 'react';
import { Container, Row, Col } from './../../components';

import {
    ProductsTable
} from './components';
import { HeaderMain } from "./../../routes/components/HeaderMain";

export const Products = () => (
    <Container>
        <HeaderMain 
            title="Products"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col>
                <ProductsTable />
            </Col>
        </Row>
    </Container>
);
