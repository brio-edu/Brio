"use client"

import { ProjectViewerHeaderTop } from './project-viewer-header-top'
import { ProjectViewerHeaderCore } from './project-viewer-header-core'
import { ProjectViewerHeaderBottom } from './project-viewer-header-bottom'
import { useGetProject } from '@/hooks/useGetProject'
import { useProjectStore } from '@/store/useProjectStore'
import { useEffect } from 'react'

interface ProjectViewerHeaderProps {
  projectId: string;
}

export function ProjectViewerHeader({ projectId }: ProjectViewerHeaderProps) {
  const { 
    name,
    description,
    model,
    author,
    stats,
    updatedAt,
    project
  } = useGetProject(projectId)

  const { setCurrentProject } = useProjectStore()

  useEffect(() => {
    if (project) {
      setCurrentProject(project)
    }
  }, [project, setCurrentProject])

  const handleStar = () => {
    // Implementar lógica de favoritar
  }

  const handleFork = () => {
    // Implementar lógica de fork
  }

  const handleShare = () => {
    // Implementar lógica de compartilhamento
  }

  const handleRead = () => {
    // Implementar lógica de leitura
  }

  const handleNavigate = (section: string) => {
    // Implementar lógica de navegação
  }

  const projectData = {
    title: name || "Untitled Project",
    description: description || "No description available",
    type: model as "article" | "thesis" | "book" | "research",
    author: author || {
      name: "Unknown Author",
      avatar: "/default-avatar.jpg",
      institution: "No Institution"
    },
    stats: stats || {
      views: 0,
      stars: 0,
      forks: 0,
      comments: 0
    },
    lastUpdate: updatedAt ? new Date(updatedAt) : new Date()
  }

  return (
    <div className="flex flex-col border-b bg-background w-full sticky top-0 z-40">
      <ProjectViewerHeaderTop 
        stats={projectData.stats}
        lastUpdate={projectData.lastUpdate}
      />
      
      <ProjectViewerHeaderCore 
        project={projectData}
        onStar={handleStar}
        onFork={handleFork}
        onShare={handleShare}
        onRead={handleRead}
      />
      
      <ProjectViewerHeaderBottom 
        onNavigate={handleNavigate}
      />
    </div>
  )
} 