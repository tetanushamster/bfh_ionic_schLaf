import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Que3Page } from './que3.page';

describe('Que3Page', () => {
  let component: Que3Page;
  let fixture: ComponentFixture<Que3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Que3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Que3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
