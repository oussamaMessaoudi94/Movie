import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-romantic',
  templateUrl: './romantic.component.html',
  styleUrls: ['./romantic.component.css']
})
export class RomanticComponent implements OnInit {
  movie:any=[]
  romantic:any=[]
    constructor(private movieService:MovieService, private router:Router) { }
  
    ngOnInit(): void {
      this.movieService.getAllMovie().subscribe(
        (data)=>{
  this.movie = data.findedMovie
  
  var myMovie = [];
  for (let i = 0; i < this.movie.length; i++) {
    if (this.movie[i].genre == "Romantic") {
      myMovie.push(this.movie[i])
      this.romantic = myMovie
     
      
    };
    
  }
    }
  )
    }
    film(id:number){
      
      this.router.navigate([`movie-detai/${id}`])
      
      
      
        }
  }