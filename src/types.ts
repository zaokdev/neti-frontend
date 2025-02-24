export type PostType = {
    id: number;
    user: {
        id: number;
        name: string;
        username: string;
        avatar: string;
    }
    content: string;
    image: string | undefined;
    likes: number;
    comments: {
        id: number;
        user: string;
        avatar: string;
        content: string;
        createdAt: string;
    }[];
    createdAt: string;
}