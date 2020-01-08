import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionspmPage } from './questionspm.page';

describe('QuestionspmPage', () => {
  let component: QuestionspmPage;
  let fixture: ComponentFixture<QuestionspmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionspmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionspmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
