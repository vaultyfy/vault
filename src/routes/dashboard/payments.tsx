import { MetaData } from '@components/metadata'
import { Payments } from '@containers/app'
import { AppLayout } from '@layouts/app-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <MetaData url="vaultify.vercel.app" pageTitle="Payments &mdash; Vaultify" />

      <AppLayout>
        <Payments />
      </AppLayout>
    </>
  )
}
