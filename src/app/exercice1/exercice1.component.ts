import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  nom:string;

  constructor() {
	this.nom = `Bonjour`;
  }
  
  getValueNom(nom:string)
  {
	  this.nom = nom;
  }
  ngOnInit() {
  }

}
