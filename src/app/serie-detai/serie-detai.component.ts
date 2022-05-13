import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeService } from 'backend/services/episode/episode.service';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-serie-detai',
  templateUrl: './serie-detai.component.html',
  styleUrls: ['./serie-detai.component.css']
})
export class SerieDetaiComponent implements OnInit {
  id: any
  film :any=[]
  serie : any=[]

  videoPreview:any
  imagePreview:any
  episode:any=[]
  ep :any=[]
    constructor(private serieService:SerieService, private activatedRouter:ActivatedRoute,  private episodeService:EpisodeService,private router : Router) { }
  
    ngOnInit(): void {
      this.id = this.activatedRouter.snapshot.paramMap.get('id')
      this.serieService.getSerieById(this.id).subscribe(
        (data)=>{
  this.film = data.serie
        }
      )
  this.episodeService.getAllEpisode().subscribe(
    (data)=>{
  this.episode = data.episode
  
  var mySerie = [];
  for (let i = 0; i < this.episode.length; i++) {
    if (this.episode[i].idSerie == this.film._id) {
      mySerie.push(this.episode[i])
  this.ep = mySerie
  console.log('here', this.ep);
  
    }
    
  }
    }
  )
  }

  epis(id:number){
    this.router.navigate([`episode-detai/${id}`])
      }
}
