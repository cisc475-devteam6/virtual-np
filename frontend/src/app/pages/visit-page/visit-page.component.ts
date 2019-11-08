import { Component, OnInit } from '@angular/core';
import { DropdownSelectComponent } from 'src/app/components/dropdown-select/dropdown-select.component';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.scss']
})
export class VisitPageComponent implements OnInit {

  constructor(public dropdown: DropdownSelectComponent, public myAPISvc: SymptomsAPIService) {
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

  refreshOptions() {
    this.dropdown.bodyParts = this.myAPISvc.getSymptoms();
    return true;
  }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}