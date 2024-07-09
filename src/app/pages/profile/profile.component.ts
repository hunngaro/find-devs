import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  username: any;
  profile: any;
  repos!: Array<any>;
  expandedIndex: number | null = null;
  repoDetail!: any;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username')
    })
  }

  ngOnInit(): void {
    this.getProfile()
    this.getRepos()
  }

  getProfile() {
    let url = `https://api.github.com/users/${this.username}`
    this.service.sendGetRequest(url).subscribe(res => {
      this.profile = res
    }, error => {
      this.router.navigate(['error'])
    })
  }

  getRepos() {
    let url = `https://api.github.com/users/${this.username}/repos`
    this.service.sendGetRequest(url).subscribe(res => {
      this.repos = res
    }, error => {
      this.router.navigate([`error/:${error.error.message}`])
    })
  }

  getRepoDetail(name: string) {
    let url = `https://api.github.com/repos/${this.username}/${name}`
    this.service.sendGetRequest(url).subscribe(res => {
      this.repoDetail = res;
    }, error => {
      this.router.navigate([`error/:${error.error.message}`])
    })
  }

  toggleDetails(index: number): void {
    this.repoDetail = null;
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

}
