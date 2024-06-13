import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularToDo';
  Tasks:Todo[] = [
    {
      task: "Message 2 people",
      completed: true,
      duration: 0.25,
      priority: "high"
    },
    {
      "task": "Send a connection request to 5 industry professionals",
      "completed": false,
      "duration": 0.5,
      priority: "high"
  },
  {
      "task": "Follow 3 companies in your industry",
      "completed": false,
      "duration": 0.2,
      priority: "low"
  },
  {
      "task": "Like and comment on 3 posts from connections",
      "completed": false,
      "duration": 0.3,
      priority: "high"
  },
  {
      "task": "Share an industry-related article",
      "completed": false,
      "duration": 0.15,
      priority: "low"
  },
  {
    "task": "Send a thank-you message to a recent connection",
    "completed": false,
    "duration": 0.15,
    priority: "normal"
},
{
    "task": "Post a status update about a recent project or achievement",
    "completed": false,
    "duration": 0.1,
    priority: "normal"
}
  ];
  formInput: Todo = {} as Todo;
  AddTask():void{
    let NewTask: Todo = { ...this.formInput};
    NewTask.completed = false;
    this.Tasks.push(NewTask);
  }
  CheckOffTask(t:Todo): void{
    t.completed = true;
  }
  DeleteTask(t:Todo):void{
    let index: number = this.Tasks.findIndex(p => p == t);
    this.Tasks.splice(index, 1);
  }
}
