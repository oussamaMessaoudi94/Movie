import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SginupComponent } from './sginup/sginup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { BlogAdminComponent } from './admin/blog-admin/blog-admin.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { ActionAdminComponent } from './admin/action-admin/action-admin.component';
import { HorrorAdminComponent } from './admin/horror-admin/horror-admin.component';
import { RomanticAdminComponent } from './admin/romantic-admin/romantic-admin.component';
import { AnimeAdminComponent } from './admin/anime-admin/anime-admin.component';
import { SerieAdminComponent } from './admin/serie-admin/serie-admin.component';
import { MovieDetailleComponent } from './admin/movie-detaille/movie-detaille.component';
import { AddSerieComponent } from './admin/add-serie/add-serie.component';
import { SerieDetailleComponent } from './admin/serie-detaille/serie-detaille.component';
import { EpisodeDetailleComponent } from './admin/episode-detaille/episode-detaille.component';
import { ActionComponent } from './action/action.component';
import { HorrorComponent } from './horror/horror.component';
import { RomanticComponent } from './romantic/romantic.component';
import { AnimeComponent } from './anime/anime.component';
import { SerieComponent } from './serie/serie.component';
import { MovieDetaiComponent } from './movie-detai/movie-detai.component';
import { SerieDetaiComponent } from './serie-detai/serie-detai.component';
import { EpisodeDetaiComponent } from './episode-detai/episode-detai.component';
import { NavUserComponent } from './user/nav-user/nav-user.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { ActionUserComponent } from './user/action-user/action-user.component';
import { HorrorUserComponent } from './user/horror-user/horror-user.component';
import { RomanticUserComponent } from './user/romantic-user/romantic-user.component';
import { AnimeUserComponent } from './user/anime-user/anime-user.component';
import { SerieUserComponent } from './user/serie-user/serie-user.component';
import { MovieUserDetailleComponent } from './user/movie-user-detaille/movie-user-detaille.component';
import { SerieUserDetailleComponent } from './user/serie-user-detaille/serie-user-detaille.component';
import { EpisodeUserDetailleComponent } from './user/episode-user-detaille/episode-user-detaille.component';
import { BlogUserComponent } from './user/blog-user/blog-user.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ContactUserComponent } from './user/contact-user/contact-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SginupComponent,
    SigninComponent,
    NavAdminComponent,
    HomeAdminComponent,
    AddMovieComponent,
    BlogAdminComponent,
    ContactAdminComponent,
    ActionAdminComponent,
    HorrorAdminComponent,
    RomanticAdminComponent,
    AnimeAdminComponent,
    SerieAdminComponent,
    MovieDetailleComponent,
    AddSerieComponent,
    SerieDetailleComponent,
    EpisodeDetailleComponent,
    ActionComponent,
    HorrorComponent,
    RomanticComponent,
    AnimeComponent,
    SerieComponent,
    MovieDetaiComponent,
    SerieDetaiComponent,
    EpisodeDetaiComponent,
    NavUserComponent,
    HomeUserComponent,
    ActionUserComponent,
    HorrorUserComponent,
    RomanticUserComponent,
    AnimeUserComponent,
    SerieUserComponent,
    MovieUserDetailleComponent,
    SerieUserDetailleComponent,
    EpisodeUserDetailleComponent,
    BlogUserComponent,
    BlogComponent,
    ContactComponent,
    ContactUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
