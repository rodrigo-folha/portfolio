import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public arrayEducation = signal([
    {
      summary: {
        strong: "Bacharel - Sistemas de Informação",
        p: "UNITINS | jul 2023 - Atual"
      },
      text: "<p>Bacharel em Sistemas de Informação pela Universidade Estadual do Tocantins</p>"
    },
    {
      summary: {
        strong: "Pós-Graduação - Cálculo Estrutural e Fundações",
        p: "Unyleya | mai 2022 - mar 2023"
      },
      text: "<p>Pós-Graduação Lato Sensu, Especialização, com 360 horas no curso Cálculo Estrutural e Fundações</p>"
    },
    {
      summary: {
        strong: "Pós-Graduação - Engenharia de Estruturas em Concreto",
        p: "Unyleya | abr 2021 - fev 2022"
      },
      text: "<p>Pós-Graduação Lato Sensu, Especialização, com 360 horas no curso Engenharia de Estruturas em Concreto</p>"
    },
    {
      summary: {
        strong: "Bacharel - Engenharia Civil",
        p: "IFTO | jan 2015 - dez 2020"
      },
      text: "<p>Bacharel em Engenharia Civil pelo Instituo Federal de Ciência e Tecnologia do Tocantins</p>"
    },
  ])
}
