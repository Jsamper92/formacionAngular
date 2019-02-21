import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-results-details',
  templateUrl: './github-results-details.component.html',
  styleUrls: ['./github-results-details.component.css']
})
export class GithubResultsDetailsComponent implements OnInit {
  @Input() datos: String;
  constructor() { }

  ngOnInit() {
  }

}
