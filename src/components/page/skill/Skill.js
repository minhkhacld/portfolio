import SkillRange from './range/SkillRange';
import './Skill.css';
import Quote from './quote/Quote';


export default function Skill() {
  return (
    <div className="skill-container">
      <Quote />
      <SkillRange />
    </div>
  )
}
