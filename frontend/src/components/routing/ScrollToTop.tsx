import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export function HashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const rawHash = window.location.hash.replace('#', '').trim().toLowerCase();
    if (!rawHash) return;

    if (rawHash === 'request' || rawHash === 'request-service') {
      navigate('/request', { replace: true });
    } else if (rawHash === 'about') {
      navigate('/about', { replace: true });
    } else if (rawHash.includes('analytics')) {
      navigate('/services/analytics', { replace: true });
    } else if (rawHash.includes('bi') || rawHash.includes('intelligence')) {
      navigate('/services/bi', { replace: true });
    } else if (rawHash.includes('finance')) {
      navigate('/services/finance', { replace: true });
    } else if (rawHash === 'services') {
      navigate('/services', { replace: true });
    }
  }, [location, navigate]);

  return null;
}
