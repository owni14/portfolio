import React from 'react';

/* Types collection */
export interface Props {
  children: React.ReactNode;
}

export interface ProjectInfoProps {
  id: number;
  title: string;
  image: string[];
  content: string[];
  date: string;
}

export interface CardProps {
  id: number;
  date: string;
  image: string[];
  title: string;
}
