import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() options: Array<any>;
  @Input() defaultValue: any;
  @Input() multiple: boolean;
  @Input() title: string;
  @Output() valuesChanged = new EventEmitter<any>();
  @Output() defaultValueChanged  = new EventEmitter<any>();

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() {
  }

  ngOnInit() {
    this.dropdownList = this.options;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Выбрать всё',
      unSelectAllText: 'Отменить выбор',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    this.defaultValue = [item];
    this.valuesChanged.emit([item]);
  }

  onItemSelectAll(items) {
    this.defaultValue = [...items];
    this.valuesChanged.emit([...items]);
  }
}
