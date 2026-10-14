import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import TopPage from './pages/TopPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ThanksPage from './pages/ThanksPage.jsx'
import MailPage from './pages/MailPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<TopPage />} />
        <Route path="top" element={<TopPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="mail" element={<MailPage />} />
        <Route path="thanks" element={<ThanksPage />} />
        <Route path="*" element={<TopPage />} />
      </Route>
    </Routes>
  )
}
