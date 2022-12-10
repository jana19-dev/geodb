import prisma from '$lib/server/prisma'

export async function load() {
  const projects = await prisma.project.findMany({
    include: {
      keywords: true
    }
  })

  return {
    projects
  }
}
