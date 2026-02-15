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
        strong: "Desenvolvedor Java",
        p: "Tecnotins | Jan 2025 - Atual"
      },
      text: "<p>Entreguei novos módulos no sistema DATASIND (Java/JSF/PrimeFaces/MySQL), reduzindo falhas operacionais em 20% e aumentando a estabilidade da plataforma usada por milhares de usuários. </p> <p>Implementei serviços Spring Boot + PostgreSQL com testes JUnit e documentação Swagger, elevando a cobertura de testes para 70% e acelerando o onboarding da equipe.</p> <p>Estruturei microsserviços com autenticação JWT e princípios SOLID, diminuindo em 50% o tempo de manutenção de código. </p> <p>Iniciei testes de mensageria com Kafka, preparando a arquitetura para suportar cargas maiores e reduzir dependências diretas. </p> <p>Otimizei telas JSF/PrimeFaces e consultas SQL com paginação, lazy loading e índices em MySQL/PostgreSQL, reduzindo tempo de resposta e a carga do banco em picos.</p>"
    },
    {
      summary: {
        strong: "Freelancer",
        p: "Freelancer | Set 2023 - Jul 2025"
      },
      text: "<p>Construí sistema para pecuária (Java + Quarkus + PostgreSQL + Angular), que calcula automaticamente o valor ideal de venda do gado, aumentando a precisão nas decisões comerciais.</p> <p>Criei aplicação de gestão de estoque (Quarkus + PostgreSQL + React) com alertas de reposição em tempo real, reduzindo rupturas de estoque em 25%.</p> <p>Desenvolvi sistema de controle de cotações na construção civil (Spring Boot + PostgreSQL + React), agilizando acompanhamento de custos e cronogramas em 40%.</p> <p>Desenvolvi landing pages responsivas (Angular, React, WordPress), ampliando a presença digital de profissionais autônomos. </p> <p>Automatizei processos em clínica odontológica com n8n + ChatGPT + Google Agenda + WhatsApp, eliminando 70% do trabalho manual. </p>"
    },
    {
      summary: {
        strong: "Assessor Técnico",
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
