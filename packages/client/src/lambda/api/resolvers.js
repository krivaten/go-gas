import { start } from './connector';

const prepare = (o) => {
    o._id = o._id.toString()
    return o
}

export const resolvers = {
    Query: {
        post: async (root, { _id}) => {
            const { Posts } = await start();
            return prepare(await Posts.findOne(ObjectId(_id)));
        },
        posts: async () => {
            const { Posts } = await start();
            return (await Posts.find({}).toArray()).map(prepare);
        },
        comment: async (root, { _id}) => {
            const { Comments } = await start();
            return prepare(await Comments.findOne(ObjectId(_id)));
        },
        user: async (root, { _id}) => {
            const { Users } = await start();
            return prepare(await Users.findOne(ObjectId(_id)));
        },
        users: async () => {
            const { Users } = await start();
            return (await Users.find({}).toArray()).map(prepare);
        }
    },
    Post: {
        comments: async({_id}) => {
            const { Comments } = await start();
            return (await Comments.find({postId: _id}).toArray().map(prepare));
        }
    },
    Comment: {
        post: async({postId}) => {
            const { Posts } = await start();
            return prepare(await Posts.findone(ObjectId(postId)));
        }
    },
    Mutation: {
        createPost: async (root, args, context, info) => {
            const res = await Posts.insert(args);
            return prepare(await Posts.findOne({_id: res.insertedIds[1]}))
        },
        createComment: async (root, args, context, info) => {
            const res = await Comments.insert(args);
            return prepare(await Comments.findOne({_id: res.insertedIds[1]}))
        },
        createUser: async (root, args, context, info) => {
            const res = await Users.insert(args);
            return prepare(await Users.findOne({_id: res.insertedIds[1]}))
        }
    }
}