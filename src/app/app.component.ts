import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'porto';
  Year = new Date().getFullYear();

  //fill information
  FullName = 'Roesman Ridwan Raja';
  NickName = 'Ruzman R';
  BirthYear = 2001;
  Degree = 'Bachelor';
  Freelancing = 'Not Available';
  TelpNum = '+6281354000500';
  IGid = 'r.nlyone';
  DribbbleId = 'rnlyone';
  Profeciency = 'Web Designer, Graphic Designer';
  ProfilePic = 'img/foto.jpeg';
  City = 'Makassar';


  //aboutpage texts
  


  //autofilled information
  Age = this.Year-this.BirthYear;
  WALink = 'http://wa.me/'+this.TelpNum;
  IGLink = 'http://instagram.com/'+this.IGid;
  DribbbleLink = 'http://dribbble.com/'+this.DribbbleId;

  //propertybinding Switcher On/Off True = Hidden, False = Visible;
  ColorConf = true;

}
