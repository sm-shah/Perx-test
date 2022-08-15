import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from 'src/app/constants/animations/in-out.animation';

@Component({
  selector: 'app-replace-text',
  animations: [slideInOutAnimation],
  templateUrl: './replace-text.component.html',
  styleUrls: ['./replace-text.component.scss'],
  host: { '[@slideInOutAnimation]': '' }
})
export class ReplaceTextComponent implements OnInit {
  userInput = '';
  constructor() { }

  ngOnInit(): void {
  }

}
