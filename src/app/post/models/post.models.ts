import { IComment, ILike, IPost } from "./post.intestfaces";

export class Post implements IPost {

    constructor() {
        this.publishedDate = new Date();
        this.comments = [];
        this.likes = [];
        this.createdBy = '';
    }

    createdBy: string;
    id?: string | any = '00000000-0000-0000-0000-000000000000';
    title: string = '';
    content: string = '';
    authorID: string = '';
    publishedDate: Date;
    comments: IComment[];
    likes: ILike[];
}