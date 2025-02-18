import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Assessor Técnico de Engenharia",
        p: "Secretaria Municipal da Habitação | Abr 2022 - Dez 2024"
      },
      text: "<p>Atividades de assessoria técnica em geral.</p> <p>Elaboração de Ofícios e Termos de Referência.</p> <p>Elaboração de Processos Licitatórios.</p> <p>Participação na elaboração de legislação de apoio e normativas aos programas habitacionais.</p>"
    },
    {
      summary: {
        strong: "Diretor de Engenharia",
        p: "Secretaria Municipal da Habitação | Abr 2021 - Abr 2022"
      },
      text: "<p>Entrega de 4 empreendimentos habitacionais (1.012 Unidades Habitacionais).</p> <p>Dirigir/Liderar equipe de engenheiros e arquitetos.</p> <p>Organizar atividades e metas periódicas.</p> <p>Analisar orçamentos, projetos e pareceres técnicos do setor.</p> <p>Acompanhamento de obras, pós-obras, reprogramações de obras.</p> <p>Elaboração de parecer de enquadramento de empreendimentos em programas habitacionais.</p> <p>Participação na elaboração de legislação de apoio e normativas aos programas habitacionais</p> <p>Elaboração de parecer de enquadramento para isenção de ITBI.</p> <p>Elaboração de Ofícios, Memorandos, Despachos e Termos de Referência."
    },
    {
      summary: {
        strong: "Auxiliar de Engenharia",
        p: "Secretaria de Saúde do Estado do Tocantins | Set 2020 - Abr 2021"
      },
      text: "<p>Elaboração de Orçamentos; Elaboração de Projetos de Incêndio de Hospitais, SVO e IML</p> <p> Elaboração de Planilha de Controle de Obras."
    },
    {
      summary: {
        strong: "Estágios em Engenharia",
        p: "Diversas Empresas | Jun 2016 - Set 2020"
      },
      text: "<p>Atividades de Engenharia Civil e Arquitetura em Geral</p>"
    },
  ])
}
