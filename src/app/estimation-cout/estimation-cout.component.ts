import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnoncesServiceService } from '../service/annonces-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {

 
  annonce : Annonce = new Annonce();
  estimationMessage!: string;


  constructor(private service: AnnoncesServiceService,private route :ActivatedRoute,private router:Router){}


  ngOnInit(): void {
    
  }


  saveEstimation() {
    const position = this.annonce.position;
    const numberOfCharacters = this.annonce.description.length;
  
    let cost;
  
    if (position === 'haut') {
      cost = numberOfCharacters <= 30 ? 10 : 20;
    } else if (position === 'bas') {
      cost = numberOfCharacters <= 30 ? 5 : 15;
    }
  
    // Utilisez une seule ligne pour définir le message d'estimation
    this.estimationMessage = `le cout de votre article est a :  = ${position === 'haut' ? (numberOfCharacters <= 30 ? 10 : 20) : (numberOfCharacters <= 30 ? 5 : 15)} dt `;

  
    this.service.addEstimation(this.annonce).subscribe(
      data => {
        console.log(data);
        alert('Estimation Successfully added');
        this.router.navigate(['/estimation']);
      },
      error => {
        console.log(error);
        alert('Error occurred during estimation');
      }
    );
  }

onSubmit() {
  console.log(this.annonce);
  this.saveEstimation();
}}

