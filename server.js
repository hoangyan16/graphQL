//Import các thư viện cần dùng
var express = require('express');
const path= require('path');
var { ApolloServer } = require('apollo-server-express');
var morgan= require('morgan');
const {loadFilesSync}= require('@graphql-tools/load-files')
const {makeExecutableSchema}= require('@graphql-tools/schema');
const typesArray= loadFilesSync(path.join(__dirname,'**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));
async function startApolloServer(){
  //Tạo server với express
  var app = express();
  app.use(morgan("combined"));
  const schema= makeExecutableSchema({
      typeDefs:typesArray,
      resolvers:resolversArray
  });
  const server= new ApolloServer({
    schema
  });
  await server.start();
  server.applyMiddleware({app,path:'/graphql'})
  // Khởi tạo server tại port 4000
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
}

startApolloServer();

