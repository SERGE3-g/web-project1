import { Component, OnInit } from '@angular/core';
import { Employee, Priority, Service, Task } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-treelist',
  templateUrl: './treelist.component.html',
  styleUrls: ['./treelist.component.scss']
})
export class TreelistComponent {

  tasks: Task[];

  employees: Employee[];

  priorities: Priority[];

  statuses: string[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();

    this.statuses = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed',
    ];
  }

  getCompletionText(cellInfo: { valueText: any; }) {
    return `${cellInfo.valueText}%`;
  }
}




