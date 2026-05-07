import { Outlet } from 'react-router';
import PageLayout from '../layouts/PageLayout';
export default function Index() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}