import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-custom-typography',
  templateUrl: './ui-custom-typography.component.html',
  styleUrls: ['./ui-custom-typography.component.scss']
})
export class UiCustomTypographyComponent implements OnInit {

  public sampleText = 'How Great Is The Strength Of Your Belief';

  constructor() { }

  ngOnInit() {
  }

}
