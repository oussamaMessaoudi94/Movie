import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeService } from 'backend/services/episode/episode.service';
import { SerieService } from 'backend/services/serie/serie.service';

@Component({
  selector: 'app-serie-detaille',
  templateUrl: './serie-detaille.component.html',
  styleUrls: ['./serie-detaille.component.css']
})
export class SerieDetailleComponent implements OnInit {
id: any
film :any=[]
serie : any=[]
addSerieForm!:FormGroup
videoPreview:any
imagePreview:any
episode:any=[]
ep :any=[]
  constructor(private serieService:SerieService, private activatedRouter:ActivatedRoute, private fb:FormBuilder, private episodeService:EpisodeService,private router : Router) { }

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



this.addSerieForm = this.fb.group({
  nameEpisode : [''],
  dateAired : [''],
  quality : [''],
  score : [''],
  video : [''],

})

  }

  addEpisode(){

    let x = {nameEpisode:'', dateAired:'', quality:'', score:'', video:'', idSerie:''}
    x.nameEpisode = this.addSerieForm.value.nameEpisode,
    x.dateAired = this.addSerieForm.value.dateAired,
    x.quality = this.addSerieForm.value.quality,
    x.score = this.addSerieForm.value.score,
    x.video = this.addSerieForm.value.video,
    x.idSerie = this.film._id,


this.episodeService.addEpisode(x,this.addSerieForm.value.video).subscribe(
  (data)=>{

  }
)

  }

  onVideoSelected(event: any) {
    let file: any = event.target.files[0];
    this.addSerieForm.patchValue({ video: file });
    this.addSerieForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.videoPreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  epis(id:number){
this.router.navigate([`episode-detaille/${id}`])
  }
}
