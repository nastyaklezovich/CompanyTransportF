import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapService } from 'src/app/map.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-points',
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.css']
})
export class AddPointsComponent implements OnInit {

  map: {} = {};
  res: {} = {};
  myForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private ms: MapService, private fb: FormBuilder) {
    this.myForm = new FormGroup({
      "points": new FormArray([
        new FormControl("", Validators.required)
      ])
    })
  }

  addPoint() {
    (<FormArray>this.myForm.controls["points"]).push(new FormControl("", Validators.required));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ms.edit_map(params['id'].subscribe(res => {
        console.log(res);
        this.map = { ...res };
        this.res = res;
      }))
    })
  }

  submit() {
    console.log(this.myForm);
  }

}
