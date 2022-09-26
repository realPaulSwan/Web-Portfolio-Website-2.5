import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {AppComponent} from './AppComponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TypeFilterComponent } from './projects/type-filter/type-filter.component';
import { ProjectSearchComponent } from './projects/type-filter/project-search/project-search.component';
import { HomeComponent } from './home/home.component';
import { DisplayCardsComponent } from './home/display-cards/display-cards.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './projects/project-list/project-item/project-details/project-details.component';
import { HomeTextComponent } from './home/home-text/home-text.component';

import { ProjectDetailsDataComponent } from './projects/project-list/project-item/project-details/project-details-data/project-details-data.component';

import { ProjectCarouselComponent } from './projects/project-list/project-item/project-details/project-details-data/project-carousel/project-carousel.component';

//import { NgxCaptchaModule} from "ngx-captcha";
import { RecaptchaModule } from "ng-recaptcha";
import { DTCWebProjectRedirectComponent } from './redirects/dtcweb-project-redirect/dtcweb-project-redirect.component'

@NgModule({
  declarations: [AppComponent, ProjectsComponent, TopNavBarComponent, TypeFilterComponent, ProjectSearchComponent, HomeComponent, DisplayCardsComponent, ProjectListComponent, ProjectItemComponent, ContactComponent, ProjectDetailsComponent, HomeTextComponent, ProjectDetailsDataComponent, ProjectCarouselComponent, DTCWebProjectRedirectComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    //NgxCaptchaModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
