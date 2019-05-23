
import { Component, HostBinding, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';
import { AuthGuardService } from '../../services/auth-guard.service';
import {UserInfoServiceService} from '../../services/user/user-info-service.service';

import { UserInfo } from '../../interface/user-interface';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { DialogServiceService } from 'src/app/services/common/dialog-service.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-manage-list',
  styleUrls: ['./manage-list.component.css'],
  templateUrl: './manage-list.component.html',
  providers: [
    TdMediaService,
    AuthGuardService,
  ]
})
export class ManageListComponent implements OnInit {
  userInfo : UserInfo;
  isAdmin : boolean = false;
  projects = [];

  // for add project
  projectIdForAdd : string;
  isVisibleModalAddProject: boolean = false;
  projectName : string;
  descProject : string;
  // for list mem
  listMember : Array<any> = [];
  projectIdForListMem : string;
  isVisibleModalListMem : boolean = false;
  //for add member
  projectIdForAddMem : string;
  isVisibleModalAddMem : boolean = false;
  memberId : string;

  constructor(public media: TdMediaService, 
    private authService : AuthGuardService,
    private userInfoSerivce : UserInfoServiceService,
    private projecService : ProjectService,
    private router : Router,
    private notify : DialogServiceService) {
    }

    async ngOnInit(){
       await this.userInfoSerivce.getUserInfo().subscribe( (resData : UserInfo ) =>{
        console.log('1');
        this.userInfo = resData;
        if(this.userInfo.roleId && this.userInfo.roleId == "1"){
          this.isAdmin = true;
        }else{
          this.isAdmin = false
        }
      });

       await this.projecService.getListProject().subscribe( (res : any) => {
        if(res.code == '1000'){
          res.listProject.forEach(proMember => {
            this.projects.push(proMember.project);
          });
        }
      });
      
    }

    updateListProject(){
      this.projects = [];
      this.projecService.getListProject().subscribe( (res : any) => {
        if(res.code == '1000'){
          res.listProject.forEach(proMember => {
            this.projects.push(proMember.project);
          });
        }
      });
    }
  
  // isRoleAdmin() : boolean{
  //   if( this.userInfo.role && this.userInfo.role == '1'){
  //     return true;
  //   }
  //   return false;
  // }

  detailProject( projectId : string){
    console.log(projectId);
    this.router.navigate(['/detail/' + projectId]);
    // this.router.navigate(['/login']);
  }

  logout() : void {
    this.authService.logout();
  }

  deleteProject( projectId : string){

  }

  leaveProject( projectId : string){

  }

  addProject( ){
    this.isVisibleModalAddProject = true;
  }

  cancelModalAddPro(){
    this.isVisibleModalAddProject = false;
  }

  saveProject(){
    if(this.projectName && this.descProject){
      this.isVisibleModalAddProject = false;
      let dataReq = {
        "project_name" :this.projectName,
        "type" : "PRIVATE",
        "description" : this.descProject
      }
      this.projecService.addProject(dataReq).subscribe( (res : any) =>{
        if(res.code == '1000'){
          this.notify.showNotify('success', 'Thành công','Thêm dự án thành công!');
          this.updateListProject();
        }else{
          this.notify.showNotify('error', 'Lỗi ','Có lỗi khi thêm!');
        }
      });
    }else{
      this.notify.showNotify('error','Lỗi','Nhập đủ thông tin');
    }

  }

  addMember( projectId : string ){
    this.projectIdForAddMem = projectId;
    this.isVisibleModalAddMem = true;
  }

  cancelModalAddMem(){
    this.isVisibleModalAddMem = false;
  }

  saveMem(){
    if( this.projectIdForAddMem && this.memberId){
      this.cancelModalAddMem();
      this.projecService.addMember(this.projectIdForAddMem, this.memberId).subscribe( (res : any) =>{
        if( res.code == '1000'){
          this.notify.showNotify('success', 'Thành công','Thêm thành viên thành công!');
        }else{
          if( res.code == '1111'){
            this.notify.showNotify('error', 'Lỗi ','Không tìn thấy người dùng ' + this.memberId);
          }

          this.notify.showNotify('error', 'Lỗi ','Có lỗi khi thêm!');
        }
      });
    }else{
      this.notify.showNotify('error','Lỗi','Nhập đủ thông tin');
    } 
    
  }

  showListMember( projectId : string){
    this.projecService.getDetailProject(projectId).subscribe( (res : any) => {
      if(res.code == '1000'){
        this.listMember = res.project.listMember.split(',');
      }
    })
    this.isVisibleModalListMem = true;
  }

  cancelModalList(){
    this.isVisibleModalListMem = false;
  }
}