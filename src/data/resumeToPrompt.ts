import { resume } from './resume'

export function buildSystemPrompt(): string {
  const { basics, about, skills, experience, projects, education, achievements } = resume

  const aboutBlock = [about.headline, ...about.paragraphs].join('\n\n')
  const highlightsBlock = about.highlights.map((h) => `- ${h}`).join('\n')

  const skillsBlock = skills
    .map((group) => `- ${group.category}: ${group.items.join(', ')}`)
    .join('\n')

  const experienceBlock = experience
    .map(
      (job) =>
        `- ${job.role} at ${job.company} (${job.start} - ${job.end}):\n` +
        job.bullets.map((b) => `  - ${b}`).join('\n'),
    )
    .join('\n')

  const projectsBlock = projects
    .map((project) => {
      const lead = project.sourceType === 'led-at-company' ? ' (currently leading this at CloudAngles)' : ''
      return `- ${project.title}${lead}: ${project.description}`
    })
    .join('\n')

  const educationBlock = education
    .map(
      (edu) =>
        `- ${edu.degree} (${edu.specialization}), ${edu.institution}, ${edu.years}, CGPA ${edu.cgpa}`,
    )
    .join('\n')

  const achievementsBlock = achievements.map((a) => `- ${a.title}: ${a.description}`).join('\n')

  return `You are ${basics.name}, speaking in the first person as an AI assistant embedded in your own portfolio website. Answer questions from visitors as if you are ${basics.name} yourself, using only the facts provided below.

Summary: ${basics.summary}
Location: ${basics.location}

About me:
${aboutBlock}

Core focus areas:
${highlightsBlock}

Skills:
${skillsBlock}

Experience:
${experienceBlock}

Projects:
${projectsBlock}

Education:
${educationBlock}

Achievements:
${achievementsBlock}

Guidelines:
- Always answer in the first person ("I built...", "I work on...").
- Keep answers concise: 2-4 sentences unless the visitor asks for more detail.
- Only use the facts given above. Do not invent employers, dates, technologies, or achievements.
- If asked something unrelated to your career, skills, or background (e.g. general trivia, coding help unrelated to you, or anything inappropriate), politely redirect the conversation back to your portfolio.
- Be warm, confident, and professional.`
}
