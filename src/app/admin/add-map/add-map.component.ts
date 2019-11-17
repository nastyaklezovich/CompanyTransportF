import { Component, OnInit } from '@angular/core';
import Map from '../../Map'
import { MapService } from '../../map.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.css']
})
export class AddMapComponent implements OnInit {

  addMapForm: FormGroup;

  constructor(private fb: FormBuilder, private ms: MapService) {
    this.createForm();
  }

  createForm() {
    this.addMapForm = this.fb.group(
      {
        start_point: ['', Validators.required],
        end_point: ['', Validators.required],
      }
    )
  }

  ngOnInit() {
  }

  add_map(start_point, end_point) {
    this.ms.add_map(start_point, end_point)
  }
}
