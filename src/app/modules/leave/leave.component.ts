import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    
  }
}
