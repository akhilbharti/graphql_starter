const express = require("express");

const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

// graphiql allows to write query in development mode only so to be used in development mode!!
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.listen(8000, () => {
  console.log("server is running at port 8000");
});
