import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtocolPage } from './protocol.page';

describe('ProtocolPage', () => {
  let component: ProtocolPage;
  let fixture: ComponentFixture<ProtocolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtocolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
