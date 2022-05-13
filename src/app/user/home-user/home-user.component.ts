import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'backend/services/movies/movie.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  movie:any=[]
  movies:any=[]
  horror:any=[]
  romantic:any=[]
  anime:any=[]
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
      console.log('here', this.movies);
      
    };
    
  }
  var myHorror = [];
  for (let i = 0; i < this.movie.length; i++) {
    if (this.movie[i].genre == "Horror") {
      myHorror.push(this.movie[i])
      this.horror = myHorror
    }
    
  }
  var myRomantic = [];
  for (let i = 0; i < this.movie.length; i++) {
    if (this.movie[i].genre == "Romantic") {
      myRomantic.push(this.movie[i])
      this.romantic = myRomantic
    }
    
  }
  var myAnime = [];
  for (let i = 0; i < this.movie.length; i++) {
    if (this.movie[i].genre == "Anime") {
      myAnime.push(this.movie[i])
      this.anime = myAnime
    }
    
  }
        }
        
      )
    }
    film(id:number){
      
      this.router.navigate([`movie-user-detaille/${id}`])
      
      
      
        }
  }
