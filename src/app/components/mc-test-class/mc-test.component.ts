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
        text: 'aiofwhe  awiuef oiafwueh foaiweuh faoiwuh wf iuwh eefih wafih ',
        image: undefined,
        options: [
          {
            label: 'A',
            text: 'jfowiej owiefjwoeih'
          },
          {
            label: 'B',
            text: 'wfoie wfoi3f498ik'
          },
          {
            label: 'C',
            text: 'lfskj sfljjfsjld'
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
}
