import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: new FormControl(''),
      feedback: new FormControl('')
    })
  }
}
