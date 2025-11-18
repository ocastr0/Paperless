import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIconButton,
    MatIcon,
    MatCheckbox,
    MatError,
    MatPrefix,
    MatSuffix
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    // Animação do card principal
    trigger('cardAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'scale(0.8) translateY(50px)' 
        }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ 
            opacity: 1, 
            transform: 'scale(1) translateY(0)' 
          })
        )
      ])
    ]),

    // Animação da logo
    trigger('logoAnimation', [
      transition(':enter', [
        animate('1200ms ease-out', keyframes([
          style({ transform: 'scale(0) rotate(-180deg)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.2) rotate(20deg)', opacity: 0.8, offset: 0.6 }),
          style({ transform: 'scale(0.95) rotate(-5deg)', opacity: 1, offset: 0.8 }),
          style({ transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 1 })
        ]))
      ])
    ]),

    // Animação dos campos de formulário
    trigger('fieldAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateX(-100px)' 
        }),
        animate('400ms {{delay}}ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateX(0)' 
          })
        )
      ], { params: { delay: 0 } })
    ]),

    // Animação de expansão dos campos ao focar
    trigger('fieldExpand', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: 'none'
      })),
      state('focused', style({
        transform: 'scale(1.02)',
        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
      })),
      transition('normal <=> focused', animate('200ms ease-out'))
    ]),

    // Animação do botão
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(30px) scale(0.9)' 
        }),
        animate('500ms 600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0) scale(1)' 
          })
        )
      ])
    ])
  ]
})
export class LoginComponent {
  hide = true;
  isLoading = false;
  
  // Estados de foco para animações
  emailFocused = false;
  passwordFocused = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading = true;
    
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    
    console.log('Login attempt:', { email, password });
    
    setTimeout(() => {
      this.isLoading = false;
      alert('Login realizado com sucesso!');
    }, 1500);
  }

  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email é obrigatório';
    }
    return emailControl?.hasError('email') ? 'Email inválido' : '';
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Senha é obrigatória';
    }
    return passwordControl?.hasError('minlength') ? 'Mínimo 6 caracteres' : '';
  }
}