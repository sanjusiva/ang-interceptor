import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '';
  constructor(
    private service: ServiceService,
    private router: Router
  ) {}
  authenticate() {
    this.service.setToken().subscribe((res: any) => {
      console.log('response: ', res.msg.greet);
      this.title = res.msg.greet;
    });
  }
  navigate() {
    this.router.navigate(['/table'])
  }
}
