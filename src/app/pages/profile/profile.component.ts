import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { environment } from 'src/environments/environment';

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
  filters: any;
  loading: boolean = false;

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
    let url = `${environment.api_github_user}/${this.username}`
    this.service.sendGetRequest(url).subscribe(res => {
      this.profile = res
      this.loading = true;
    }, error => {
      this.loading = true;
      this.router.navigate(['error'])
    })
  }

  getRepos(filter?: any) {
    if(filter == 'star'){
       this.repos = this.repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
       return
    }
    let url: string = `${environment.api_github_user}/${this.username}/repos`;
    if(filter != 'star' && filter){
       url = `${environment.api_github_user}/${this.username}/repos${filter}`
       this.service.sendGetRequest(url).subscribe(res => {
        this.repos = res
      }, error => {
        this.router.navigate([`error/:${error.error.message}`])
      })
    }
  }

  getRepoDetail(name: string) {
    let url = `${environment.api_github_repos}/${this.username}/${name}`
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
