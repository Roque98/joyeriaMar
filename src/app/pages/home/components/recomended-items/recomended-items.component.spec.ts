import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedItemsComponent } from './recomended-items.component';

describe('RecomendedItemsComponent', () => {
  let component: RecomendedItemsComponent;
  let fixture: ComponentFixture<RecomendedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
