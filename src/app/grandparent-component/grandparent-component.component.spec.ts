import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandparentComponentComponent } from './grandparent-component.component';

describe('GrandparentComponentComponent', () => {
  let component: GrandparentComponentComponent;
  let fixture: ComponentFixture<GrandparentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandparentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandparentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
