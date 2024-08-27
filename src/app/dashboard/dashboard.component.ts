import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  taskSum: number = 0;
  taskCompleted: number = 0;
  taskInProgress: number = 0;

  ngOnInit() {
    const tachesSauvegarde = localStorage.getItem('taches');
    if (tachesSauvegarde) {
      const taches = JSON.parse(tachesSauvegarde);
      this.taskSum = taches.length;
      this.taskCompleted = taches.filter((tache: any) => tache.done).length;
      this.taskInProgress = this.taskSum - this.taskCompleted;
    } else {
      this.taskSum = 0;
      this.taskCompleted = 0;
      this.taskInProgress = 0;
    }
  }
}
