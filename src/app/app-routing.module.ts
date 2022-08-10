import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginGuard } from './Guards/login.guard';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PeopleComponent } from './Components/people/people.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvComponent } from './Components/tv/tv.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { PeopleDetailsComponent } from './Components/people-details/people-details.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "movies", canActivate: [AuthGuard], component: MoviesComponent },
  { path: "movieDetails/:id", canActivate: [AuthGuard], component: MovieDetailsComponent },
  {path : "tv" , canActivate:[AuthGuard] , component: TvComponent} ,
  {path : "tvDetails/:id" , canActivate:[AuthGuard] , component: TvDetailsComponent} ,
  { path: "people", canActivate: [AuthGuard], component: PeopleComponent },
  {path : "peopleDetails/:id" , canActivate:[AuthGuard] , component: PeopleDetailsComponent} ,
  {path : "login" , canActivate:[LoginGuard] , component: LoginComponent} ,
  {path : "register" , canActivate:[LoginGuard] , component: RegisterComponent} ,
  {path : "**" , component: NotFoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
