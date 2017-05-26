import { Injectable } from '@angular/core';

@Injectable()
export class LanguageList {
  getLanguagelist = () => [
    { src: '../../assets/images/DE.png', Name: 'DE' },
    { src: '../../assets/images/UK.png', Name: 'EN' },
    { src: '../../assets/images/FR.png', Name: 'FR' }
  ];
}
