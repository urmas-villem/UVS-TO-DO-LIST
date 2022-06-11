import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit {

  completedList = [{itemName: 'Testikas', itemDueDate: Date.now()}]

  taskName
  taskDate
  taskObject
  static completedList: any;
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  AddTask(){
    this.taskObject = ({itemName:this.taskName, itemDueDate:this.taskDate})
    this.dismiss()
  }

}
