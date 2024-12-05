import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {ProfileComponent} from '../../components/dashboard/profile/profile.component';
import {StatsComponent} from '../../components/dashboard/stats/stats.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    StatsComponent,
    RouterLink, CommonModule, RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
