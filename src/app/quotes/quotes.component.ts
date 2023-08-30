import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  ngOnInit(): void {
      this.loadNewQuote();
  }

  quotes: { quote: string; author: string }[] = [
    { quote: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { quote: "El único límite para nuestros logros de mañana estarán en nuestras dudas de hoy.", author: "Franklin D. Roosevelt" },
    { quote: "No importa lo lento que vayas, siempre y cuando no te detengas.", author: "Confucio" },
    { quote: "No te compares con nadie. El único que debes superar es a ti mismo.", author: "Anonymous" },
    { quote: "Nunca sabes lo fuerte que eres, hasta que ser fuerte es tu única opción.", author: "Bob Marley" },
    { quote: "El secreto de la existencia humana no solo está en vivir, sino en saber para qué se vive.", author: "Fiodor Dostoievski" },
    { quote: "La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
    { quote: "La vida es un constante cambio, una continua mudanza.", author: "Marco Aurelio" },
    { quote: "No se trata de cuánto tiempo pasas en la Tierra, sino de cómo pasas el tiempo.", author: "Seneca" },
    { quote: "La vida es un eco; si no te gusta lo que estás recibiendo, fíjate en lo que estás emitiendo.", author: "Anónimo" },
    { quote: "No vivas la misma vida año tras año y llámala una vida.", author: "Robin Sharma" },
    { quote: "La vida es realmente simple, pero insistimos en hacerla complicada.", author: "Confucio" },
    { quote: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "Allen Saunders" },
    { quote: "La vida es un proceso de convertirse en la mejor versión de uno mismo.", author: "Mahatma Gandhi" },
    { quote: "La vida es como una bicicleta. Para mantener el equilibrio, debes seguir adelante.", author: "Albert Einstein" },
    { quote: "La vida no es cuestión de encontrarse a uno mismo, sino de crearse a uno mismo.", author: "George Bernard Shaw" },
    { quote: "La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
    { quote: "La vida es un constante cambio, una continua mudanza.", author: "Marco Aurelio" },
    { quote: "No se trata de cuánto tiempo pasas en la Tierra, sino de cómo pasas el tiempo.", author: "Seneca" },
    { quote: "La vida es un eco; si no te gusta lo que estás recibiendo, fíjate en lo que estás emitiendo.", author: "Anónimo" },
  ];

  selectedQuote: string = '';
  selectedAuthor: string = '';

  loadNewQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex].quote;
    this.selectedAuthor = this.quotes[randomIndex].author;
  }
  
}
