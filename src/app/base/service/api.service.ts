import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export abstract class ApiService {

    token = localStorage.getItem('authToken')

    private httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': '',
            'Access-Control-Allow-Origin': '*'            
        })
    };

    constructor (
        private http: HttpClient
    ) {}

    
    public async sendPostRequest(url: string, data: any){
        return this.http.post(url, data, this.httpHeaders).pipe(
            tap({
                error: error => {
                    if (error.status === 500) {
                        // Handle 500
                    } else if (error.status === 400) {
                        // Handle 400
                    } else if (error.status === 401) {
                        // Handle 401
                    }
                }})).toPromise();
    }
    
       
    
    public sendGetRequest(url: string): Observable<any>{
        const headers= new HttpHeaders()
            .set('content-type', 'application/json')
            // .set('Authorization', this.token)
        return this.http.get(url, { 'headers': headers }).pipe(
            tap({
                error: error => {
                    if (error.status === 500) {
                        // Handle 500
                    } else if (error.status === 400) {
                        // Handle 400
                    } else if (error.status === 401) {
                        // Handle 401
                    }
                }}));
    }

       
}