import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-workboard',
  templateUrl: './workboard.component.html',
  styleUrls: ['./workboard.component.css']
})
export class WorkboardComponent implements OnInit {

  projectId : string;
  projectData : any;
  todoTask : any[] = [];
  todoDone : any[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private projectService : ProjectService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params['project_id'];
      if (!this.projectId) this.router.navigate(['']);
      this.getProjectData(this.projectId);
      });
  }

  getProjectData( projectId : string){
    this.projectService.getDetailProject( projectId).subscribe( (res : any) =>{
      this.projectData = res.project;
      let listTask : Array<any>  = res.listTasks;
      if( listTask){
        this.todoTask = listTask.filter( (item : any) =>{
          if(item.status == 'CREATED') {
            this.todoDone.push(item);
            return true;
          }
        });
      }
    });
  }

  todo = [];

  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // alert('chuyen dan');
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
