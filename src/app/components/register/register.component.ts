import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
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
    MatSuffix,
    MatHint
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      this.passwordStrengthValidator
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue])
  }, { validators: this.passwordMatchValidator });

  constructor(private router: Router) {}

  // Validador customizado para força da senha
  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;

    return !passwordValid ? { weakPassword: true } : null;
  }

  // Validador para verificar se as senhas coincidem
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading = true;
    
    const { fullName, email, password } = this.registerForm.value;
    
    console.log('Cadastro:', { fullName, email, password });
    
    // Simulação de cadastro
    setTimeout(() => {
      this.isLoading = false;
      alert('Cadastro realizado com sucesso! Redirecionando para login...');
      this.router.navigate(['/login']);
    }, 2000);
  }

  getFullNameErrorMessage(): string {
    const control = this.registerForm.get('fullName');
    if (control?.hasError('required')) {
      return 'Nome completo é obrigatório';
    }
    return control?.hasError('minlength') ? 'Nome deve ter pelo menos 3 caracteres' : '';
  }

  getEmailErrorMessage(): string {
    const control = this.registerForm.get('email');
    if (control?.hasError('required')) {
      return 'Email é obrigatório';
    }
    return control?.hasError('email') ? 'Email inválido' : '';
  }

  getPasswordErrorMessage(): string {
    const control = this.registerForm.get('password');
    if (control?.hasError('required')) {
      return 'Senha é obrigatória';
    }
    if (control?.hasError('minlength')) {
      return 'Mínimo 8 caracteres';
    }
    if (control?.hasError('weakPassword')) {
      return 'Senha deve conter maiúscula, minúscula, número e caractere especial';
    }
    return '';
  }

  getConfirmPasswordErrorMessage(): string {
    const control = this.registerForm.get('confirmPassword');
    if (control?.hasError('required')) {
      return 'Confirme sua senha';
    }
    if (this.registerForm.hasError('passwordMismatch') && control?.touched) {
      return 'As senhas não coincidem';
    }
    return '';
  }
}