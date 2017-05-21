import { TestBed, async, ComponentFixture ,inject } from '@angular/core/testing';
import { ConnectionBackend, Response, Headers, RequestOptions, Http, HttpModule, RequestMethod } from '@angular/http';
import { AppComponent } from './app.component';
import { AppNavTop } from './core/navbar/app.navTop';
import { LanguageList } from './shared/shared.langData-list';
import { LoginUserEventService } from './events/event.loginUser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/service.loginUser'
import { SessionStorageService } from 'ng2-webstorage';




describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        AppNavTop
      ],
      providers: [
        LanguageList,
        LoginUserEventService,
        AuthService,
        SessionStorageService
        ],
      schemas: [

      ]
    })
      .compileComponents()
  }));

beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('H1').toContain('Mean App'));
  }));*/

});
