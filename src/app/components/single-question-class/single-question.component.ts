import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {

  @Input('question')
  private q;

  @Input('answer')
  private selectedLabel: string;

  @Output('answered')
  private answerEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  optionSelect(opt) {
    this.selectedLabel = opt.label;
    this.answerEmitter.emit( this.selectedLabel );
  }
}
