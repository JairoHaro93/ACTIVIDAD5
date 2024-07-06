import { Component } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrNoticias: Inoticias[] = [
    {
      title:
        'Copa América: Si Ecuador y Argentina empatan en tiempo reglamentario, ¿cómo se define al semifinalista? Esto indica el reglamento de la Conmebol',
      url: 'https://www.eluniverso.com/resizer/v2/YRQ3OJCVCZHRTPTPD3SPHL5X3E.jpg?auth=775c3cea466f131d9b68d47f270a70bade2e77d9bfee74cf946a5a3504fa82e2&width=1362&height=1005&quality=75&smart=true',
      date: '2024-07-01',
      content:
        '  Ecuador y Argentina dan el puntapié inicial a los cuartos de final de la Copa América. Los combinados nacionales se medirán este jueves, 4 de julio, en busca de convertirse en una de las cuatro mejores selecciones del continente.A partir de esta fase, los duelos ya no se jugarán por puntos, todos serán por eliminatoria directa, es decir, no habrá choques de ida y vuelta. De cada compromiso saldrá un combinado que llegue a las semifinales, que se comenzarán a disputar a partir del próximo martes.Ante la posibilidad que los encuentros terminen igualados durante el tiempo reglamentario (90 minutos), la Conmebol ha diseñado una normativa donde indica cuál será el criterio de desempate para estas ocasiones. ',
    },
    {
      title:
        '¿Hay paro nacional en Ecuador este 4 de julio del 2024? Esto es todo lo que se sabe',
      url: 'https://www.eluniverso.com/resizer/v2/IY5JLFO27NGDBGOXKSOCHCTFHU.jfif?auth=9846cdd22d73205aa02fc94289f87c5440738e70fb62620da6d1b446dceeb242&width=1600&height=719&quality=75&smart=true',
      date: '2024-07-03',
      content:
        '  Las centrales sindicales y otras organizaciones sociales han convocado para este 4 de julio a una jornada de protestas por el incremento del precio de los combustibles y la paulatina eliminación de los subsidios, medidas dispuestas por el presidente Daniel Noboa y que están vigentes desde el pasado viernes 28 de junio.No se trata de un paro nacional, que implica el cierre total de vías, la suspensión de actividades productivas y de las clases. Son movilizaciones puntuales que se realizarán a partir de las 16:00 de este jueves en varias ciudades del país. ',
    },
  ];

  newNoticia: Inoticias = { title: '', url: '', date: '', content: '' };

  cargarNoticias(): string {
    let html = '';
    this.arrNoticias.forEach((noticia: Inoticias) => {
      html += `
      <hr>
      <article class="noticia"> 
      <h3> ${noticia.title} </h3>
      <p class="noticia__parrafo">  ${noticia.content}  </p>
      <img class="imagen" src="${noticia.url}" >
      <span>Fecha de publicación: ${noticia.date}</span>
      </article>`;
    });
    return html;
  }
  guardarNoticias() {
    if (
      this.newNoticia.content !== '' &&
      this.newNoticia.date !== '' &&
      this.newNoticia.title !== '' &&
      this.newNoticia.url !== ''
    ) {
      this.arrNoticias.push(this.newNoticia);
      console.log(this.arrNoticias);
      this.newNoticia = { title: '', url: '', date: '', content: '' };
    }
  }
}
