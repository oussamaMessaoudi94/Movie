import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
episodeUrl = 'http://localhost:3000/episode'
  constructor(private httpClient:HttpClient) { }
  
  addEpisode(episode:any , video:File){
let formData = new FormData ();
formData.append('nameEpisode', episode.nameEpisode);
formData.append('dateAired', episode.dateAired);
formData.append('quality', episode.quality);
formData.append('score', episode.score);
formData.append('idSerie', episode.idSerie);
formData.append('video', video);


return this.httpClient.post<{message:any}>(this.episodeUrl, formData)
  }

  getAllEpisode(){
   return this.httpClient.get<{episode:any}>(this.episodeUrl)
  }

  getepisodeById(id: any){
    return this.httpClient.get<{ep: any}>(`${this.episodeUrl}/${id}`)
      }
}
