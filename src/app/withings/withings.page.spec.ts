import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WithingsPage } from './withings.page';

describe('WithingsPage', () => {
  let component: WithingsPage;
  let fixture: ComponentFixture<WithingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WithingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
