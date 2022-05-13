import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {
  movie:any=[]
  horror:any=[]
    constructor(private movieService:MovieService, private router:Router) { }
  
    ngOnInit(): void {
      this.movieService.getAllMovie().subscribe(
        (data)=>{
  this.movie = data.findedMovie
  
  var myMovie = [];
  for (let i = 0; i < this.movie.length; i++) {
    if (this.movie[i].genre == "Horror") {
      myMovie.push(this.movie[i])
      this.horror = myMovie
     
      
    };
    
  }
    }
  )
    }
    film(id:number){
      
      this.router.navigate([`movie-detai/${id}`])
      
      
      
        }
  }
