import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-add-edit-certificate',
  templateUrl: './add-edit-certificate.component.html',
  styleUrls: ['./add-edit-certificate.component.css']
})
export class AddEditCertificateComponent {
  certificate_form!: FormGroup;
  disableSelect = new FormControl(false);
  std_center_code:any
  std_certificate_no:any

  constructor(
    private fb: FormBuilder,
    private service: ManageService,
    private router: Router,
    private popup:NgToastService
  ) { }
  ngOnInit(): void {
    this.certificate_form = this.fb.group({
      std_center_code: ['', Validators.required],
      std_certificate_no: ['', Validators.required],
    })
  }

  onverfiy() {
    this.service.get_certificate_by_certificate_no(this.certificate_form.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.success) {
          this.router.navigate(['veryfication'], res.uid[0])
            this.popup.success({ detail: 'Success', summary: 'Verify Successfull...', })
        }
        else {
          this.popup.error({ detail: 'Fail', summary: 'No Record Found', })
        }
      },
      (error: any) => {
        this.popup.error({ detail: 'Fail', summary: 'No Record Foun', })
      }
    )
  }

}

