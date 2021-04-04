import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Layout } from 'antd';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import 'antd/dist/antd.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Space } from '../components/Space/Space';
import withApollo from '../configureClient';

import { TopBar } from '../components/Header/TopBar/TopBar.comp';

const { Content, Footer } = Layout;

Router.events.on('routeChangeStart', (url) => {
  NProgress.configure({
    minimum: 0.45,
    trickleSpeed: 100,
  });
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

export const GlobalStyle = createGlobalStyle`
  .ant-layout, body, html {
    
  }
  
  #__next, .ant-layout, .main-container{
    height: 100%;
  }
  
  #nprogress{
    .bar{
      height: 4px;
      box-shadow: 0 0 10px #1890ff, 0 0 5px #1890ff;
      background: #1890ff;
    }
    .peg{
      box-shadow: 0 0 10px #1890ff, 0 0 5px #1890ff;
    }
  }
`;

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <Layout className="layout">
            <TopBar />
            <Space size="5" />
            <Content>
              <Head>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
                <script noModule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js" />
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
              </Head>
              <div className="main-container">
                <Component {...pageProps} />
              </div>
            </Content>
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
