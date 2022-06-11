import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { CompletedTasksPage } from '../completed-tasks/completed-tasks.page';
import { DeletedTasksPage } from '../deleted-tasks/deleted-tasks.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{itemName: 'Testikas', itemDueDate: Date.now()}]
  donelist = []

  today : number = Date.now()
  CompletedTasksPage: '../completed-tasks/completed-tasks.page'

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  async completedTasks(){
    const modal = await this.modalCtrl.create({
      component: CompletedTasksPage
    })

    return await modal.present()
  }

  async deletedTasks(){
    const modal = await this.modalCtrl.create({
      component: DeletedTasksPage
    })

    return await modal.present()
  }

  delete(index){
    this.todoList.splice(index,1)
  }

  complete(index){
    const doneList = this.todoList.slice();
    this.todoList.splice(index,1)
  }

}