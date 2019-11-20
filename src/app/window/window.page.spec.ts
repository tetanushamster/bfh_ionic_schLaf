import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WindowPage } from './window.page';

describe('WindowPage', () => {
  let component: WindowPage;
  let fixture: ComponentFixture<WindowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
