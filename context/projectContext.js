import { createContext, useState } from 'react'

export const ProjectContext = createContext({
  selectedProject: null,
  setSelectedProject: () => {},
  viewProjectDetail: false,
  setViewProjectDetail: () => {}
})

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [viewProjectDetail, setViewProjectDetail] = useState(false)

  const value = {
    selectedProject,
    setSelectedProject,
    viewProjectDetail,
    setViewProjectDetail
  }

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  )
}
