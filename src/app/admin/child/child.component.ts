import { Component, OnInit } from '@angular/core';
import Point from '../../Point'
import Transport from '../../Transport';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PointService } from 'src/app/point.service';
import { TransportService } from 'src/app/transport.service';
import { EventEmitter } from '@angular/core';
import Map from '../../Map'

export interface myinterface {
  remove(index: number);
  save(index: number, map: Map);
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public index: number;
  public selfRef: ChildComponent;

  form: FormGroup;

  map: Map;


  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  points: Point[] = [
    { name_point: 'Москва', id: '1' },
    { name_point: 'Минск', id: '2' },
    { name_point: 'Рига', id: '3' },
  ]

  transports: Transport[] = [
    {
      name_transport: 'BMW',
      speed: '2',
      id_company: '1',
      max_weight: '200',
      tariff_plan: '200',
      id: '1',
    },
    {
      name_transport: 'AUDI',
      speed: '2',
      id_company: '2',
      max_weight: '300',
      tariff_plan: '350',
      id: '2',
    },
  ]


  constructor(private fb: FormBuilder, private ps: PointService, private ts: TransportService) {
    this.form = this.fb.group(
      {
        start_point: ['', Validators.required],
        end_point: ['', Validators.required],
        transport: ['', Validators.required],
        distance: ['', Validators.required],
        cost: ['', Validators.required],
        time: ['', Validators.required],
      }
    );
  }


  removeMe(index) {
    this.compInteraction.remove(index)
  }

  save() {
    console.log('CHILD');
    console.log(this.form.value);
    this.map = this.form.value;
    this.compInteraction.save(this.index, this.map);
    console.log('--------')
  }

}

