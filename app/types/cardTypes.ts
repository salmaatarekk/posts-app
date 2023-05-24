export type Post = {
    postId: string;
    postLikes: number;
    authorName: string;
    postTags: string[];
    imageTitle: string;
    isFavorite: boolean;
    postImageUrl: string;
    authorImageUrl: string;
    postDescription: string;
    imageDescription: string;
    postCommentsNumber: number;
}