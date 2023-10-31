import {Component, EventEmitter, Input, Output} from '@angular/core';
import Insect from "../insect/Insect";
import {InsectDTO} from "../insect/InsectDTO";

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent {
  public insectData:InsectDTO =  {
    scientificFullname :"",
    usualName:"",
    imgReference: ""
  }

  @Output("sendInsectDataEvent")
  addInsect:EventEmitter<typeof this.insectData>= new EventEmitter<typeof this.insectData>

  sendInsectDataToNewInsect(event:Event){
    event.preventDefault()
    this.addInsect.emit(this.insectData)

      this.insectData={
          scientificFullname :"",
          usualName:"",
          imgReference: ""
      }
  }





}
