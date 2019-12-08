import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TherapiePage } from './therapie.page';

describe('TherapiePage', () => {
  let component: TherapiePage;
  let fixture: ComponentFixture<TherapiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TherapiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
