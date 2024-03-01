
export interface IPost {
    title: string | any;
    content: string;
    authorID: string;
    publishedDate: Date;
    comments: IComment[];
    likes: ILike[];
    id?: string;
    createdBy: string;
  }

 export interface IPostRequestDto {
    userId?: string | null;
    id?: string | null;
    created?: Date | null;
    modified?: Date | null;
    maxCount: number;
    skipCount: number;
    page: number;
    loadCount: number;
}
  
export interface IComment {
    // Define the properties of your Comment class here
  }
  
  export interface ILike {
    // Define the properties of your Like class here
  }
  
  
  