import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../service/annonces-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../annonce';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {


  constructor(private service: AnnoncesServiceService,private route :ActivatedRoute,private router:Router){}
  ngOnInit(): void {
  }

}
