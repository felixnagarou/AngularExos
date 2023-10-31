import {Component, Input} from '@angular/core';
import Insect from "./Insect";
import insect from "./Insect";


@Component({
  selector: 'app-insect',
  templateUrl: './insect.component.html',
  styleUrls: ['./insect.component.css']
})
export class InsectComponent {

  @Input()
  public insectTable= new Map<number, Insect>([])


  deleteInsect(id:number){
    this.insectTable.delete(id)
    Insect.count--
  }


  getTableStyle(){
    return {
      'margin': 'auto',
      'width' :'75%',

    }
  }


  protected readonly Insect = Insect;
  protected readonly insect = insect;
}
