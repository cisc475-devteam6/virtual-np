import { Component, OnInit } from '@angular/core';
import { DropdownSelectComponent } from 'src/app/components/dropdown-select/dropdown-select.component';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-user-data-edit-page',
  templateUrl: './user-data-edit-page.component.html',
  styleUrls: ['./user-data-edit-page.component.scss']
})
export class UserDataEditPageComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
