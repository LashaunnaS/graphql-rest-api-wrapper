import {books} from './typeDefs';
import {Book} from '../generated/graphql'

const resolvers = {
    Query: {
        books: (): Array<Book> => books,
    },
};

export default resolvers;