import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PointService } from 'src/app/point.service';

@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.css']
})
export class AddPointComponent implements OnInit {

  addPointForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: PointService) {
    this.createForm();
  }

  createForm() {
    this.addPointForm = this.fb.group(
      {
        name_point: ['', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(3),
          Validators.pattern('^[A-Za-zА-Яа-яЁё]+$'),
          Validators.required
        ])],
      }
    )
  }

  ngOnInit() {
  }

  add_point(name_point) {
    const obj = {
      name_point: name_point
    }
    this.ps.add_point(obj);
    console.log(obj);
  }

  account_validation_messages = {
    'name_point': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Название может содержать только символьные значения' },
      { type: 'minlength', message: 'Название должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Название не может содержать больше 25 символов' },
    ],
  }

}
