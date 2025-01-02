import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  imports: [MatTooltip],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de java',
      title: 'Java'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento de spring',
      title: 'Spring'
    },
    {
      src: 'assets/icons/knowledge/quarkus.svg',
      alt: 'Ícone de conhecimento de quarkus',
      title: 'Quarkus'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      title: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de python',
      title: 'Python'
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Ícone de conhecimento de github',
      title: 'GitHub'
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'Ícone de conhecimento de mysql',
      title: 'MySQL'
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Ícone de conhecimento de postgresql',
      title: 'PostgreSQL'
    },
  ])
}
