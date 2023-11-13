
export interface IPost {
    title: string;
    content: string;
    authorID: string;
    publishedDate: Date;
    comments: IComment[];
    likes: ILike[];
    id: string;
  }
  
export interface IComment {
    // Define the properties of your Comment class here
  }
  
  export interface ILike {
    // Define the properties of your Like class here
  }
  
  
  