import { Component, OnInit, ViewChild } from '@angular/core';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material/select/select';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { slideInOutAnimation } from 'src/app/constants/animations/in-out.animation';
import { booksData } from '../../constants/books-table.constant';


@Component({
  selector: 'app-core',
  animations: [slideInOutAnimation],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  host: { '[@slideInOutAnimation]': '' }
})
export class CoreComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  booksArr = new Array<any>();

  constructor() {}


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'type', 'content', 'createdAt','coverType'];
  dataSource = new MatTableDataSource();
  booksDataDetails = booksData;  
  
  ngOnInit(){
    this.booksDataDetails.data.forEach(item=>{
      const obj = {
        id:item.id,
        type:item.type,
        content:item.attributes.content,
        createdAt:item.attributes.created_at,
        coverType:item.attributes.display_properties.type
      }
      this.booksArr = this.booksArr.concat([obj])
    })
    this.dataSource = new MatTableDataSource(this.booksArr)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
