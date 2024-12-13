import { Link, Outlet } from 'react-router-dom';

export const LevelTwo = () => (
  <div>
    <h2>Level 2</h2>
    <p>This is Level 2. Navigate deeper:</p>
    <Link to="level3">Go to Level 3</Link>
    <Outlet />
  </div>
);
