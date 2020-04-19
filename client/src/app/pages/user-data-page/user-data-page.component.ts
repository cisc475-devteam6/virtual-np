import { Component, OnInit } from '@angular/core';
import { DropdownSelectComponent } from 'src/app/components/dropdown-select/dropdown-select.component';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.scss']
})
export class UserDataPageComponent implements OnInit {

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
