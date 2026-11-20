export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  tag: string;
  year: string;
  href?: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface Principle {
  name: string;
  description: string;
}
