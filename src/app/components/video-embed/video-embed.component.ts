import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit{
  @Input() key: string | null = null
  @Input() site: string = 'Youtube'

  videoUrl: SafeResourceUrl = ''

  constructor(private sanitazer: DomSanitizer) {}

  ngOnInit() {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key)
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key)
        break;
    }
  }

  getSafeUrl(url: string) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url)
  }

}
