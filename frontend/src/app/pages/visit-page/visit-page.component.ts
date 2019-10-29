import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.scss']
})
export class VisitPageComponent implements OnInit {

  constructor() {
    window.onclick = function(event: any) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i: number;
        for(i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
   }

  ngOnInit() {
  }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}