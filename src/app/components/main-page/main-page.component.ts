import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MockserviceService } from '../../services/mockservice.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  tours: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo, private service: MockserviceService) { }

  ngOnInit() {
    this.service.getAppoloData(this.apollo).valueChanges.subscribe((result: any) => {
      this.tours = result.data && result.data.tours;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
