import { Link, Outlet } from 'react-router-dom';

export const LevelOne = () => (
  <div>
    <h1>Level 1</h1>
    <p>This is Level 1. Navigate deeper:</p>
    <Link to="level2">Go to Level 2</Link>
    <Outlet />
  </div>
);
