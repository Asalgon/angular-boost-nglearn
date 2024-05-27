import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrl: './navbar-title.component.scss',
})
export class NavbarTitleComponent implements OnInit {
  constructor(){}

  @Input()
  getTitle: string = "";
  @Input()
  getIconName: string = "";
  @Input()
  getRedirect: string = "";

  ngOnInit(): void {
   //
  }

}
