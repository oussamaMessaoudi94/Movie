import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  movie:any=[]
  anime:any=[]
  constructor(private movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(
      (data)=>{
this.movie = data.findedMovie

var myMovie = [];
for (let i = 0; i < this.movie.length; i++) {
  if (this.movie[i].genre == "Anime") {
    myMovie.push(this.movie[i])
    this.anime = myMovie
   
    
  };
  
}
  }
)
  }
  film(id:number){
    
    this.router.navigate([`movie-detai/${id}`])
    
    
    
      }
}
