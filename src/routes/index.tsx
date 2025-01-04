import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MetaData } from "@components/metadata";
import { HomeLayout } from '@layouts/home-layout';
import { Home } from '@containers/home';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <MetaData
        pageTitle="Vultifier &mdash; Home"
        previewImage=""
        url="vultifier.vercel.app"
      />

      <HomeLayout>
        <Home />
      </HomeLayout>
    </>
  )
}
