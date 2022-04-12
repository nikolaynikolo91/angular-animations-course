import { Component, Input, OnInit } from '@angular/core';
import { IGoal } from '../app.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  @Input() goal: IGoal = { title: '', isActiveGoal: false };

  constructor() {}

  ngOnInit(): void {}
}
