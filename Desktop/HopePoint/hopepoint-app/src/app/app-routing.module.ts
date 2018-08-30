import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MensMinistryComponent } from './components/mens-ministry/mens-ministry.component';
import { LadiesMinistryComponent } from './components/ladies-ministry/ladies-ministry.component';
import { CruisersMinistryComponent } from './components/cruisers-ministry/cruisers-ministry.component';
import { BrickPatioComponent } from './components/brick-patio/brick-patio.component';
import { TableComponent } from './components/table/table.component';
import { AboutComponent } from './components/about/about.component';
import { BahamasComponent } from './components/bahamas/bahamas.component';
import { HouseOfPrayerComponent } from './components/house-of-prayer/house-of-prayer.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'events', component: EventsComponent,
    data: {title: 'Hope Point Events', metaDescription: 'Hope Point Nazarene community events. We look forward to seeing you soon!'}
  },
  { path: 'events/:id', component: EventComponent },
  {path: 'sermons', component: SermonsComponent},
  {path: 'ministries/mens', component: MensMinistryComponent},
  {path: 'ministries/ladies', component: LadiesMinistryComponent},
  {path: 'ministries/cruisers', component: CruisersMinistryComponent},
  {path: 'patio', component: BrickPatioComponent},
  {path: 'table', component: TableComponent},
  {path: 'about', component: AboutComponent},
  {path: 'bahamas', component: BahamasComponent},
  // TODO: replace bahamas with outreach
  {path: 'prayer', component: HouseOfPrayerComponent},
  {path: 'ministries', component: MinistriesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { 
  
}
