import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Footer } from './shared/components/ui/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/smart/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
