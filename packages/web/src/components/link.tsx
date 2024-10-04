import { Link } from 'react-router-dom';

interface AdapterLinkProps {
  to: string
}

function AdapterLink({ to }: AdapterLinkProps) {
  return <Link to={to} />
}

export default AdapterLink;