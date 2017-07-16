import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonTitle: string;

  @Output() click = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }


  onClick() {
    this.click.emit();
  }

}
