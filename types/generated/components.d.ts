import type { Schema, Attribute } from '@strapi/strapi';

export interface ExperiencesExperiences extends Schema.Component {
  collectionName: 'components_experiences_experiences';
  info: {
    displayName: 'experiences';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    companyName: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    state: Attribute.String & Attribute.Required;
    startDate: Attribute.String & Attribute.Required;
    endDate: Attribute.String & Attribute.Required;
    workSummary: Attribute.String;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'alien';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.String;
    cgpa: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'experiences.experiences': ExperiencesExperiences;
      'education.education': EducationEducation;
    }
  }
}
