import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {
	public trending: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  this.trending = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
