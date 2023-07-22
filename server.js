var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    name: String,
    age: Int,
    height: Float,
    isHuman: Boolean
  }
`)

// The resolver provides a resolver function for each API endpoint
var resolver = {
    name: () => {
      return "Hello Buddy my name!"
    },
    age: () => {
      return 20
    },
    height: () => {
        return 155.6
      },
    isHuman: () => {
        return 1 // we can pass (true and false) or (0 and 1)
      },
  }
  
var app = express()
app.use(
  "/graphql_localJs",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
)

//Adding listerner for app t run on local port
app.listen(4000) 
console.log("Running a GraphQL API server at http://localhost:4000/graphql_localJs")