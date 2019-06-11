import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshellComponent } from './tshell.component';

describe('TshellComponent', () => {
  let component: TshellComponent;
  let fixture: ComponentFixture<TshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
