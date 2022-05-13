import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-movie-detaille',
  templateUrl: './movie-detaille.component.html',
  styleUrls: ['./movie-detaille.component.css']
})
export class MovieDetailleComponent implements OnInit {
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
