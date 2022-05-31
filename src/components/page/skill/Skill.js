import SkillRange from './range/SkillRange';
import './Skill.css';
import Quote from './quote/Quote';
import { useLocation } from 'react-router-dom';
import SkillCanvas from './canvas/Skill.Canvas';
import { ColCenter, RowCenter } from '../../kits/stucture/component.stucture';

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
        <div div className="part-skill">Skill</div>
      }
      <RowCenter className="skill-top-content">
        <Quote />
        <SkillCanvas />
      </RowCenter>
      <SkillRange />

    </div >
  )
}
