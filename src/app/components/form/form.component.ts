import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GMapsService} from "../../services/gmaps.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  lat: Number;
  lng: Number;
  newUser: FormGroup;
  address: string;

  constructor(private formBuilder: FormBuilder, private gmapsService: GMapsService) {

    this.lat = 42;
    this.lng = 7;
    this.newUser = this.formBuilder.group({
      user: this.formBuilder.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
      }),
      address: this.formBuilder.group({
        latitude: [42],
        longitude: [20],
        address: ['']
      })
    });


    const myFormValueChanges$ = this.newUser.controls['address'].valueChanges;

    myFormValueChanges$.subscribe((data) => {

      if(this.newUser.controls['address'].valid) {
        this.lat = parseFloat(data.latitude);
        this.lng = parseFloat(data.longitude);
        this.gmapsService.getAddress(data.latitude, data.longitude).subscribe( address => {
          if( address && address.results) {
            this.address = address.results[0]['formatted_address'];
          }
        })
      }

    });

  }

  ngOnInit() {
  }

}
