import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes,RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const appRoutes:Routes=[
{path:'',component:AboutMeComponent},
{path:'about-me',component:AboutMeComponent},
{path:'workexperience',component:WorkexperienceComponent},
{path:'educationdetails',component:EducationdetailsComponent},
{path:'skills',component:SkillsComponent},
{path:'projects',component:ProjectsComponent},
{path:'hobbies',component:HobbiesComponent},
{path:'achievements',component:AchievementsComponent},
{path:'contact-me',component:ContactMeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkexperienceComponent,
    EducationdetailsComponent,
    SkillsComponent,
    ProjectsComponent,
    HobbiesComponent,
    AchievementsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
