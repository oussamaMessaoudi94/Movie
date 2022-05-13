import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-horror-user',
  templateUrl: './horror-user.component.html',
  styleUrls: ['./horror-user.component.css']
})
export class HorrorUserComponent implements OnInit {
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
      
      this.router.navigate([`movie-user-detaille/${id}`])
      
      
      
        }
  }
