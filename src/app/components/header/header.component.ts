import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../shared/data.service';
import { FeaturesDialogComponent } from '../features-dialog/features-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changeMode: EventEmitter<boolean> = new EventEmitter(); //Emitter para o Modo Noturno
  nightMode = true;

  

  constructor(private dataService: DataService, private dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.setMode();
  }

  emitChangeMode() {
    this.changeMode.emit(this.nightMode)
    this.dataService.setNightMode(this.nightMode)
  }

  setMode() {
  
    this.nightMode = this.dataService.getNightMode()
    this.emitChangeMode()

  }

  openFeatures() {
    
    this.dialog.open(FeaturesDialogComponent, {
      width: '700px',
  
    });
  }

}