import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  standalone: false,
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss'
})
export class ResourceApiComponent {

  userList = resource({
    loader:() => {
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json() as Promise<any[]>)
    }
  })

  reloadData() {
    this.userList.reload();
  }

}
