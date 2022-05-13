import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-serie-admin',
  templateUrl: './serie-admin.component.html',
  styleUrls: ['./serie-admin.component.css']
})
export class SerieAdminComponent implements OnInit {
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
this.router.navigate([`serie-detaille/${id}`])
  }
}
