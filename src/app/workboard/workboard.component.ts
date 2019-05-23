import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { DialogServiceService } from '../services/common/dialog-service.service';

@Component({
  selector: 'app-workboard',
  templateUrl: './workboard.component.html',
  styleUrls: ['./workboard.component.css']
})
export class WorkboardComponent implements OnInit {

  projectId : string;
  projectData : any;
  todoTask : any[] = [];
  todoDone : any[] = [];
  listMember : any[] = [];

  // for add task
  isVisibleModalAddTask : boolean = false;
  taskName : string;
  assigned : string;
  dueDate : string;
  descTask : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private projectService : ProjectService,
    private notify : DialogServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params['project_id'];
      if (!this.projectId) this.router.navigate(['']);
      this.getProjectData(this.projectId);
      });
  }

  getProjectData( projectId : string){
    this.todoTask = [];
    this.todoDone = [];
    this.listMember = [];
    this.projectService.getDetailProject( projectId).subscribe( (res : any) =>{
      this.todoDone = [];
      this.todoTask = [];
      this.projectData = res.project;
      let listTask : Array<any>  = res.listTask;
      // alert(res.projectlistMember)
      this.listMember = this.projectData.listMember.split(',');
      if( listTask){
        // listTask.forEach( (task : any) =>{
        //   if(task.status == 'CREATED') {
        //     return true;
        //   }
        //   if(task.status == 'DONE'){
        //     this.todoDone.push(task);
        //     return false;
        //   }
        //   return false;
        // })
        this.todoTask = listTask.filter( (item : any) =>{
          if(item.statusId == 'CREATED') {
            return true;
          }
          if(item.statusId == 'DONE'){
            this.todoDone.push(item);
            return false;
          }
          return false;
        });
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // this.updateStatusTask(this.todoDone[event.previousIndex].taskId, "CREATED");
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // alert('chuyen dan');
      // alert(this.todoTask[event.previousIndex].taskId);

      let x = this.todoDone.indexOf(this.todoDone[event.previousIndex]);
      if( x < 0){
        // alert('tu ben created sang')
        this.updateStatusTask(this.todoTask[event.previousIndex].taskId, "DONE");
        // this.todoDone.push(this.todoTask[event.previousIndex].taskId);
      }else{
        // alert('tu ben done sang' + x);
        this.updateStatusTask(this.todoDone[event.previousIndex].taskId, "CREATED");
        // this.todoTask.push(this.todoDone[event.previousIndex].taskId);
      }
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);
    }
  }

  completeTask( taskId : string){
    this.updateStatusTask( taskId, 'DONE');
  }

  updateStatusTask(taskId : string, statusId : string){
    this.projectService.updateTask(taskId , statusId).subscribe( (res : any)=>{
      // window.location.reload();
      // this.todoDone = [];
      // this.todoTask = [];
      // this.ngOnInit()
      this.getProjectData(this.projectId);
    });

  }

  addTask(){
    this.isVisibleModalAddTask = true;
  }

  cancelModalAddPro(){
    this.isVisibleModalAddTask = false;
  }

  saveTask(){
    if(this.taskName && this.assigned && this.descTask && this.dueDate){
      this.isVisibleModalAddTask = false;
      let dataReq = {
        "project_id" : this.projectId,
        "task_name" : this.taskName,
        "assigned" : this.assigned,
        "due_date" : this.dueDate,
        "tag" : "DEV",
        "description" : this.descTask
      }
      this.projectService.addTask(dataReq).subscribe( (res : any) =>{
        if(res.code == '1000'){
          this.ngOnInit();
          this.notify.showNotify('success', 'Thành công','Thêm công việc thành công!');
        }else{
          this.notify.showNotify('error', 'Lỗi ','Có lỗi khi thêm!');
        }
      });
    }else{
      this.notify.showNotify('error','Lỗi','Nhập đủ thông tin');
    }
  }

  deleteTask( taskId : string){
    this.updateStatusTask( taskId, 'DELETED');
  }

}
