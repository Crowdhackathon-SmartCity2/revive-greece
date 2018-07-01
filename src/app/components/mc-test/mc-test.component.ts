import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-test',
  templateUrl: './mc-test.component.html',
  styleUrls: ['./mc-test.component.css']
})
export class McTestComponent implements OnInit {

  private test = {
    questions: [
      {
        num: 15,
        text: 'Which one of the following is correct?',
        image: undefined,
        category: 'css',
        options: [
          {
            label: 'A',
            text: 'When the `display` is `inline-block` the values of width & height are used'
          },
          {
            label: 'B',
            text: 'When the `display` is `inline-block` the values of width & height are always in pixels'
          },
          {
            label: 'C',
            text: 'When the `display` is `inline` the <div> id converted to <span>'
          }
        ]
      }, {
        num: 16,
        text: 'Which one makes the element look like a circle?',
        category: 'css',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'border: 50%;'
          },
          {
            label: 'B',
            text: 'border-radius: 50%;'
          },
          {
            label: 'C',
            text: 'border-radius: 100%;'
          }
        ]
      }, {
        num: 17,
        text: 'Which tags make sense inside a ul?',
        category: 'html',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'ol'
          },
          {
            label: 'B',
            text: 'tr'
          },
          {
            label: 'C',
            text: 'li'
          }
        ]
      }, {
        num: 18,
        text: 'Which css rule is used to set the distance between border and content?',
        category: 'css',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'margin'
          },
          {
            label: 'B',
            text: 'padding'
          },
          {
            label: 'C',
            text: 'outline'
          }
        ]
      }
    ],
    selections: []
  };

  private currentQuestion: number = 0;

  constructor() { }

  ngOnInit() {
  }

  prev() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }
  next() {
    if (this.currentQuestion < this.test.questions.length - 1) {
      this.currentQuestion++;
    }
  }
  gotoQuestion(qNum: number) {
    if (qNum < 1 || qNum > this.test.questions.length) {
      return;
    }
    this.currentQuestion = qNum - 1;
  }

  categoryClass(cls) {
    if (cls === 'html') {
      return 'fa-html5';
    } else if (cls === 'css') {
      return 'fa-css3-alt';
    } else if (cls === 'js') {
      return 'fa-js';
    }
  }
}
