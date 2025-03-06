import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/console/loan-mgmt/loan-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/console/loan-mgmt/loan-details"!</div>
}
