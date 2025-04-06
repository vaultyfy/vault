import { createFileRoute } from '@tanstack/react-router';
import { AppLayout } from '@layouts/app-layout';
import { Loan } from '@containers/app/loan-me';

export const Route = createFileRoute('/dashboard/loan-me/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppLayout routeTitle='Loan Me'><Loan /></AppLayout>
}
