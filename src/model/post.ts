import { SimpleUser, User } from './user';

export type Comment = {
    author: User,
    comment: string,
}

export type Post = {
    author: SimpleUser,
    photo: {
        asset: {
            _ref: string;
        }
    },
    likes: User[] | null,
    comments: Comment[] | null,
    _createdAt: string;

}