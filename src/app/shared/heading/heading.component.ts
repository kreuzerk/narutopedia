import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input() title: string | undefined;
  @Output() toggleChange = new EventEmitter<boolean>();
}
