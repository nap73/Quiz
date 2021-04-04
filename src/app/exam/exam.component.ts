import { Component, OnInit } from '@angular/core';

import {ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExamsService } from '../exams.service';
import { Exam } from '../exam.module';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  isQuestionCardShow: boolean = false;
  totalAnswered: number = 0;
 rightAnswer: number=0;
//   seleced?: string
  @ViewChild('submitModal') submitModal: any;
 @ViewChild('answerModal') answerModal:any;
  @ViewChild('questionForm') questionForm: any;
  @ViewChild('questionTest') questionTest : any;


  answerArray = [];
  allQuestions:Array<Exam>=[];
  
 msg:string="pass or fail";

 constructor(public examser:ExamsService,private modalService: NgbModal) { }

 ngOnInit(): void {
   this.examser.loadExamDetails().subscribe(result=>this.allQuestions=result)
   console.log('result')
 }
//   allQuestions: any = [{
// 	"id": 1,
// 	"question": "HTML stands for?",
// 	"a": "Hyper Text Markup Language",
// 	"b": "High Text Markup Language",
// 	"c": "Hyper Tabular Markup Language",
// 	"d": "None of these",
// 	"answer": "a"
// },
// {
// 	"id": 2,
// 	"question": "which of the following tag is used to mark a begining of paragraph ?",
// 	"a": "<TD>",
// 	"b": "<br>",
// 	"c": "<P>",
// 	"d": "<TR>",
// 	"answer": "c"
// },
// {
// 	"id": 3,
// 	"question": "From which tag descriptive list starts ?",
// 	"a": "<LL>",
// 	"b": "<DD>",
// 	"c": "<DL>",
// 	"d": "<DS>",
// 	"answer": "c"
// },
// {
// 	"id": 4,
// 	"question": "Correct HTML tag for the largest heading is",
// 	"a": "<head>",
// 	"b": "<h6>",
// 	"c": "<heading>",
// 	"d": "<h1>",
// 	"answer": "d"
// },
// {
// 	"id": 5,
// 	"question": "The attribute of <form> tag",
// 	"a": "Method",
// 	"b": "Action",
// 	"c": "Both a&b",
// 	"d": "None of these",
// 	"answer": "c"
// },
// {
// 	"id": 6,
// 	"question": "Markup tags tell the web browser ?",
// 	"a": "How to organise the page",
// 	"b": "How to display the page",
// 	"c": "How to display message box on page",
// 	"d": "None of these",
// 	"answer": "b"
// },

// {
// 	"id": 7,
// 	"question": "www is based on which model?",
// 	"a": "Local-server",
// 	"b": "Client-server",
// 	"c": "3-tier",
// 	"d": "None of these",
// 	"answer": "b"
// },
// {
// 	"id": 8,
// 	"question": "What are Empty elements and is it valid?",
// 	"a": "No, there is no such terms as Empty Element",
// 	"b": "Empty elements are element with no data",
// 	"c": "No, it is not valid to use Empty Element",
// 	"d": "None of these",
// 	"answer": "b"
// },
// {
// 	"id": 9,
// 	"question": "Which of the following attributes of text box control allow to limit the maximum character?",
// 	"a": "size",
// 	"b": "len",
// 	"c": "maxlength",
// 	"d": "all of these",
// 	"answer": "c"
// },

// {
// 	"id": 10,
// 	"question": "Web pages starts with which ofthe following tag?",
// 	"a": "<Body>",
// 	"b": "<Title>",
// 	"c": "<HTML>",
// 	"d": "<Form>",
// 	"answer": "c"
// }

// ]

 submitTest() {
   
    this.rightAnswer = 0;
     this.totalAnswered = 0;
     
   for (let i = 0; i < this.allQuestions.length; i++) {
     if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
       this.totalAnswered++;
       if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
         this.rightAnswer++;
         
       }
       console.log(this.rightAnswer)
     }

if(this.rightAnswer>7){
 this.msg="pass"
 }else{
   this.msg="fail"
 }
   }
   
   this.submitModal.show();
 }
 startQuiz() {
   for (let i = 0; i < this.allQuestions.length; i++) {
     if ('selected' in this.allQuestions[i]) {
       delete this.allQuestions[i]['selected'];
     }

   }
   
   this.questionTest.reset();
   this.isQuestionCardShow = true;

 }
 HomePage() {
   this.isQuestionCardShow = false;
 }

 checkAnswers(){
   this.submitModal.hide();
   this.answerModal.show();
 }




}
