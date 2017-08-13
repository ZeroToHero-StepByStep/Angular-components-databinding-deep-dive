import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>() ;
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string , serverContent: string}>() ;
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value) ;
    // console.log("onAddServer") ;
    this.serverCreated.emit({serverName: nameInput.value , serverContent : this.serverContentInput.nativeElement.value}) ;
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value , serverContent: this.serverContentInput.nativeElement.value}) ;
  }

  constructor() { }

  ngOnInit() {
  }

}
