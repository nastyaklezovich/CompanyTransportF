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

  public compInteraction: myinterface;

  points: Point[];

  transports: Transport[];


  constructor(private fb: FormBuilder, private ps: PointService, private ts: TransportService) {
    this.form = this.fb.group(
      {
        start_point: ['', Validators.required],
        end_point: ['', Validators.required],
        transport: ['', Validators.required],
        distance: ['', Validators.compose([
          Validators.maxLength(15),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        cost: ['', Validators.compose([
          Validators.maxLength(25),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        time: ['', Validators.compose([
          Validators.maxLength(15),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
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

  ngOnInit() {
    this.ps.get_point_name().subscribe((data: Point[]) => {
      console.log(data);
      this.points = data;
    });
    this.ts.get_transports().subscribe((data: Transport[]) => {
      console.log(data);
      this.transports = data;
    })
  }

  account_validation_messages = {
    'distance': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Расстояние может содержать только числовые значения' },
      { type: 'maxlength', message: 'Расстояние не может содержать больше 15 символов' },
    ],
    'cost': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Стоимость может содержать только числовые значения' },
      { type: 'maxlength', message: 'Стоимость не может содержать больше 25 символов' },
    ],
    'time': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Время может содержать только числовые значения' },
      { type: 'maxlength', message: 'Время не может содержать больше 15 символов' },
    ],
  }

}

