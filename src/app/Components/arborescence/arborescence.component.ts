import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arborescence',
  templateUrl: './arborescence.component.html',
  styleUrls: ['./arborescence.component.css']
})
export class ArborescenceComponent {

  @Input({
    alias : 'arborDisplay'
  })
  insectCount!: number

}
