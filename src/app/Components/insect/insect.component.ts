import { Component } from '@angular/core';
import Insect from "./Insect";


@Component({
  selector: 'app-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.css']
})
export class InsectComponent {


  public testInsect ={
    sName :"",
    uName:"",
    aspect: ""

  }



  public insectTable= new Map<Number, Insect>([])

   addInsect(event:Event){
    event.preventDefault()
     const newInsect = new Insect(this.testInsect.sName, this.testInsect.uName, this.testInsect.aspect)
    this.insectTable.set(newInsect.insectId, newInsect)
  }

  deleteInsect(id:Number){
    this.insectTable.delete(id)
  }

  displayGradient(){
    return {
      'color': this.insectTable.keys()
    }
  }




  protected readonly Insect = Insect;
}
