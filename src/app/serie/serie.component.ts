import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie : any=[]
  constructor(private serieService:SerieService, private router:Router) { }

  ngOnInit(): void {
    this.serieService.getAllSerie().subscribe(
      (data)=>{
this.serie = data.findedSerie
      }
    )
  }

  film(id:number){
this.router.navigate([`serie-detai/${id}`])
  }
}

