import { Component, OnInit } from "@angular/core";
import { GithubService } from "../github.service";
@Component({
  selector: "app-peticion-github",
  templateUrl: "./peticion-github.component.html",
  styleUrls: ["./peticion-github.component.css"],
  providers: [GithubService]
})
export class PeticionGithubComponent implements OnInit {
  public peticionGithub: Array<Object>;
  constructor(private peticion: GithubService) {
    this.peticionGithub = []
    this.peticion.peticion().subscribe(resul => {
      console.log(resul)
      this.peticionGithub.push(resul);
      console.log(this.peticionGithub)
    });
  }
  ngOnInit() {
    console.log(this.peticionGithub)
  }
}
