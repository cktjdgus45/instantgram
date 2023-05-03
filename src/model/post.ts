export type Category = "posts" | "saved" | "liked";

export type Comment = {
    author: {
        id: string;
        username: string;
        userImage: string;
    },
    comment: string;
};

export type FullPost = {
    id: string;
    username: string;
    userImage: string;
    image: string;
    text: string;
    createdAt: string;
    likes: string[];
    comments: Comment[];
};
