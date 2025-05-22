import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export function getServerApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'https://5tnlmtte6nbbxlur5n3jw5uel4.appsync-api.eu-central-1.amazonaws.com/graphql',
      headers: {
        'x-api-key': 'da2-gsp7hmiupzf2pffuvhg6rnafky',
        'x-storefront-id': "16"
      },
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
