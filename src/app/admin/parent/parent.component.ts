import { ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild, Component } from "@angular/core";
import { ChildComponent } from '../child/child.component';
import Map from '../../Map'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  mapList: Array<Map> = [];

  obj = new Map();
 

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addComponent() {
    const componentFactory = this.cfr.resolveComponentFactory(ChildComponent);
    const componentRef = this.vcr.createComponent(componentFactory);
  }

  receiveMessage($event) {
    console.log('PARENT');
    this.obj = $event;
    console.log(this.obj);
    this.mapList.push(this.obj);
    console.log('ARRAY');
    console.log(this.mapList);
  }

}