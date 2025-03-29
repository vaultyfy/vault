import { createFileRoute } from '@tanstack/react-router'
import {MetaData} from "@components/metadata";
import {AppLayout} from "@layouts/app-layout";
import NotificationPage from "@containers/app/notification";


export const Route = createFileRoute('/dashboard/notification')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <MetaData url="vaultify.vercel.app" pageTitle="Notification &mdash; Vaultify" />

      <AppLayout routeTitle={''}>
        <NotificationPage/>
      </AppLayout>
    </>
  )
}
