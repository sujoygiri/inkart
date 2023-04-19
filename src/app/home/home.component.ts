import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: [] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`https://dummyjson.com/posts`).subscribe({
      next: (value:any) => {
        this.posts = value.posts;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
