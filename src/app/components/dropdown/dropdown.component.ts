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
  @Input() searchFilter: boolean;
  @Output() valuesChanged = new EventEmitter<any>();
  @Output() defaultValueChanged = new EventEmitter<any>();

  dropdownList = [];
  @Input() selectedItems = [];
  dropdownSettings: any;

  constructor() {
  }

  ngOnInit() {
    this.dropdownList = this.options;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: !this.multiple,
      text: this.title,
      enableSearchFilter: this.searchFilter,
    };
  }

  onItemSelect() {
    this.valuesChanged.emit(this.selectedItems);
  }

  onItemSelectAll(items) {
    this.defaultValue = [...items];
    this.valuesChanged.emit([...items]);
  }

  onItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
}
