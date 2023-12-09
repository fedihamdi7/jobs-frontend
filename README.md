# JOBS Platform Documentation
![JOBS Platform](/src/assets/Logo_JOBS.png)

## Table of Contents
- [JOBS Platform Documentation](#jobs-platform-documentation)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [2. Features](#2-features)
  - [3. System Architecture](#3-system-architecture)
  - [4. Prerequisites](#4-prerequisites)
  - [5. Installation](#5-installation)
  - [6. User Schema](#6-user-schema)
    - [Fields](#fields)
    - [UserAppliedNotification](#userappliednotification)
    - [Example](#example)
  - [7. Post Entity](#7-post-entity)
    - [Fields](#fields-1)
    - [Example](#example-1)
  - [8. Negotiation Entity](#8-negotiation-entity)
    - [Fields](#fields-2)
    - [Example](#example-2)
  - [8. Screenshots](#8-screenshots)
    - [Login/Register](#loginregister)
      - [Login](#login)
      - [Register](#register)
    - [Company : Home Page](#company--home-page)
    - [Company : Add Post](#company--add-post)
    - [Company : Post Details](#company--post-details)
    - [Company : Edit Company](#company--edit-company)
    - [User : Home Page](#user--home-page)
    - [User : Post Details](#user--post-details)
    - [Company : Notifications](#company--notifications)
    - [Company : Negotiation](#company--negotiation)
    - [Company : Negotiation, Applicant Details](#company--negotiation-applicant-details)
    - [Applicant : Negotiation](#applicant--negotiation)
    - [Applicant : Negotiation 2](#applicant--negotiation-2)
    - [Applicant : Confirm Negotiation](#applicant--confirm-negotiation)
  - [9.License](#9license)

## 1. Introduction

JOBS is a web platform developed by Fedi Hamdi using Angular v17, NestJS, and MongoDB. It is designed to connect job applicants with companies offering job opportunities. The platform provides a seamless experience for both applicants and companies, facilitating the job application process.

This is the **Front End** part of the application

You Can find the backend part on this link : [Backend](https://github.com/fedihamdi7/jobs-backend)
## 2. Features

- User authentication for both applicants and companies.
- Applicant profiles with resume upload functionality.
- File upload such as company's logo, user's profile picture and resumes
- Job posting and management for companies.
- Job application and tracking for applicants.
- Real-time notifications for application updates.
- Search and filtering options for job listings.
- **Negotiation System**: Facilitate communication between applicants and companies, allowing negotiation on where and when to have the interview.


## 3. System Architecture

The JOBS platform follows a client-server architecture. The frontend is built using Angular v17, providing a dynamic and responsive user interface. The backend is developed with NestJS, serving as the API layer that communicates with the MongoDB database.

## 4. Prerequisites 

Before installing JOBS, ensure that you have the following prerequisites:

- Node.js and npm installed.
- Angular CLI v17 installed.
- NestJS CLI installed.
- MongoDB server running.

## 5. Installation 

To install JOBS, follow these steps:

```bash
# Clone the repository
git clone https://github.com/fedihamdi7/jobs-platform.git

# Install frontend dependencies
cd jobs-frontend
npm install

# Install backend dependencies
cd ../jobs-backend
npm install

# Start the backend
nest start --watch

# Start the frontend
cd ../jobs-frontend
ng s -o
```

## 6. User Schema

The `User` schema represents the core entity within the JOBS platform. It encapsulates information about both applicants and companies, enabling seamless interactions between users and job postings.

### Fields

- **name**: The user's name.
- **email**: The unique email address associated with the user's account.
- **isVerified**: A boolean indicating whether the user's account has been verified.
- **password**: The hashed password for user authentication.
- **profilePic**: The filename of the user's profile picture, with a default fallback.
- **role**: The user's role, which can be 'admin', 'user', or 'company'.
- **phone**: The user's phone number.
- **address**: The user's address.
- **nationality**: The user's nationality.
- **birthDate**: The user's date of birth.
- **governorate**: The user's location's governorate.
- **resume**: A string containing the user's resume.
- **links**: An object containing various social media and web links, such as GitHub, LinkedIn, Facebook, Twitter, Instagram, and a personal website. Additionally, the user's location is included.
- **postsAppliedIn**: An array of references to `Post` entities representing the jobs to which the user has applied.
- **savedPosts**: An array of references to `Post` entities representing the jobs the user has saved.
- **notifications**: An array of `UserAppliedNotification` entities representing notifications related to job applications and negotiations.
- **posts**: An array of references to `Post` entities representing the jobs created by the user.

### UserAppliedNotification

The `UserAppliedNotification` class represents notifications related to job applications and negotiations.

- **_id**: The unique identifier for the notification.
- **message**: A string containing the notification message.
- **createdAt**: The date and time when the notification was created.
- **seen**: A boolean indicating whether the user has seen the notification.
- **user**: A reference to the user associated with the notification.
- **post**: A reference to the `Post` entity associated with the notification.
- **negotiation**: A reference to the `Negotiation` entity associated with the notification.

### Example

```typescript
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  isVerified: true,
  // ... (other fields)
  links: {
    github: 'https://github.com/johndoe',
    // ... (other links)
  },
  postsAppliedIn: [ObjectId('post_id_1'), ObjectId('post_id_2')],
  savedPosts: [ObjectId('post_id_3'), ObjectId('post_id_4')],
  notifications: [
    {
      _id: ObjectId('notification_id_1'),
      message: 'Your application has been received.',
      // ... (other fields)
    },
    // ... (other notifications)
  ],
  posts: [ObjectId('user_post_id_1'), ObjectId('user_post_id_2')],
};

// Sample MongoDB query
const foundUser = await User.findOne({ email: 'john.doe@example.com' });
```

## 7. Post Entity

The `Post` entity represents job postings within the JOBS platform. It encapsulates details about job opportunities posted by companies, including the title, description, and various attributes related to the job.

### Fields

- **title**: The title of the job posting.
- **description**: A detailed description of the job opportunity.
- **company**: A reference to the `User` entity representing the company that posted the job.
- **numberOfAvailablePositions**: The number of available positions for the job.
- **typeOfEmployment**: An array of strings representing the type of employment for the job (e.g., full-time, part-time).
- **experienceLevel**: The experience level required for the job.
- **salary**: The salary offered for the job.
- **levelOfStudy**: An array of strings representing the required level of study for applicants.
- **language**: An array of strings representing the required languages for the job.
- **sexe**: The preferred gender for the job.
- **numberOfSaved**: The number of users who have saved the job.
- **views**: The number of views the job has received.
- **applicants**: The number of users who have applied for the job.
- **accepted**: The number of applicants accepted for the job.
- **rejected**: The number of applicants rejected for the job.
- **dateOfCreation**: The date and time when the job posting was created.
- **dateOfExpiration**: The date and time when the job posting expires.
- **isActive**: A boolean indicating whether the job posting is currently active.

### Example

```typescript
const post = {
  title: 'Software Engineer',
  description: 'Exciting opportunity for a skilled software engineer to join our team...',
  company: ObjectId('company_user_id'),
  numberOfAvailablePositions: 3,
  typeOfEmployment: ['full-time'],
  experienceLevel: 'Mid-level',
  salary: '$80,000 - $100,000',
  levelOfStudy: ["Bachelor's Degree"],
  language: ['English', 'Spanish'],
  sexe: 'Both',
  numberOfSaved: 15,
  views: 120,
  applicants: 50,
  accepted: 20,
  rejected: 10,
  dateOfCreation: new Date('2023-03-01T12:00:00Z'),
  dateOfExpiration: new Date('2023-04-01T12:00:00Z'),
  isActive: true,
};

// Sample MongoDB query
const foundPost = await Post.findOne({ title: 'Software Engineer' });

```


## 8. Negotiation Entity

The `Negotiation` entity represents negotiations between users (applicants) and companies regarding specific job postings within the JOBS platform. It tracks the status, proposed dates, locations, and additional information exchanged during the negotiation process.

### Fields

- **user_id**: A reference to the `User` entity representing the applicant involved in the negotiation.
- **company_id**: A reference to the `User` entity representing the company involved in the negotiation.
- **post_id**: A reference to the `Post` entity representing the job posting associated with the negotiation.
- **status**: The status of the negotiation, which can be 'PENDING', 'ACCEPTED', 'REJECTED', 'PENDING_USER_CONFIRMATION', or 'PENDING_COMPANY_CONFIRMATION'.
- **dateFromTheCompany**: An object containing the proposed date and location from the company.
- **dateFromTheUser**: An object containing the proposed date and location from the user.
- **agreedOnDate**: An object containing the agreed-upon date and location for the negotiation.
- **link**: A link or reference relevant to the negotiation.
- **additionalInfoCompany**: Additional information provided by the company during the negotiation.
- **additionalInfoUser**: Additional information provided by the user during the negotiation.
- **creationDate**: The date and time when the negotiation was created.

### Example

```typescript
const negotiation = {
  user_id: ObjectId('applicant_user_id'),
  company_id: ObjectId('company_user_id'),
  post_id: ObjectId('job_post_id'),
  status: 'PENDING',
  dateFromTheCompany: {
    when: new Date('2023-03-15T14:00:00Z'),
    where: 'Company Office',
  },
  dateFromTheUser: {
    when: new Date('2023-03-16T10:00:00Z'),
    where: 'Online Meeting',
  },
  agreedOnDate: {
    when: new Date('2023-03-16T10:00:00Z'),
    where: 'Online Meeting',
  },
  link: 'https://example.com/negotiation-details',
  additionalInfoCompany: 'Additional information from the company...',
  additionalInfoUser: 'Additional information from the user...',
  creationDate: new Date('2023-03-01T12:00:00Z'),
};

// Sample MongoDB query
const foundNegotiation = await Negotiation.findOne({ user_id: ObjectId('applicant_user_id') });

```

## 8. Screenshots

### Login/Register
#### Login
![JOBS Platform](/docs/login.JPG)
#### Register
In the register page a user can choose to register either as a normal user (applicant) or as a company, you can see how the fields changes depends on user type.

**Register as a user**
![JOBS Platform](/docs/register.JPG "Register as a user")

**Register as a company**
![JOBS Platform](/docs/register%20as%20company.JPG "Register as a company")

**Email Verification**

![JOBS Platform](/docs/verify%20email.JPG)

### Company : Home Page
![JOBS Platform](/docs/home%20page%20company.JPG)

### Company : Add Post
![JOBS Platform](/docs/company%20add%20post.JPG)
### Company : Post Details
![JOBS Platform](/docs/post%20details.JPG)
### Company : Edit Company
![JOBS Platform](/docs/edit%20company.JPG)
### User : Home Page
![JOBS Platform](/docs/user%20home%20page.JPG)
### User : Post Details
![JOBS Platform](/docs/user%20post%20details.JPG)
### Company : Notifications
![JOBS Platform](/docs/notification.JPG)
### Company : Negotiation
![JOBS Platform](/docs/company%20negotiation.JPG)
### Company : Negotiation, Applicant Details
![JOBS Platform](/docs/applicant%20details.JPG)
### Applicant : Negotiation
![JOBS Platform](/docs/user%20negotiation.JPG)
### Applicant : Negotiation 2
Here the applicant have 2 choices, either he can confirm the company's date and place or re-negotiate and suggess his own date and place and wait for the company's confirmation

![JOBS Platform](/docs/user%20negotiation%202.JPG)

### Applicant : Confirm Negotiation
![JOBS Platform](/docs/applicant%20accepts.JPG)

**That's all for now...**
## 9.License
JOBS is licensed under the MIT License.
