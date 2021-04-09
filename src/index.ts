import {ApolloServer} from 'apollo-server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import PokeAPI from './api/PokeAPI';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        pokeAPI: new PokeAPI(),
    }),
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
});
