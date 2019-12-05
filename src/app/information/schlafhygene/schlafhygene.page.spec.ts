import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchlafhygenePage } from './schlafhygene.page';

describe('SchlafhygenePage', () => {
  let component: SchlafhygenePage;
  let fixture: ComponentFixture<SchlafhygenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchlafhygenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchlafhygenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
