import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-serie-user',
  templateUrl: './serie-user.component.html',
  styleUrls: ['./serie-user.component.css']
})
export class SerieUserComponent implements OnInit {
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
this.router.navigate([`serie-user-detaille/${id}`])
  }
}

