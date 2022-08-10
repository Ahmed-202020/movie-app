import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MoviesComponent } from './Components/movies/movies.component';
import { TvComponent } from './Components/tv/tv.component';
import { PeopleComponent } from './Components/people/people.component';
import { WatchPipe } from './Pipes/watch.pipe';
import { SeemorePipe } from './Pipes/seemore.pipe';
import { SearchPipe } from './Pipes/moviesSearch.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TvSearchPipe } from './Pipes/tvSearch.pipe';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { PeopleDetailsComponent } from './Components/people-details/people-details.component';
import { PeopleSearchPipe } from './Pipes/peopleSearch.pipe';
import { DataLengthPipe } from './Pipes/data-length.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    WatchPipe,
    SeemorePipe,
    SearchPipe,
    TvSearchPipe,
    TvDetailsComponent,
    PeopleDetailsComponent,
    PeopleSearchPipe,
    DataLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
