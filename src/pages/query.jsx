import React from 'react';
import gql from 'graphql-tag';
import {useApolloClient} from '@shopify/react-graphql';

const productQuery = gql`
  query ProductQuery {
    products(first:5) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

async function QueryPage() {
  const client = useApolloClient();

  async function fetchProducts() {
    try {
      await client.query({
        productQuery,
      });
    } catch (error) {
      throw error;
    }
  }

  return <button onClick={fetchProducts}>Fetch Products</button>;
}

export default QueryPage