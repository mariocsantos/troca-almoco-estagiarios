import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UiDatetimeService } from 'ng-smn-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  hoje: Date;
  usuario: any;
  cardapios: any[];

  meses: any[];
  diasSemana: any[];

  constructor(datetimeService: UiDatetimeService) {
    this.hoje = new Date();
    this.hoje.setHours(0, 0, 0, 0);
    this.hoje.setDate(this.hoje.getDate() + 1);
    this.usuario = {};
    this.cardapios = [];

    this.meses = datetimeService.months;
    this.diasSemana = datetimeService.days;
  }

  ngOnInit() {
    this.getUsuario();
    this.getCardapio();
  }

  ngAfterViewInit() {
    
  }

  getUsuario() {
    this.usuario = {
      nome: 'Jhon',
      sobrenome: 'Doe',
      cor: '#009688',
      imagem: '',
      cargo: 'Desenvolvedor front-end'
    }
  }

  getCardapio() {
    this.cardapios = [{
      cor: '#3f51b5',
      pratoPrincipal: 'Iscas de carne ao molho de shoyu',
      guarnicao: 'Quiabo refogado',
      salada1: 'Folha',
      salada2: 'Tomate com manjericã',
      sobremesa: 'Fruta',
    }, {
      cor: '#2196f3',
      pratoPrincipal: 'Iscas de carne ao molho de shoyu',
      guarnicao: 'Quiabo refogado',
      salada1: 'Folha',
      salada2: 'Tomate com manjericã',
      sobremesa: 'Fruta',
    }, {
      cor: '#4caf50',
      pratoPrincipal: 'Iscas de carne ao molho de shoyu',
      guarnicao: 'Quiabo refogado',
      salada1: 'Folha',
      salada2: 'Tomate com manjericã',
      sobremesa: 'Fruta',
    }, {
      cor: '#ff9800',
      pratoPrincipal: 'Iscas de carne ao molho de shoyu',
      guarnicao: 'Quiabo refogado',
      salada1: 'Folha',
      salada2: 'Tomate com manjericã',
      sobremesa: 'Fruta',
    }, {
      cor: '#f44336',
      pratoPrincipal: 'Iscas de carne ao molho de shoyu',
      guarnicao: 'Quiabo refogado',
      salada1: 'Folha',
      salada2: 'Tomate com manjericã',
      sobremesa: 'Fruta',
    }];

    this.cardapios.map((cardapio, index) => {
      const monday = this.getMonday(new Date());
      monday.setHours(0, 0, 0, 0);

      cardapio.data = new Date(monday.setDate(monday.getDate() + index));
    });
  }

  getMonday(date) {
    const day = date.getDay();

    if (day === 0) {
      date.setDate(date.getDate() + 1)
    } else if (day === 6) {
      date.setDate(date.getDate() + 2)
    } else {
      var diff = date.getDate() - day + (day == 0 ? -6 : 1);
      date.setDate(diff)
    }

    return date;
  }

  getMes(data) {
    const mes = this.meses[data.getMonth()];
    return `${mes.charAt(0).toUpperCase()}${mes.substring(1)}`;
  }

  getSemana(data) {
    const semana = this.diasSemana[data.getDay()];
    return `${semana.charAt(0).toUpperCase()}${semana.substring(1)}`;
  }
}
