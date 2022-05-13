import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-movie-detai',
  templateUrl: './movie-detai.component.html',
  styleUrls: ['./movie-detai.component.css']
})
export class MovieDetaiComponent implements OnInit {
  id: any;
  film:any=[]
  constructor(private movieService:MovieService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.movieService.getmovieById(this.id).subscribe(
      (data)=>{
this.film = data.film

console.log(this.film.vid);

      }
    )
    
  }

}
