import { ReactNode } from 'react';

export interface InsuranceSolution {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  features: string[];
  color: string;
}

export interface AnimationProps {
  initial: object;
  animate: object;
  transition: object;
  viewport?: object;
} 