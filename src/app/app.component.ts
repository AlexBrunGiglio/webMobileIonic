/* eslint-disable max-len */
import { Component } from '@angular/core';
import { languageKey } from '../environments/constant';
import { Type } from './home/tab1.page';

export interface MainDataList {
  name: string;
  order: number;
  code: string;
  values: Type[];
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.init();
  }

  init() {
    const languageData: Type[] = [
      {
        name: 'Angular',
        order: 1,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
      },
      {
        name: 'React',
        order: 2,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      },
      {
        name: 'Ionic',
        order: 3,
        imgUrl: 'https://ionicframework.com/img/meta/logo.png'
      },
      {
        name: 'Nestjs',
        order: 4,
        imgUrl: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDI1OTU4NzA0MWM1YWI3OWYyNGNiMWUzNDFmMGEzNz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.WGSTeMkmlKyhMVynI4jhqaJ3JjH7-1FJs9Imqs5FY0U'
      },
      {
        name: 'NativeScript',
        order: 5,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png'
      },
      {
        name: 'Vuejs',
        order: 6,
        imgUrl: 'data:image/png;base64,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'
      },
      {
        name: 'Python',
        order: 7,
        imgUrl: 'https://wiesmann.codiferes.net/wordpress/wp-content/uploads/python_logo1.png'
      },
      {
        name: 'C',
        order: 8,
        imgUrl: 'data:image/png;base64,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'
      },
      {
        name: 'Ruby',
        order: 9,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png'
      },
    ];
    const phoneData: Type[] = [
      {
        name: 'Apple',
        order: 1,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png'
      },
      {
        name: 'Samsung',
        order: 2,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Samsung_logo_blue.png/1200px-Samsung_logo_blue.png'
      },
      {
        name: 'OnePlus',
        order: 3,
        imgUrl: 'https://www.mobiking.be/wp-content/uploads/2020/05/oneplus-logo.png'
      },
      {
        name: 'Huawei',
        order: 4,
        imgUrl: 'http://assets.stickpng.com/images/58ac4d880aaa10546adf2711.png'
      },
      {
        name: 'Oppo',
        order: 5,
        imgUrl: 'https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png'
      },
      {
        name: 'Blackberry',
        order: 6,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1f/BlackBerry_%28logo%29.svg/1200px-BlackBerry_%28logo%29.svg.png'
      },
    ];
    const data: MainDataList[] = [
      {
        name: 'Language',
        order: 1,
        code: 'languages',
        values: languageData,
        description: 'Mon top des langages de programmation.'
      },
      {
        name: 'Phone',
        order: 1,
        code: 'phones',
        values: phoneData,
        description: 'Mon top des marques de constructeurs de t??l??phones.'
      },
    ];
    if (!localStorage.getItem(languageKey)) {
      localStorage.setItem(languageKey, JSON.stringify(data));
    }
  }
}
