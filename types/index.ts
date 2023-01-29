import React from 'react';

/* Types collection */
export interface Props {
  children: React.ReactNode;
}

export interface ProjectListProps {
  id: string;
  title: string;
  github: string;
  deployLink: string;
  summary: string;
  meaning: string;
  technology: {
    frontEnd: string;
    backEnd: string;
    database: string;
    deployment: string;
  };
  date: string;
}

export interface CardProps {
  id: number;
  date: string;
  title: string;
}

export interface AboutContentType {
  title: string;
  content: string;
}
