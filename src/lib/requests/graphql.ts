import { GraphQLClient } from "graphql-request";

const graphql = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.CAISY_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.CAISY_API_KEY,
    },
  }
);

export default graphql;
