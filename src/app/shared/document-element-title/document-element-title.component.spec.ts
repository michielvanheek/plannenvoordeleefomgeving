import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentElementTitleComponent } from './document-element-title.component';

describe('DocumentElementTitleComponent', () => {
  let component: DocumentElementTitleComponent;
  let fixture: ComponentFixture<DocumentElementTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentElementTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentElementTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
