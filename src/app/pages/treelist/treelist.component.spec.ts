import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreelistComponent } from './treelist.component';

describe('TreelistComponent', () => {
  let component: TreelistComponent;
  let fixture: ComponentFixture<TreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
