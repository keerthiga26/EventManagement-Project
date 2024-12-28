import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../../model/event';
import { EventsService } from '../../../events.service';

@Component({
  selector: 'app-show-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-event.component.html',
  styleUrl: './show-event.component.css'
})
export class ShowEventComponent implements OnInit, AfterViewInit {
  slides = [
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    { src: 'image3.jpg' },
    { src: 'image4.jpg' },
    { src: 'image8.jpg' },
    { src: 'image9.jpg' },
    { src: 'image10.jpg' },
    
  ];
  
  slideIndex: number = 0;

  ngOnInit(): void {
    this.showSlides();
    this.fetchEvent();
  }

  showSlides(): void {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    }, 2000); // Change slide every 3 seconds
  }


  
    @ViewChild('slider', { static: false }) slider!: ElementRef;
    isMouseDown = false;
    isTouchStart = false;
    startX: number = 0;
    startTouchX: number = 0;
    scrollLeft: number = 0;
    events: Event[] = [];
    event: Event = {
      id: 0,
      title: '',
      description: '',
      eventType: '',
      musicSystem: false,
      foodType: '',
      price: 0.0,
      date: '',
      backdrop: '',
      imageUrl: '',
    };
  
    constructor(private service: EventsService, private router: Router, private route: ActivatedRoute) {}
  
    ngAfterViewInit(): void {
      // Mouse events
      this.slider.nativeElement.addEventListener('mousedown', (e: MouseEvent) => this.mouseDown(e));
      this.slider.nativeElement.addEventListener('mouseleave', () => this.mouseUp());
      this.slider.nativeElement.addEventListener('mouseup', () => this.mouseUp());
      this.slider.nativeElement.addEventListener('mousemove', (e: MouseEvent) => this.mouseMove(e));
  
      // Touch events for mobile
      this.slider.nativeElement.addEventListener('touchstart', (e: TouchEvent) => this.touchStart(e));
      this.slider.nativeElement.addEventListener('touchend', () => this.touchEnd());
      this.slider.nativeElement.addEventListener('touchmove', (e: TouchEvent) => this.touchMove(e));
    }
  
  
    fetchEvent(): void {
      this.service.getEvents().subscribe((data) => {
        this.events = data;
      });
    }
  
    mouseDown(e: MouseEvent) {
      this.isMouseDown = true;
      this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    }
  
    mouseUp() {
      this.isMouseDown = false;
    }
  
    mouseMove(e: MouseEvent) {
      if (!this.isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - this.slider.nativeElement.offsetLeft;
      const walk = (x - this.startX) * 3; // Adjust speed
      this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
    }
  
    touchStart(e: TouchEvent) {
      this.isTouchStart = true;
      this.startTouchX = e.touches[0].pageX - this.slider.nativeElement.offsetLeft;
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    }
  
    touchEnd() {
      this.isTouchStart = false;
    }
  
    touchMove(e: TouchEvent) {
      if (!this.isTouchStart) return;
      e.preventDefault();
      const x = e.touches[0].pageX - this.slider.nativeElement.offsetLeft;
      const walk = (x - this.startTouchX) * 3; // Adjust speed
      this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
    }
  }

