import { ReactNode } from 'react';

export interface CategoryItemProps {
  icon: ReactNode;
  label: string;
}

export interface LessonCardProps {
  iconColor: string;
  thumbnailBg: string;
  title: string;
  subtitle: string;
  level: string;
  levelBg: string;
  levelTextColor: string;
  onStart: (title: string, level: string) => void;
}