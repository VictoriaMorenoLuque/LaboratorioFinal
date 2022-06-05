import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Socio } from '../../interfaces/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})

export class SocioComponent implements OnInit {

  do: String = "insert"
  position: any = 1

  contacts: Array<Socio> = []

  contact: Socio = {
        name: "",
        surnames: "",
        member: 1,
        dni: "",
        phone: 0,
        gender: ""
  }

  genders = [
    { id: 'Masculino', value: 'Masculino' },
    { id: 'Femenino', value: 'Femenino' },
  ];

  constructor() { }

  ngOnInit(): void {}

  add( form : NgForm ){
    if( this.do === 'insert' ){

      
      let name = this.contact.name;
      let surnames = this.contact.surnames;
      // let member = this.position++;
      let dni = this.contact.dni;
      let phone = this.contact.phone;
      let gender = this.contact.gender;

      if(this.contact.name.length>=3 && this.contact.surnames.length>=3 && this.contact.dni.length==9){
        let member = this.position++;
        this.contacts.push( this.contact )

        this.contact = {
          name: name,
          surnames: surnames,
          member: member+1,
          dni: dni,
          phone: phone,
          gender: gender
        }
      }
      

      // this.contact = {
      //   name: name,
      //   surnames: surnames,
      //   member: member+1,
      //   dni: dni,
      //   phone: phone,
      //   gender: gender
      // }

    }else{
      this.contacts[ this.position ] = this.contact
      this.do = 'insert'
    }
    form.resetForm()
  }

  delete( delPosition : number )    : void {
    this.contacts.splice( delPosition , 1 )
  }
  update( upPosition : number ) : void {
    this.contact  = this.contacts[ upPosition ];
    this.do   = 'update'
    this.position = upPosition
  }
}
