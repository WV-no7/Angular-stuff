import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private utils:UtilsService) {
    this.utils.titleChanged.emit("Profile");
   }

  ngOnInit() {
  }

}
