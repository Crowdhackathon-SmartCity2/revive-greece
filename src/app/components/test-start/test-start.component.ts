import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  private currentTest = {a:1};
  private newTestConfig = {
    type: undefined,
    topics: [],
    difficulty: undefined,
    format: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  newTest() {
    this.currentTest = undefined;
    return false;
  }

  topicsClasses(topic: string) {
    if (this.newTestConfig.topics.indexOf(topic) > -1) {
      return 'selected';
    } else {
      return '';
    }
  }
  selectTopic(topic: string) {
    const idx = this.newTestConfig.topics.indexOf(topic);
    if (idx === -1) {
      this.newTestConfig.topics.push(topic);
    } else {
      this.newTestConfig.topics.splice(idx, 1);
    }
    return false;
  }

  typeClasses(type: string) {
    if (this.newTestConfig.type === type) {
      return 'selected';
    } else {
      return '';
    }
  }

  selectType(type: string) {
    this.newTestConfig.type = type;
    return false;
  }

  formatClasses(format: string) {
    if (this.newTestConfig.format === format) {
      return 'selected';
    } else {
      return '';
    }
  }

  selectFormat(format: string) {
    this.newTestConfig.format = format;
    return false;
  }

  levelClasses(level: string) {
    if (this.newTestConfig.difficulty === level) {
      return 'selected';
    } else {
      return '';
    }
  }

  selectLevel(level: string) {
    this.newTestConfig.difficulty = level;
    return false;
  }
}
