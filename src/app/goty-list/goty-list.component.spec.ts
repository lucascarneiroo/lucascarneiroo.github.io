import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotyListComponent } from './goty-list.component';

describe('GotyListComponent', () => {
  let component: GotyListComponent;
  let fixture: ComponentFixture<GotyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
