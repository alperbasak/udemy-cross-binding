import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
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
  @Input() header: ElementRef;

  // Lifecycle Hooks:
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Textvalue of header: ' + this.header.nativeElement.textContent); // Here is null as the view hasn't been init yet
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
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called'); // will be called after each detection cycle
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Textvalue of header: ' + this.header.nativeElement.textContent); // here it is rendered, so there will be a value
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}

