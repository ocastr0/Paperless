import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

interface ConversionHistory {
  id: number;
  date: Date;
  images: number;
  status: 'completed' | 'processing' | 'failed';
}

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [CommonModule, MatButton, MatIconButton, MatIcon, RouterLink],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class HistoricoComponent implements OnInit {
  history: ConversionHistory[] = [];
  recentImages: any[] = [];

  constructor(private router: Router) {
    // Recupera dados do state da navegação
    const currentNavigation = this.router.getCurrentNavigation();
    const state = currentNavigation?.extras.state;
    
    if (state && state['images']) {
      this.recentImages = state['images'];
    }
  }

  ngOnInit() {
    // Simula histórico (substitua por dados reais de API)
    const recentCount = this.recentImages.length > 0 ? this.recentImages.length : 5;
    
    this.history = [
      { 
        id: 1, 
        date: new Date(), 
        images: recentCount, 
        status: 'completed' 
      },
      { 
        id: 2, 
        date: new Date(Date.now() - 86400000), 
        images: 3, 
        status: 'completed' 
      },
      { 
        id: 3, 
        date: new Date(Date.now() - 172800000), 
        images: 7, 
        status: 'completed' 
      },
    ];
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  goBack(): void {
    this.router.navigate(['/menu']);
  }

  newConversion(): void {
    this.router.navigate(['/upload']);
  }
}
