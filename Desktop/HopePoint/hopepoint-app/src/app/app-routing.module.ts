import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MensMinistryComponent } from './components/mens-ministry/mens-ministry.component';
import { LadiesMinistryComponent } from './components/ladies-ministry/ladies-ministry.component';
import { BrickPatioComponent } from './components/brick-patio/brick-patio.component';
import { TableComponent } from './components/table/table.component';
import { AboutComponent } from './components/about/about.component';
import { BahamasComponent } from './components/bahamas/bahamas.component';
import { HouseOfPrayerComponent } from './components/house-of-prayer/house-of-prayer.component';
import { MinistriesComponent } from './components/ministries/ministries.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sermons', component: SermonsComponent},
  {path: 'mens', component: MensMinistryComponent},
  {path: 'ladies', component: LadiesMinistryComponent},
  {path: 'patio', component: BrickPatioComponent},
  {path: 'table', component: TableComponent},
  {path: 'about', component: AboutComponent},
  {path: 'bahamas', component: BahamasComponent},
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
export class AppRoutingModule { }
