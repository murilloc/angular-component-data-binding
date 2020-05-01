import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // Output and Input should not be renamed
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {

    // Do not directly access dom elements
    // Ex: this.serverContentInput.nativeElement.value = 'text here'

    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }


  // onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
