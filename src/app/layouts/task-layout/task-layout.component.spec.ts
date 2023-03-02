import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLayoutComponent } from './task-layout.component';

describe('TaskLayoutComponent', () => {
  let component: TaskLayoutComponent;
  let fixture: ComponentFixture<TaskLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
