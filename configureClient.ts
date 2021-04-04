import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';

import { SERVER, WEB_SOCKET_LINK } from './config';

interface IDefinintion {
  kind: string;
  operation?: string;
}

const authMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation);
});

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri: WEB_SOCKET_LINK,
      options: {
        reconnect: true,
      },
    })
  : null;

export default withApollo(({ initialState, headers }) => {
  const httpLink = new HttpLink({
    credentials: 'include',
    fetch,
    uri: SERVER,
    headers: {
      cookie: headers?.cookie,
    },
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const link = process.browser
    ? split(
        ({ query }) => {
          const { kind, operation }: IDefinintion = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        webSocketLink,
        httpLink,
      )
    : httpLink;

  return new ApolloClient({
    ssrMode: true,
    link: concat(authMiddleware, link),
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
