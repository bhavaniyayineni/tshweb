import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import 'codemirror/mode/sql/sql.js';

@Component({
  selector: 'app-tshell',
  templateUrl: './tshell.component.html',
  styleUrls: ['./tshell.component.sass']
})
export class TshellComponent implements OnInit {

  data: any = [];
  tables: any = [];
  settings = {};
  code: string = "";

  codeMirrorConfig = {
    mode: 'text/x-sql',
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
  };

  source: LocalDataSource;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.setupTableData();
  }

  setupTableData() {
    this.rest.getTableData(".tables").subscribe((data: "") => {
      let tablesInfo = [];
      let info = [];
      tablesInfo = data.split("\n  => ");
      tablesInfo[0] = tablesInfo[0].substring(5);
      this.tables = tablesInfo.map((tableName) => {
        return {
          name: tableName,
        };
      });
    });
  }

  execQuery() {
    if (this.code) {
      this.data = [];
      this.rest.getData(this.code).subscribe((data: {}) => {
        this.data = data;
        this.source = new LocalDataSource(this.data);
        this.setColumns();
      });
    }
  }

  displayTable(tableName: string) {
    if (tableName) {
      let tquery = `select * from ${tableName};`;
      this.code = tquery;
      this.execQuery();
    }
  }


  updateSettingsWithNewColumns(columns) {
    this.settings = {
      actions: false,
      pager: {
        display: false,
      },
      columns: columns,

      attr: {
        class: 'table table-bordered'
      }
    };
  }

  setColumns() {
    if (!(this.data && this.data.length > 0)) {
      return
    }

    let newData = {};
    let keys = Object.keys(this.data[0]);
    let columns: string;
    for (let entry of keys) {
      newData[entry] = {
        title: [entry],
        width: '20px'
      };
    }
    this.updateSettingsWithNewColumns(newData);
  }
}
