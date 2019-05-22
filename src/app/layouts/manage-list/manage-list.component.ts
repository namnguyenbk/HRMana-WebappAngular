
import { Component, HostBinding, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';
import { AuthGuardService } from '../../services/auth-guard.service';
import {UserInfoServiceService} from '../../services/user/user-info-service.service';

import { UserInfo } from '../../interface/user-interface';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

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
  listMember : Array<any>;
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
    private router : Router) {
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
          // this.projects = res.listProject;
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

  addProject( projectId : string){
    this.isVisibleModalAddProject = true;
  }

  cancelModalAddPro(){
    this.isVisibleModalAddProject = false;
  }

  saveProject(){
    this.isVisibleModalAddProject = false;

  }

  addMember( projectId : string ){
    this.isVisibleModalAddMem = true;
  }

  cancelModalAddMem(){
    this.isVisibleModalAddMem = false;
  }

  saveMem(){
    this.cancelModalAddMem();
  }

  showListMember(){
    this.isVisibleModalListMem = true;
  }

  cancelModalList(){
    this.isVisibleModalListMem = false;
  }
}