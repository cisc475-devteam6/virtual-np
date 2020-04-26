import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}  

  ngOnInit() {
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
