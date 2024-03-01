import { IComment, ILike, IPost, IPostRequestDto } from "./post.intestfaces";

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


export class PostRequest implements IPostRequestDto {
    
    constructor() {
        this.maxCount = 0;
        this.skipCount = 0;
        this.page = 0;
        this.loadCount = 1;
    }
    
    loadCount: number;
    userId?: string | null | undefined;
    id?: string | null | undefined;
    created?: Date | null | undefined;
    modified?: Date | null | undefined;
    maxCount: number;
    skipCount: number;
    page: number;
}