
export class Invirontment {
    productionBase : string = '';
    localBase: string = '';
    
    //Post
    CreatePost: string = '';
    GetNewsFeedPost: string = "";

    constructor() {
        this.Local();
        //this.Production();
    }

    Production(): void {
        this.productionBase = '';
    }

    Local(): void {
        this.localBase = 'https://localhost:44355/api';

        //Post
        this.CreatePost = this.localBase + '/Post/CreatePost';

        //get
        this.GetNewsFeedPost = this.localBase + '/PostQuery/get-user-posts';
    }
}