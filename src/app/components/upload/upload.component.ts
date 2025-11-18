import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface ImageFile {
  file: File;
  preview: string;
  name: string;
  size: number;
  status: 'pending' | 'processing' | 'completed';
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule, 
    MatButton, 
    MatIconButton,
    MatIcon, 
    MatProgressBar,
    RouterLink
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class UploadComponent {
  selectedImages: ImageFile[] = [];
  isDragging = false;
  isProcessing = false;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const files = event.target.files;
    this.processFiles(files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    
    if (event.dataTransfer?.files) {
      this.processFiles(event.dataTransfer.files);
    }
  }

  processFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
          this.selectedImages.push({
            file: file,
            preview: e.target.result,
            name: file.name,
            size: file.size,
            status: 'pending'
          });
        };
        
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / 1048576).toFixed(2) + ' MB';
  }

  async convertImages() {
    if (this.selectedImages.length === 0) return;
    
    this.isProcessing = true;
    
    // Simula processamento de cada imagem
    for (let i = 0; i < this.selectedImages.length; i++) {
      this.selectedImages[i].status = 'processing';
      
      // Simula tempo de processamento (substitua por API real)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.selectedImages[i].status = 'completed';
    }
    
    this.isProcessing = false;
    
    // Aguarda 1 segundo e redireciona para o histórico
    setTimeout(() => {
      this.router.navigate(['/historico'], {
        state: { images: this.selectedImages }
      });
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
