import SkillRange from './range/SkillRange';
import './Skill.css';
import Quote from './quote/Quote';
import { useLocation } from 'react-router-dom';


export default function Skill() {
  const location = useLocation();
  const path = location.pathname.split('/');

  return (
    <div className="skill-container"
      style={{
        paddingTop: path[path.length - 1] === "profilo" ? 60 : 0
      }}
    >
      {path[path.length - 1] === "profilo" &&
        <div div className="part-skill">Skill</div>
      }
      <Quote />
      <SkillRange />
    </div >
  )
}
