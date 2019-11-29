import { Component, OnInit, TemplateRef } from '@angular/core';
import Transport from '../../Transport'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransportService } from '../../transport.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-transports',
  templateUrl: './view-transports.component.html',
  styleUrls: ['./view-transports.component.css']
})
export class ViewTransportsComponent implements OnInit {

  transports: Transport[];
  addTransportForm: FormGroup;
  modalRef: BsModalRef;

  transport: {} = {};
  res: {} = {};

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private ts: TransportService, private modalService: BsModalService) {
    this.createForm();
  }

  createForm() {
    this.addTransportForm = this.fb.group(
      {
        name_transport: ['', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(3),
          Validators.required
        ])],
        speed: ['', Validators.compose([
          Validators.maxLength(3),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        id_company: ['', Validators.required],
        max_weight: ['', Validators.compose([
          Validators.maxLength(4),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        tariff_plan: ['', Validators.compose([
          Validators.maxLength(6),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
      }
    )
  }


  ngOnInit() {
    this.ts.get_transports().subscribe((data: Transport[]) => {
      console.log(data);
      this.transports = data;
    })
  }

  delete_transport(id) {
    this.ts.delete_transport(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

  save(name_transport, speed, id_company, max_weight, tariff_plan) {
    const obj = {
      name_transport: name_transport,
      speed: speed,
      id_company: id_company,
      max_weight: max_weight,
      tariff_plan: tariff_plan
    };
    this.route.params.subscribe(params => {
      this.ts.update_transport(obj, params['id']);
      this.modalRef.hide();
    });

  }

  open_modal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    console.log(id);
    this.ts.edit_transport(id).subscribe(((res: Transport[]) => {
      this.transport = { ...res };
      this.res = res;
      console.log(res);
    }));
  }

  account_validation_messages = {
    'name_transport': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'minlength', message: 'Название должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Название не может содержать больше 25 символов' },
    ],
    'speed': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Скорость может содержать только числовые значения' },
      { type: 'maxlength', message: 'Скорость не может содержать больше 3 символов' },
    ],
    'max_weight': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Максимальный вес может содержать только числовые значения' },
      { type: 'maxlength', message: 'Максимальный вес не может содержать больше 6 символов' },
    ],
    'tariff_plan': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Тариф может содержать только числовые значения' },
      { type: 'maxlength', message: 'Тариф не может содержать больше 6 символов' },
    ],
  }

}
