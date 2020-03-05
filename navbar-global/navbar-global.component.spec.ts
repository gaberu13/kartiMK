import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarGlobalComponent } from "./navbar-global.component";

describe("NavbarGlobalComponent", () => {
  let component: NavbarGlobalComponent;
  let fixture: ComponentFixture<NavbarGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarGlobalComponent]
<<<<<<< HEAD
    })
      .compileComponents();
=======
    }).compileComponents();
>>>>>>> c91174b7b82521997277602e7d0fe8615909e852
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
