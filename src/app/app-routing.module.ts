import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { ActionAdminComponent } from './admin/action-admin/action-admin.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { AddSerieComponent } from './admin/add-serie/add-serie.component';
import { AnimeAdminComponent } from './admin/anime-admin/anime-admin.component';
import { BlogAdminComponent } from './admin/blog-admin/blog-admin.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { EpisodeDetailleComponent } from './admin/episode-detaille/episode-detaille.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HorrorAdminComponent } from './admin/horror-admin/horror-admin.component';
import { MovieDetailleComponent } from './admin/movie-detaille/movie-detaille.component';
import { RomanticAdminComponent } from './admin/romantic-admin/romantic-admin.component';
import { SerieAdminComponent } from './admin/serie-admin/serie-admin.component';
import { SerieDetailleComponent } from './admin/serie-detaille/serie-detaille.component';
import { AnimeComponent } from './anime/anime.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EpisodeDetaiComponent } from './episode-detai/episode-detai.component';
import { HomeComponent } from './home/home.component';
import { HorrorComponent } from './horror/horror.component';
import { MovieDetaiComponent } from './movie-detai/movie-detai.component';
import { RomanticComponent } from './romantic/romantic.component';
import { SerieDetaiComponent } from './serie-detai/serie-detai.component';
import { SerieComponent } from './serie/serie.component';
import { SginupComponent } from './sginup/sginup.component';
import { SigninComponent } from './signin/signin.component';
import { ActionUserComponent } from './user/action-user/action-user.component';
import { AnimeUserComponent } from './user/anime-user/anime-user.component';
import { BlogUserComponent } from './user/blog-user/blog-user.component';
import { ContactUserComponent } from './user/contact-user/contact-user.component';
import { EpisodeUserDetailleComponent } from './user/episode-user-detaille/episode-user-detaille.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { HorrorUserComponent } from './user/horror-user/horror-user.component';
import { MovieUserDetailleComponent } from './user/movie-user-detaille/movie-user-detaille.component';
import { RomanticUserComponent } from './user/romantic-user/romantic-user.component';
import { SerieUserDetailleComponent } from './user/serie-user-detaille/serie-user-detaille.component';
import { SerieUserComponent } from './user/serie-user/serie-user.component';

const routes: Routes = [
  {path :"", component: HomeComponent},
  {path :"signup", component: SginupComponent},
  {path :"signin", component: SigninComponent},
  {path :"home-admin", component: HomeAdminComponent},
  {path :"home-user", component: HomeUserComponent},
  {path :"add-movie", component: AddMovieComponent},
  {path :"blog-admin", component: BlogAdminComponent},
  {path :"blog-user", component: BlogUserComponent},
  {path :"blog", component: BlogComponent},
  {path :"contact-admin", component: ContactAdminComponent},
  {path :"contact-user", component: ContactUserComponent},
  {path :"contact", component: ContactComponent},
  {path :"horror-admin", component: HorrorAdminComponent},
  {path :"horror-user", component: HorrorUserComponent},
  {path :"horror", component: HorrorComponent},
  {path :"romantic-admin", component: RomanticAdminComponent},
  {path :"romantic-user", component: RomanticUserComponent},
  {path :"romantic", component: RomanticComponent},
  {path :"anime-admin", component: AnimeAdminComponent},
  {path :"anime-user", component: AnimeUserComponent},
  {path :"anime", component: AnimeComponent},
  {path :"serie-admin", component: SerieAdminComponent},
  {path :"serie-user", component: SerieUserComponent},
  {path :"serie", component: SerieComponent},
  {path :"action-admin", component: ActionAdminComponent},
  {path :"action-user", component: ActionUserComponent},
  {path :"action", component: ActionComponent},
  {path :"movie-detai", component: MovieDetaiComponent},
  {path :"movie-detai/:id", component: MovieDetaiComponent},
  {path :"movie-detaille", component: MovieDetailleComponent},
  {path :"movie-detaille/:id", component: MovieDetailleComponent},
  {path :"movie-user-detaille", component: MovieUserDetailleComponent},
  {path :"movie-user-detaille/:id", component: MovieUserDetailleComponent},
  {path :"add-serie", component: AddSerieComponent},
  {path :"serie-detaille", component: SerieDetailleComponent},
  {path :"serie-detaille/:id", component: SerieDetailleComponent},
  {path :"serie-user-detaille", component: SerieUserDetailleComponent},
  {path :"serie-user-detaille/:id", component: SerieUserDetailleComponent},
  {path :"serie-detai", component: SerieDetaiComponent},
  {path :"serie-detai/:id", component: SerieDetaiComponent},
  {path :"episode-detaille", component: EpisodeDetailleComponent},
  {path :"episode-detaille/:id", component: EpisodeDetailleComponent},
  {path :"episode-user-detaille", component: EpisodeUserDetailleComponent},
  {path :"episode-user-detaille/:id", component: EpisodeUserDetailleComponent},
  {path :"episode-detai", component: EpisodeDetaiComponent},
  {path :"episode-detai/:id", component: EpisodeDetaiComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
