import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addComponent(){
    const componentFactory = this.cfr.resolveComponentFactory(ItemComponent);
    const componentRef = this.vcr.createComponent(componentFactory);
  }
}

