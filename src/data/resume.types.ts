export interface Basics {
  name: string
  initials: string
  title: string
  summary: string
  location: string
  email: string
  links: {
    github?: string
    linkedin?: string
    leetcode?: string
  }
}

export interface About {
  headline: string
  paragraphs: string[]
  highlights: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  id: string
  role: string
  company: string
  logo?: string
  logoBg?: string
  start: string
  end: string
  bullets: string[]
}

export type ProjectSource = 'resume' | 'led-at-company'

export interface Project {
  id: string
  title: string
  description: string
  bullets?: string[]
  banner?: string
  tags?: string[]
  sourceType: ProjectSource
}

export interface EducationEntry {
  institution: string
  degree: string
  specialization: string
  logo?: string
  years: string
  cgpa: string
  coursework: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
}

export interface Resume {
  basics: Basics
  about: About
  skills: SkillGroup[]
  experience: Experience[]
  projects: Project[]
  education: EducationEntry[]
  achievements: Achievement[]
}
