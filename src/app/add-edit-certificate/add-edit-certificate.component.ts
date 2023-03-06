import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators ,} from '@angular/forms';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-add-edit-certificate',
  templateUrl: './add-edit-certificate.component.html',
  styleUrls: ['./add-edit-certificate.component.css']
})
export class AddEditCertificateComponent {
  certificate_form!: FormGroup;
  disableSelect = new FormControl(false);

  constructor(
    private fb: FormBuilder,
    private service:ManageService,
  ) {}
  ngOnInit(): void {
    this.certificate_form = this.fb.group({
      notification_id: ['',],
      std_center_code: ['', Validators.required],
      std_certificate_no: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
    this.service.get_certificate().subscribe(
      (result: any) => {
        console.log(result)

      }
    )
  }
  
  download_cer(){
    window.print()
  }

}
