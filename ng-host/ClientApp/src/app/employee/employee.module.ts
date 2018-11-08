import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar/calendar.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { LogbookComponent } from './logbook/logbook.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FileComponent } from './file/file.component';
import { LeaveComponent } from './leave/leave.component';
import { ReimburseComponent } from './reimburse/reimburse.component';

@NgModule({
  declarations: [CalendarComponent, AddressBookComponent, LogbookComponent, ToDoListComponent, FileComponent, LeaveComponent, ReimburseComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
