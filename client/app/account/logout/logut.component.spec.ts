import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { LogoutComponent } from './logout.component';


class AuthServiceMock {
  logout(): boolean {
    return true;
  }
}

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ LogoutComponent ],
      providers: [
        FormBuilder,
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
