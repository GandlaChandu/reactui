import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import './breadcrumb.scss'

function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs([], {
    excludePaths: ["/"],
    
  });
  return (
    <nav className='bread'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.url} to={match.url} >
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
}
export default Breadcrumb;
