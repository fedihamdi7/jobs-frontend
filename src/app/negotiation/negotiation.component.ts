import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {
  constructor(
    private config: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) { }
  negotiation: any;
  ngOnInit() {
    this.negotiation = this.config.data;
    console.log(this.negotiation);

  }
  // TODO add logic with backend
  confirmAccept(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      },
      reject: () => {

      }
    });
  }
  confirmSuggest(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      },
      reject: () => {

      }
    });
  }
  additionalInfoCompany: string = `<h2>Nous cherchons pour notre client à Paris un développeur Java/React.</h2>
  <p>Votre rôle consiste à créer, déployer et améliorer les fonctionnalités à travers toutes les couches de l’application.</p>
  <p>Vous travaillez en étroite collaboration avec le Product Owner pour implémenter ces fonctionnalités et garantir la stabilité technique et la cohérence.</p>
  <p>Vous êtes un membre clé de l’équipe qui possède la responsabilité totale du produit.</p>

  <h3>La stack technique :</h3>
  <ul>
      <li>Java (8 et 11)</li>
      <li>Springboot</li>
      <li>React</li>
      <li>API REST</li>
      <li>MySQL, MongoDB</li>
      <li>Docker, Kubernetes</li>
      <li>CI/CD : Gitlab ou Jenkins</li>
      <li>Connaissance dans le Cloud (Aws, ou Azure)</li>
  </ul>
  <h2>Nous cherchons pour notre client à Paris un développeur Java/React.</h2>
  <p>Votre rôle consiste à créer, déployer et améliorer les fonctionnalités à travers toutes les couches de l’application.</p>
  <p>Vous travaillez en étroite collaboration avec le Product Owner pour implémenter ces fonctionnalités et garantir la stabilité technique et la cohérence.</p>
  <p>Vous êtes un membre clé de l’équipe qui possède la responsabilité totale du produit.</p>

  <h3>La stack technique :</h3>
  <ul>
      <li>Java (8 et 11)</li>
      <li>Springboot</li>
      <li>React</li>
      <li>API REST</li>
      <li>MySQL, MongoDB</li>
      <li>Docker, Kubernetes</li>
      <li>CI/CD : Gitlab ou Jenkins</li>
      <li>Connaissance dans le Cloud (Aws, ou Azure)</li>
  </ul>
  `;
  // negotiation = {
  //   "_id": "6560b82024fdf8eba271ba44",
  //   "user_id": "65571e3058e66cbe3e84aa8c",
  //   "company_id": {
  //     "_id": "6555f0cab19e1825b7ef617b",
  //     "name": "company 1"
  //   },
  //   "post_id": {
  //     "_id": "65587167efe08886ea9a7abd",
  //     "title": "post of company 1",
  //     "description": "desc1",
  //     "company": "6555f0cab19e1825b7ef617b",
  //     "numberOfAvailablePositions": 2,
  //     "typeOfEmployment": "CIVP",
  //     "applicants": 1,
  //     "dateOfCreation": "2023-11-18T09:10:15.703Z",
  //     "__v": 0,
  //     "levelOfStudy": "Bac+3",
  //     "salary": "1500",
  //     "experienceLevel": "0-1"
  //   },
  //   "status": "PENDING",
  //   "dateFromTheCompany": {
  //     "when": null,
  //     "where": null
  //   },
  //   "dateFromTheUser": {
  //     "when": null,
  //     "where": null
  //   },
  //   "agreedOnDate": {
  //     "when": null,
  //     "where": null
  //   },
  //   "link": null,
  //   "additionalInfoCompany": null,
  //   "additionalInfoUser": null,
  //   "creationDate": "2023-11-24T15:50:08.507Z",
  //   "__v": 0
  // };
}
