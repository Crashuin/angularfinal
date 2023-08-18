import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasAddEditComponent } from './notas-add-edit.component';

describe('NotasAddEditComponent', () => {
  let component: NotasAddEditComponent;
  let fixture: ComponentFixture<NotasAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotasAddEditComponent]
    });
    fixture = TestBed.createComponent(NotasAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
