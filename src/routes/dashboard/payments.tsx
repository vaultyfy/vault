import { MetaData } from '@components/metadata'
import { Payments } from '@containers/app'
import { AppLayout } from '@layouts/app-layout'
import { createFileRoute } from '@tanstack/react-router'
import { requireAuth } from '@utils/route-guard'

export const Route = createFileRoute('/dashboard/payments')({
  component: RouteComponent,
  beforeLoad: requireAuth()
})

function RouteComponent() {
  return (
    <>
      <MetaData url="vaultify.vercel.app" pageTitle="Payments &mdash; Vaultify" />

      <AppLayout routeTitle='Payments'>
        <Payments />
      </AppLayout>
    </>
  )
}
