import { ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild, Component } from "@angular/core";
import { ChildComponent } from '../child/child.component'
import Map from '../../Map'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) VCR: ViewContainerRef;

  index: number = 0;

  componentsReferences = [];

  mapList: Array<Map> = [];

  constructor(private CFR: ComponentFactoryResolver) {
  }

  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);
    let componentRef: ComponentRef<ChildComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  // createComponent(){
  //   const componentFactory = this.CFR.resolveComponentFactory(ChildComponent);
  //   const componentRef = this.VCR.createComponent(componentFactory);
  // }

  remove(index: number) {

    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: ChildComponent = <ChildComponent>componentRef.instance;

    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

  
  save(index: number, map: Map) {
    console.log('PARENT');
    console.log(map.start_point);
    this.mapList.push(map);
    console.log(this.mapList);
  }

}
