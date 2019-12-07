import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoiceLoginPage } from './choice-login.page';

describe('ChoiceLoginPage', () => {
  let component: ChoiceLoginPage;
  let fixture: ComponentFixture<ChoiceLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
