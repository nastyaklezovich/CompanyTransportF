import { Component, OnInit, Output } from '@angular/core';
import Point from '../../Point'
import Transport from '../../Transport';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PointService } from 'src/app/point.service';
import { TransportService } from 'src/app/transport.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // points: Point[];
  // transports: Transport[];

  @Output() messageEvent = new EventEmitter<any>();

  form: FormGroup;

  obj = {};

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

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log('CHILD');
    console.log(form.value);
    this.obj = form.value;
    this.messageEvent.emit(this.obj)
  }

}
