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
      text: "<p>Desenvolvo e mantenho funcionalidades no sistema DATASIND (Java, JSF, PrimeFaces, MySQL), atendendo milhares de usuários de sindicatos e associações em todo o Brasil, com foco em estabilidade e usabilidade. </p> <p>Implemento módulos backend utilizando Spring Boot e PostgreSQL em projeto paralelo, integrando com frontend Angular e garantindo testes automatizados com JUnit para confiabilidade em produção.</p> <p> Participo da criação de microsserviços independentes com autenticação JWT, organizando responsabilidades por domínio e favorecendo escalabilidade e manutenção contínua. </p> <p> Aplico princípios SOLID e diversos padrões de projeto (Singleton, Factory, Provider, Strategy), promovendo maior legibilidade, reutilização de código e desacoplamento entre camadas. </p> <p> Iniciei testes de mensageria com Kafka para promover comunicação assíncrona entre serviços, preparando a arquitetura para suportar cargas maiores e reduzir dependências diretas. </p> <p> Documento APIs RESTful com Swagger e organizei a arquitetura de pacotes conforme boas práticas do Spring, facilitando o onboarding de novos membros na equipe.</p>"
    },
    {
      summary: {
        strong: "Freelancer",
        p: "Freelancer | Set 2023 - Atual"
      },
      text: "<p>Atuo com automações com N8N, Agentes de IA, Engenharia de Prompt, fiz um agente financeiro via WhatsAPP e atualmente estou desenvolvendo o site em Angular como Front End e SpringBoot como backend. Criei um agente de agendamento para um clínica odontológica integrando N8N, ChatGPT, Google Agenda e WhatsAPP. Criei um robô que está integrando o WhatsAPP com o Trello e o Google Agenda para uma empresa de engenharia que faz o controle KANBAN pelo Trello.</p> <p>Desenvolvi sistemas web utilizando Java, Spring Boot e Angular, com foco em APIs RESTful e estrutura modular, entregando soluções adaptadas a clientes de pequeno e médio porte.</p> <p>Implementei microsserviços desacoplados com PostgreSQL e MongoDB, aplicando princípios SOLID e facilitando a escalabilidade de aplicações.</p> <p>Automatizei rotinas empresariais com scripts de web scraping e integração com planilhas Google Sheets, reduzindo tempo operacional em até 60%.</p> <p>Projetei e publiquei landing pages responsivas com HTML, CSS, Angular, e também via WordPress, aumentando a visibilidade online de profissionais autônomos. </p> <p> Criei dashboards de Business Intelligence com Power BI, conectando múltiplas fontes de dados e melhorando a tomada de decisão dos clientes.</p> <p> Realizei testes unitários e de integração com JUnit e Postman para garantir a confiabilidade dos serviços backend.</p> <p>Configurei ambientes de desenvolvimento com Docker, facilitando o deploy e a portabilidade das aplicações.</p> <p>Implementei autenticação com OAuth2, JWT e Keycloak em sistemas personalizados, garantindo segurança e controle de acesso eficaz.</p>"
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
