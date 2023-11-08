import { IComment, ILike, IPost } from "./post.intestfaces";

export class Post implements IPost {

    constructor() {
        this.title = "";
        this.content = "";
        this.authorID = "";
        this.publishedDate = new Date();
        this.comments = [];
        this.likes = [];
    }

    title: string;
    content: string;
    authorID: string;
    publishedDate: Date;
    comments: IComment[];
    likes: ILike[];
}