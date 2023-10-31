import {Component, EventEmitter, Output} from '@angular/core';
import insect from "../insect/Insect";

@Component({
  selector: 'app-supression',
  templateUrl: './supression.component.html',
  styleUrls: ['./supression.component.css']
})
export class SupressionComponent {

  public id:number


  @Output("sendInsectIdEvent")
  deleteInsect:EventEmitter<number>= new EventEmitter<number>()


  sendInsectId(event:Event){
    event.preventDefault()
    this.deleteInsect.emit(this.id)
  }

  protected readonly insect = insect;
}
