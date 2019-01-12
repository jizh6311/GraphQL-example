import User from '../user/schema';
import Stat from '../stat/schema';
import Base from '../base';

const Tweet = `
extend type Query {
    Tweet(id: ID!): Tweet
    Tweets(limit: Int, skip: Int, sort_field: String, sort_order: String): [Tweet]
    TweetsMeta: Meta
}
extend type Mutation {
    createTweet (body: String): Tweet
    deleteTweet(id: ID!): Tweet
    markTweetRead(id: ID!): Boolean
}
type Tweet {
    id: ID!
    body: String
    date: Date
    Author: User
    Stats: Stat
}
`;

export default () => [Tweet, User, Stat, Base];
