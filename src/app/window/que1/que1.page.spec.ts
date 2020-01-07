import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Que1Page } from './que1.page';

describe('Que1Page', () => {
  let component: Que1Page;
  let fixture: ComponentFixture<Que1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Que1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Que1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
