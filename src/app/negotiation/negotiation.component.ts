import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  negotiation = {
    "_id": "6560b82024fdf8eba271ba44",
    "user_id": "65571e3058e66cbe3e84aa8c",
    "company_id": {
      "_id": "6555f0cab19e1825b7ef617b",
      "name": "company 1"
    },
    "post_id": {
      "_id": "65587167efe08886ea9a7abd",
      "title": "post of company 1",
      "description": "desc1",
      "company": "6555f0cab19e1825b7ef617b",
      "numberOfAvailablePositions": 2,
      "typeOfEmployment": "CIVP",
      "applicants": 1,
      "dateOfCreation": "2023-11-18T09:10:15.703Z",
      "__v": 0,
      "levelOfStudy": "Bac+3",
      "salary": "1500",
      "experienceLevel": "0-1"
    },
    "status": "PENDING",
    "dateFromTheCompany": {
      "when": null,
      "where": null
    },
    "dateFromTheUser": {
      "when": null,
      "where": null
    },
    "agreedOnDate": {
      "when": null,
      "where": null
    },
    "link": null,
    "additionalInfoCompany": null,
    "additionalInfoUser": null,
    "creationDate": "2023-11-24T15:50:08.507Z",
    "__v": 0
  };
}
