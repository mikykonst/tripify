import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  @ViewChild('dp') private datePicker: NgbInputDatepicker;
  @Input() from: Date = new Date();
  @Input() to: Date = new Date(new Date().setDate(this.from.getDate() + 3));
  @Input() placeholder = 'starting today';
  @Output() dateRangeSelection = new EventEmitter<{ from: Date, to: Date }>();
  hoveredDate: Date;
  isOpen = false;
  faCalendar = faCalendarAlt;
  displayMonths = window.innerWidth < 500 ? 1 : 2;
  @HostListener('document:click', ['$event.target']) onClick(element) {
    const host = document.getElementById('dateRangePicker');
    if (this.datePicker && this.isOpen && !this.isDescendant(host, element)) {
      this.emit(true);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  private emit(close?: boolean) {
    const dateRange = {
      from: this.from,
      to: this.to,
    };

    this.dateRangeSelection.emit(dateRange);

    if (close) {
      this.isOpen = false;
      this.datePicker.close();
    }
  }
  private isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

  get formattedDateRange(): string {
    if (!this.from) {
      return `missing start date`;
    }

    const fromFormatted = moment(this.from).format('DD.MM.YYYY');

    return this.to
      ? `${fromFormatted}`
      + ` - `
      + `${moment(this.to).format('DD.MM.YYYY')}`
      : `${fromFormatted}`;

  }

  onDateSelection(date: NgbDateStruct) {
    if (!this.from && !this.to) {
      this.from = this.toDate(date);
    } else if (this.from && !this.to && this.toMoment(date).isAfter(this.from)) {
      this.to = this.toDate(date);
      this.emit(true);
    } else {
      this.to = null;
      this.from = this.toDate(date);
    }
  }

  toDate(dateStruct: NgbDateStruct): Date {
    return dateStruct ? new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day) : null;
  }

  toMoment(dateStruct: NgbDateStruct): moment.Moment {
    return moment(this.toDate(dateStruct));
  }

  isHovered = (date: NgbDateStruct) => this.from && !this.to && this.hoveredDate
    && this.toMoment(date).isAfter(this.from) && this.toMoment(date).isBefore(this.hoveredDate)
  isInside = (date: NgbDateStruct) => this.toMoment(date).isAfter(moment(this.from)
    .startOf('day')) && this.toMoment(date).isBefore(moment(this.to).startOf('day'))
  isFrom = (date: NgbDateStruct) => this.toMoment(date).isSame(this.from, 'd');
  isTo = (date: NgbDateStruct) => this.toMoment(date).isSame(this.to, 'd');

}
