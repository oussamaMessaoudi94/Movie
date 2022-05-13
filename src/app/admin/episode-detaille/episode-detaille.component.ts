import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'backend/services/episode/episode.service';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-episode-detaille',
  templateUrl: './episode-detaille.component.html',
  styleUrls: ['./episode-detaille.component.css']
})
export class EpisodeDetailleComponent implements OnInit {
id :any
ep: any=[]
serie :any=[]
movie:any=[]
  constructor(private episodeService : EpisodeService, private activatedRouter:ActivatedRoute, private serieService:SerieService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.episodeService.getepisodeById(this.id).subscribe(
      (data)=>{
this.ep = data.ep
      }
    )
this.serieService.getAllSerie().subscribe(
  (data)=>{
this.serie = data.findedSerie

var mymovie = [];
for (let i = 0; i < this.serie.length; i++) {
   if (this.serie[i]._id == this.ep.idSerie) {
     mymovie.push(this.serie[i])
     this.movie = mymovie
   }
  
}
  }
)
  }

}
