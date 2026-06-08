import NavDots from './components/NavDots'
import ScrollTopButton from './components/ScrollTopButton'
import Cover from './sections/Cover'
import Introduction from './sections/Introduction'
import SkillsEducation from './sections/SkillsEducation'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <NavDots />
      <Cover />
      <Introduction />
      <SkillsEducation />
      <Experience />
      <Projects />
      <Contact />
      <ScrollTopButton />
    </>
  )
}
