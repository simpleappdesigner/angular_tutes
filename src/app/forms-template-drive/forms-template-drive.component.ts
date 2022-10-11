import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms-template-drive',
  templateUrl: './forms-template-drive.component.html',
  styleUrls: ['./forms-template-drive.component.css']
})
export class FormsTemplateDriveComponent implements OnInit {

  @ViewChild('f_2') signupForm:NgForm;
  defaultQuestion='pet';
  answer='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log("Submitted!", form);
  }

  onSubmit2(){
    //console.log("Submitted!", this.signupForm);
    console.log(this.signupForm.value.email);
    this.signupForm.reset();


  }

}
