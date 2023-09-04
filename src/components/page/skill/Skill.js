import { useLocation } from 'react-router-dom';
import { RowCenter } from '../../kits/stucture/component.stucture';
import SkillCanvas from './canvas/Skill.Canvas';
import Quote from './quote/Quote';
import SkillRange from './range/SkillRange';
import './Skill.css';

export default function Skill() {
  const location = useLocation();
  const path = location.pathname.split('/');

  return (
    <div className="skill-container"
      style={{
        paddingTop: path[path.length - 1] === "" ? 60 : 0
      }}
    >
      {path[path.length - 1] === "" &&
        <div className="part-skill">Skill</div>
      }
      <RowCenter className="skill-top-content">
        <Quote />
        <SkillCanvas />
      </RowCenter>
      <SkillRange />

    </div >
  )
}
