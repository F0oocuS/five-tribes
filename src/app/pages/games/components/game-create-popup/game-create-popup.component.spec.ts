import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCreatePopupComponent } from './game-create-popup.component';

describe('GameCreatePopupComponent', () => {
  let component: GameCreatePopupComponent;
  let fixture: ComponentFixture<GameCreatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCreatePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
