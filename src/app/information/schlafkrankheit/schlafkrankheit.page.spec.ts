import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchlafkrankheitPage } from './schlafkrankheit.page';

describe('SchlafkrankheitPage', () => {
  let component: SchlafkrankheitPage;
  let fixture: ComponentFixture<SchlafkrankheitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchlafkrankheitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchlafkrankheitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
