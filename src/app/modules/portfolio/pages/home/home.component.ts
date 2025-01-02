import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { KnowledgeComponent } from "../../components/knowledge/knowledge.component";
import { ExperiencesComponent } from "../../components/experiences/experiences.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { EducationComponent } from "../../components/education/education.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
