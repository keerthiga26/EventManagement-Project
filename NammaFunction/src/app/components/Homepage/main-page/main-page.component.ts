import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    const video: HTMLVideoElement | null = document.getElementById('video1.mp4') as HTMLVideoElement;
    if (video) {
      video.muted = true; // Mute the video for autoplay compatibility
      video.play();
    }
  }
  isLoginModalVisible = false;

  openLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  closeLoginModal(): void {
    this.isLoginModalVisible = false;
  }



  }

