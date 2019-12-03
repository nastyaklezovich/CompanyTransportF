import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Point from '../../Point';
import { CalculateService } from '../../calculate.service';
import { PointService } from '../../point.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  points: Point[];

  types = [
    { type_product: '1' },
    { type_product: '2' },
  ]

  calculateForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private cs: CalculateService, private ps: PointService) {
    this.createForm();
  }

  createForm() {
    this.calculateForm = this.fb.group({
      start_point: ['', Validators.required],
      end_point: ['', Validators.required],
      weight_product: ['', Validators.compose([
        Validators.maxLength(6),
        Validators.pattern(/^[0-9]/),
        Validators.required
      ])],
      type_product: ['', Validators.required],
      name_product: ['', Validators.compose([
        Validators.pattern('^[A-Za-zА-Яа-яЁё]+$'),
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.required
      ])],
    })
  }

  make_order(start_point, end_point, weight_product, type_product, name_product) {
    
    var aValue = JSON.parse(localStorage.getItem('user'));

    var id = aValue.idUser;

    console.log(id);
  
    const obj = {
      start_point: start_point,
      end_point: end_point,
      weight_product: weight_product,
      type_product: type_product,
      name_product: name_product,
      id_user: id,
    }
    
    this.cs.make_order(obj);
  }


  ngOnInit() {
    this.ps.get_point_name().subscribe((data: Point[]) => {
      console.log(data);
      this.points = data;
    });

  }

  account_validation_messages = {
    'name_product': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Название может содержать только символьные значения' },
      { type: 'minlength', message: 'Название должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Название не может содержать больше 25 символов' },
    ],
    'weight_product': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Вес может содержать только числовые значения' },
      { type: 'maxlength', message: 'Вес не может содержать больше 6 символов' },
    ],
  }
}
