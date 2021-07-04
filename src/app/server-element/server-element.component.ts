import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None  // any rules in server-element.css will be applied globally
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // To expose this field to outside world, we add the Input decorator (+aliased)
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  // Lifecycle Hooks:
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // Here is null as the view hasn't been init yet
    console.log('Text Content of header: ' + this.header.nativeElement.textContent);
    // Here is null as the content hasn't been init yet
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes); // keeps track of fields (element for example here; currentValue, prevValue, isFirstInit)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called'); // this will be triggered a lot as it checks for a lot of triggers
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called'); // will be called once
    // notice the difference between onAfterViewInit and onAfterContentInit
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called'); // will be called after each detection cycle
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content of header: ' + this.header.nativeElement.textContent); // here it is rendered, so there will be a value
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}

