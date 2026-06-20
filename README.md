# MedLink

A Full-Stack Telemedicine & Digital Healthcare Platform

## Overview

MedLink is a web-based healthcare platform designed to improve access to medical services by connecting patients and healthcare professionals through secure digital interactions.

The platform enables patients to book appointments, manage their health information, receive medical updates, and communicate with healthcare providers without the need for unnecessary physical hospital visits.

This project is being developed as part of the STEM Festival 2026 Health Track competition under the theme:

> Engineering Tomorrow: Agriculture | Education | Health

---

## Problem Statement

In many communities, especially in developing regions, patients face challenges such as:

- Long travel distances to hospitals
- Extended waiting times
- Limited access to healthcare professionals
- Poor management of personal medical records

MedLink aims to address these challenges by providing a centralized digital healthcare experience.

---

## Objectives

- Improve healthcare accessibility
- Reduce appointment scheduling friction
- Provide digital health record management
- Improve doctor-patient communication
- Demonstrate secure handling of healthcare information

---

## Core Features

### Authentication

- Firebase Authentication
- Secure user registration
- Secure login
- Protected routes
- Session management

### Patient Management

- Patient profile creation
- Digital Health Passport
- Medical history tracking
- Allergy management
- Chronic condition tracking

### Doctor Management

- Doctor profile management
- Specialization tracking
- Professional information management

### Appointment Scheduling

- Appointment booking
- Appointment cancellation
- Appointment management
- Doctor availability tracking
- Double-booking prevention

### Notifications

- Appointment confirmations
- Appointment reminders
- Follow-up reminders
- System notifications

### Medical Records

- Consultation notes
- Symptom tracking
- Prescription records
- Follow-up recommendations

---

## Additional Features

These features extend beyond the competition minimum requirements.

### Health Passport

A centralized patient health profile containing:

- Blood group
- Allergies
- Existing medical conditions
- Emergency contact information
- Current medications

### Follow-Up Care System

Doctors can:

- Schedule follow-ups
- Recommend future consultations
- Track patient progress

### Medical Timeline

Patients can view:

- Appointment history
- Prescriptions
- Consultation notes
- Follow-up records

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Firebase Authentication
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript
- Firebase Admin SDK

### Database

- MongoDB Atlas
- Mongoose ODM

### Hosting

Frontend:

- Firebase Hosting

Backend:

- Vercel

### Development Tools

- Git
- GitHub
- Nodemon
- ESLint
- Prettier

---

## Project Architecture

```text
React Frontend
      │
      ▼
Firebase Authentication
      │
      ▼
ID Token
      │
      ▼
Express Backend
      │
Firebase Admin Verification
      │
      ▼
MongoDB Atlas


```
