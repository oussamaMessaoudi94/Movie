import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  movie:any=[]
  movies:any=[]
  constructor(private movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(
      (data)=>{
this.movie = data.findedMovie

var myMovie = [];
for (let i = 0; i < this.movie.length; i++) {
  if (this.movie[i].genre == "Action") {
    myMovie.push(this.movie[i])
    this.movies = myMovie
   
    
  };
  
}
  }
)
  }

  film(id:number){
    
this.router.navigate([`movie-detai/${id}`])



  }
}
