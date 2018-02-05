import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../global/data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  zipCodeForm: FormGroup

  constructor(private fb: FormBuilder, private data: DataService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.zipCodeForm = this.fb.group({
      zipcode: ['',
        Validators.compose([
          Validators.required, Validators.pattern(/^\d{5}$/)
        ])],
    });
  }
  onSubmit() {
    console.log(this.zipCodeForm);
    const zip = this.zipCodeForm.value.zipcode;
    this.data.getGeoCode(zip);
    this.data.showResults$.next(true);
    this.data.getBeerByStyleId(14);
  }

}
