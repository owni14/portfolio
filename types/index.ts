import React from 'react';

/* Types collection */
export interface Props {
  children: React.ReactNode;
}

export interface ProjectListProps {
  id: string;
  image: string;
  title: string;
  deployLink: string;
  summary: string;
  meaning: string;
  technology: {
    frontEnd: string;
    backEnd: string;
    deployment: string;
  };
  date: string;
}

export interface CardProps {
  id: number;
  date: string;
  image: string;
  title: string;
}

export interface AboutContentType {
  title: string;
  content: string;
}
