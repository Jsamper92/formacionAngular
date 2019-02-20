import { Component, OnInit } from "@angular/core";
import { GithubService } from '../github.service';

@Component({
  selector: "app-github-results",
  templateUrl: "./github-results.component.html",
  styleUrls: ["./github-results.component.css"],
  providers: [GithubService]
})
export class GithubResultsComponent implements OnInit {
  public resultList: Array<Object>;

  constructor(private peticion:GithubService) {
    this.peticion.peticion().subscribe(resul => console.log(resul))
    this.resultList = [
      {
        title: "card one",
        avatarUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description:"card one",
        repositoryUrl:"https://github.com/angular/material2",
        likes:3
      },
      {
        title: "card two",
        avatarUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description:"card two",
        repositoryUrl:"https://github.com/angular/material2",
        likes:6
      },
      {
        title: "card three",
        avatarUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description:"card three",
        repositoryUrl:"https://github.com/angular/material2",
        likes:1
      }
    ];


  }



  ngOnInit() {
    console.log();
  }
}
