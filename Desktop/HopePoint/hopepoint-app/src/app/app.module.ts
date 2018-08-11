import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { SermonsService } from './services/sermons-service.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MensMinistryComponent } from './components/mens-ministry/mens-ministry.component';
import { LadiesMinistryComponent } from './components/ladies-ministry/ladies-ministry.component';
import { BrickPatioComponent } from './components/brick-patio/brick-patio.component';
import { NavbarMinistryModalComponent } from './components/navbar-ministry-modal/navbar-ministry-modal.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BahamasComponent } from './components/bahamas/bahamas.component';
import { HouseOfPrayerComponent } from './components/house-of-prayer/house-of-prayer.component';
import { MinistriesComponent } from './components/ministries/ministries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EventsComponent,
    SermonsComponent,
    NotFoundComponent,
    MensMinistryComponent,
    LadiesMinistryComponent,
    BrickPatioComponent,
    NavbarMinistryModalComponent,
    FilterPipePipe,
    TableComponent,
    FooterComponent,
    AboutComponent,
    BahamasComponent,
    HouseOfPrayerComponent,
    MinistriesComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SermonsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
