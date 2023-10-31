import {Component, EventEmitter, Input, Output} from '@angular/core';
import Insect from "../insect/Insect";

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent {
  public insectData:{ scientificFullname: string; usualName: string; imgReference: string } =  {
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
