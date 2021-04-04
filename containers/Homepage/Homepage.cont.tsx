import { Col, Row } from 'antd';
import { NextPage } from 'next';
import React from 'react';

import { Offer } from '../../components/Offer/Offer';
import { useCurrentUserQuery } from '../../generated/graphql';

import { LoginForm } from '../../forms/Login/Login.form';

export const HomepageContainer: NextPage = () => {
  const { data } = useCurrentUserQuery();
  return (
    <div>
      {JSON.stringify(data)}
      {/*<TextEditor />*/}
      <Row justify="center">
        <Col span={6}>
          <LoginForm />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Offer />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Offer />
        </Col>
      </Row>
    </div>
  );
};
