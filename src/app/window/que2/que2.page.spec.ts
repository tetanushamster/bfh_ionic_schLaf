import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Que2Page } from './que2.page';

describe('Que2Page', () => {
  let component: Que2Page;
  let fixture: ComponentFixture<Que2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Que2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Que2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
