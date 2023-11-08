import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class PostService {
    
    constructor(
        private httpClient: HttpClient) {

    }

    CreatePost(): Observable<any> {
        return this.httpClient.post("",{});
    }

    UpdatePost() {
    }

}