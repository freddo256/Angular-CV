import { Component } from '@angular/core';
import { faEnvelope, faPhone, faGlobe, faUser, faBriefcase, faArchive, faRocket, faHeart, faBookOpen, faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const cv = require('./cv.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CV Ferre Vekemans';
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faArchive = faArchive;
  faRocket = faRocket;
  faHeart = faHeart;
  faLinkedinIn = faLinkedinIn; 
  faGithub = faGithub;
  faBookOpen = faBookOpen;
  faBook = faBook;
  cv = cv;
  filter = "All";
  getFilter(): string {
    return this.filter;
  }
  setFilter(value: string): void {
    this.filter = value;
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}