import { Component, OnInit, TemplateRef } from '@angular/core';
import { PointService } from 'src/app/point.service';
import Point from '../../Point'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-point',
  templateUrl: './view-point.component.html',
  styleUrls: ['./view-point.component.css']
})
export class ViewPointComponent implements OnInit {

  points: Point[];
  point: {} = {};
  res: {} = {};
  modalRef: BsModalRef;
  addPointForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private modalService: BsModalService, private ps: PointService) {
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
    this.ps.get_point_name().subscribe((data: Point[]) => {
      console.log(data);
      this.points = data;
    })
  }

  delete_point(id) {
    this.ps.delete_point(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    })
  }

  save(name_point, id) {
    const obj = {
      name_point: name_point,
    }
    this.route.params.subscribe(params => {
      this.ps.update_point(obj, id);
      this.modalRef.hide();
    });
  }
  
  open_modal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    console.log(id);
    this.ps.edit_point(id).subscribe(((res: Point[]) => {
      this.point = { ...res };
      this.res = res;
      console.log(res);
    }));
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
