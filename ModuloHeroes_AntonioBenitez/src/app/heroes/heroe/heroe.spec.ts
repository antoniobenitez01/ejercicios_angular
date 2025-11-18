import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe';

describe('Heroe', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
