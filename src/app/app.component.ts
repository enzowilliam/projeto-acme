import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Teste';

  userData = {
    email: 'enzo@',
    password: '123',
    role: 'admin',
  };

  title = 'testeLamppIt';
}
