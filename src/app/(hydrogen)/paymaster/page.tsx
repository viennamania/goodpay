
import Dashboard from '@/app/shared-goodpay/dashboard';


import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Paymaster Dashboard'),
};

export default function Page() {
  return <Dashboard />;
}
