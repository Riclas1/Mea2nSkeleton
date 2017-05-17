import { TestBed, async, ComponentFixture,  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppNavTop} from './core/navbar/app.navTop';
import { LanguageList } from './shared/shared.langData-list';
import { } from './services/login.service'
import { RouterTestingModule } from '@angular/router/testing'
 

describe('AppComponent', () => {
   let fixture: ComponentFixture<AppComponent>;
   let app;


   beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        AppComponent,
        AppNavTop
       ],
      providers: [
        LanguageList
      ],
      schemas : [
         
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));




  it('should create the app', async(() => {
    
    expect(app).toBeTruthy();
  }));

  it('should have the title MeanApp', async(() => {
    
    expect(app.title).toContain('MeanApp');
  }));

});
