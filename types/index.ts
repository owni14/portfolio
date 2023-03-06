import React from "react";

// Types collection
export interface IProps {
  children: React.ReactNode;
}

export interface IProjectList {
  id: string;
  title: string;
  component: string;
  date: string;
  sortDate: number;
}

export interface ICard {
  id: number;
  date: string;
  title: string;
}

export interface IAboutContent {
  title: string;
  content: string;
}
