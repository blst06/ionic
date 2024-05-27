import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  options: any[] = [];
 
  constructor() { }

  ngOnInit() {
    this.options = [
      {title: 'Editar', url: '/profile/edit', icon: 'brush-outline', color: 'primary'},
      {title: 'Config', url: '/profile', icon: 'options-outline', color: 'primary'},
      {title: 'Notificações', url: '/profile', icon: 'notifications-outline', color: 'primary'},
      {title: 'Sobre', url: '/profile', icon: 'information-circle-outline', color: 'primary'},
      {title: 'Sair', url: '/profile', icon: 'log-out-outline', color: 'secondary', background: 'primary'}
    ];
  }
  getRows() {
    const rows = [];
    for (let i = 0; i < this.options.length; i += 3) {
      rows.push(this.options.slice(i, i + 3));
    }
    return rows;
  }
}
