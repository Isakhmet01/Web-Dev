// import { Component, input } from '@angular/core';
//
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   template: `<p>The user's name is {{ name() }}</p>`,
// })
// export class User {
//   readonly name = input<string>();
// }


// import {Component} from '@angular/core';
// import {NgOptimizedImage} from '@angular/common';
//
// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>
//     <ul>
//       <li>
//         Static Image:
//         <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
//       </li>
//       <li>
//         Dynamic Image:
//         <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
//       </li>
//     </ul>
//   `,
//   imports: [NgOptimizedImage],
// })
// export class User {
//   logoUrl = '/logo.svg';
//   logoAlt = 'Angular logo';
//   username = 'youngTech';
// }


// import {Component} from '@angular/core';
// import {FormsModule} from '@angular/forms';
//
// @Component({
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
//     <label for="framework">
//       Favorite Framework:
//       <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
//     </label>
//   `,
//   imports: [FormsModule],
// })
// export class User {
//   favoriteFramework = '';
//   username = 'youngTech';
// }



