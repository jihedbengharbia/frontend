import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginReponse } from "../model/loginResponse.model";
import { User } from "../model/user.model";

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    currentUser?:User
    usersList?:User[]

    userListObservable?: Observable<User[]>
    currentUserObservable?: Observable<User>

    constructor(
        private http:HttpClient
    ){
        this.usersList = [
            {
                username:"user1",
                password:"user1",
                name:"user1",
                age:20
            },
            {
                username:"user2",
                password:"user2",
                name:"user2",
                age:20
            },
            {
                username:"user3",
                password:"user3",
                name:"user3",
                age:20
            },
            {
                username:"user4",
                password:"user4",
                name:"user4",
                age:20
            }
        ]
    }
    
    signin(user:User): Observable<LoginReponse>{
        return this.http.post("http://localhost:3000/signin",user)
    }
    getUser(): Observable<User>{
        return this.http.get("http://localhost:3000/getUser")
    }

    getUsersList(): Observable<User[]>{
        return this.userListObservable = new Observable(
            (observable)=>{
                observable.next(this.usersList)
            }
        )
    }

    saveCurrentUser(user:User){
        const userString = JSON.stringify(user)
        localStorage.setItem("user",userString)
        return this.currentUserObservable = new Observable(
            (observable)=>{
                observable.next(user)
            }
        )        
    }

    /* saveUser(user:User): void{
        this.currentUser = user
    } */
}