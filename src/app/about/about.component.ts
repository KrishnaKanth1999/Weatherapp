import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  feedbackForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm=this.fb.group({

country:'',
    });
}

}
