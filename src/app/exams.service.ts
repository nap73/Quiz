import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Exam } from './exam.module';
@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(public http:HttpClient) {


   }

   loadExamDetails():Observable<Exam[]>{
    return this.http.get<Exam[]>("/assets/question.json")
  }

}
