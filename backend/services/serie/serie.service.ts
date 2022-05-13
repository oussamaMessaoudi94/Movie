import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
serieUrl = 'http://localhost:3000/serie'
  constructor(private httpClient:HttpClient) { }

  addSerie(serie:any, img:File){
let formData = new FormData();
formData.append('nameFilm', serie.nameFilm),
formData.append('dateAired', serie.dateAired),
formData.append('genre', serie.genre),
formData.append('description', serie.description),
formData.append('img', img);
return this.httpClient.post<{message:any}>(this.serieUrl, formData)
  }

  getAllSerie(){
    return this.httpClient.get<{findedSerie:any}>(this.serieUrl)
  }

  getSerieById(id:any){
return this.httpClient.get<{serie:any}>(`${this.serieUrl}/${id}`)

  }
}
