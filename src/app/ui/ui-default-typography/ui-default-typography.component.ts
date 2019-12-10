import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-default-typography',
  templateUrl: './ui-default-typography.component.html',
  styleUrls: ['./ui-default-typography.component.scss']
})
export class UiDefaultTypographyComponent implements OnInit {

  public sampleText = 'How Great Is The Strength Of Your Belief';

  constructor() { }

  ngOnInit() {
  }

}
