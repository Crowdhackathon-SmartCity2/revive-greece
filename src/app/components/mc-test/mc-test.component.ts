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
        text: 'ogi gpsoih segoih egrogieh',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'egogjs ergergserg'
          },
          {
            label: 'B',
            text: 'aofiejwoieajf awoeifjawo'
          },
          {
            label: 'C',
            text: 'tack'
          }
        ]
      }, {
        num: 17,
        text: 'oierhoa apwfeoihf poiweh fpoiiaowehfoiwfh',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'oierg jser psoerigjseiorj'
          },
          {
            label: 'B',
            text: 'hiau foiwuehf aiwef paowieh'
          },
          {
            label: 'C',
            text: 'sekrjg soseirjgsoeir'
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
