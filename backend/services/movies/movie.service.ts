import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
movieUrl  = 'http://localhost:3000/movie'
  constructor(private httpClient: HttpClient) { }

  addMovie(movie: any, vid:File, img:File){
    let formData = new FormData();
    formData.append('nameFilm', movie.nameFilm);
    formData.append('dateAired', movie.dateAired);
    formData.append('genre', movie.genre);
    formData.append('score', movie.score);
    formData.append('duration', movie.duration);
    formData.append('quality', movie.quality);
    formData.append('description', movie.description);
    formData.append('img', img);
    formData.append('vid',vid);
    return this.httpClient.post<{message:String}>(this.movieUrl, formData);
  }

  getAllMovie(){
    return this.httpClient.get<{findedMovie:any}>(this.movieUrl)
  }

  getmovieById(id: any){
    return this.httpClient.get<{film: any}>(`${this.movieUrl}/${id}`)
      }
}
