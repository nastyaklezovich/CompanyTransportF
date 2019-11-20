import { Component, OnInit } from '@angular/core';
import Map from '../../Map'
import { MapService } from '../../map.service'
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, NgForm } from '@angular/forms';
import { PointService } from 'src/app/point.service';
import Point from '../../Point'
import { TransportService } from 'src/app/transport.service';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.css']
})
export class AddMapComponent implements OnInit {

  // points: Point[];
  // transports: Transport[];
  points: Point[] = [{ id: "1", name_point: "1" }, { id: "2", name_point: "2" },]
  transports: Transport[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private ms: MapService, private ps: PointService, private ts: TransportService) {
    this.form = this.fb.group({
      routs: this.fb.array([]),
    });
  }

  add_rout() {
    const creds = this.form.controls.routs as FormArray;
    creds.push(this.fb.group({
      start_point: '',
      end_point: '',
      distance: '',
      transport: '',
    }));
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit() {
    // this.ps.get_point_name().subscribe((data: Point[]) => {
    //   // console.warn(data);
    //   console.log(data);
    //   this.points = data;
    // });
    // this.ts.get_transports().subscribe((data: Transport[]) => {
    //   console.log(data);
    //   this.transports = data;
    // })
  }

  // add_map(start_point, end_point) {

  //   type MyArrayType = Array<{ name: string }>;

  //   const arr: MyArrayType = [
  //     { name: start_point },
  //     { name: end_point },
  //   ];

  //   console.log(arr);
  //   this.ms.add_map(start_point, end_point)
  // }


}
