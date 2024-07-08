import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../service/annonces-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../annonce';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {

  constructor(private service: AnnoncesServiceService,private route :ActivatedRoute,private router:Router){}
  
  listAnnonce:Annonce[];
  ngOnInit(): void {
    this.service.getAnnonces().subscribe((data: Annonce[])=>this.listAnnonce=data)

  }

}
