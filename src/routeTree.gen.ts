/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HelpSupportImport } from './routes/help-support'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as DashboardSettingsImport } from './routes/dashboard/settings'
import { Route as DashboardPaymentsImport } from './routes/dashboard/payments'
import { Route as DashboardGroupsImport } from './routes/dashboard/groups'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthResetPasswordImport } from './routes/auth/reset-password'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgotPasswordImport } from './routes/auth/forgot-password'
import { Route as DashboardExploreIndexImport } from './routes/dashboard/explore/index'
import { Route as DashboardExploreGroupsImport } from './routes/dashboard/explore/$groups'

// Create/Update Routes

const HelpSupportRoute = HelpSupportImport.update({
  id: '/help-support',
  path: '/help-support',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardSettingsRoute = DashboardSettingsImport.update({
  id: '/dashboard/settings',
  path: '/dashboard/settings',
  getParentRoute: () => rootRoute,
} as any)

const DashboardPaymentsRoute = DashboardPaymentsImport.update({
  id: '/dashboard/payments',
  path: '/dashboard/payments',
  getParentRoute: () => rootRoute,
} as any)

const DashboardGroupsRoute = DashboardGroupsImport.update({
  id: '/dashboard/groups',
  path: '/dashboard/groups',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/auth/signup',
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const AuthResetPasswordRoute = AuthResetPasswordImport.update({
  id: '/auth/reset-password',
  path: '/auth/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  id: '/auth/forgot-password',
  path: '/auth/forgot-password',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExploreIndexRoute = DashboardExploreIndexImport.update({
  id: '/dashboard/explore/',
  path: '/dashboard/explore/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExploreGroupsRoute = DashboardExploreGroupsImport.update({
  id: '/dashboard/explore/$groups',
  path: '/dashboard/explore/$groups',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/help-support': {
      id: '/help-support'
      path: '/help-support'
      fullPath: '/help-support'
      preLoaderRoute: typeof HelpSupportImport
      parentRoute: typeof rootRoute
    }
    '/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/auth/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/reset-password': {
      id: '/auth/reset-password'
      path: '/auth/reset-password'
      fullPath: '/auth/reset-password'
      preLoaderRoute: typeof AuthResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/groups': {
      id: '/dashboard/groups'
      path: '/dashboard/groups'
      fullPath: '/dashboard/groups'
      preLoaderRoute: typeof DashboardGroupsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/payments': {
      id: '/dashboard/payments'
      path: '/dashboard/payments'
      fullPath: '/dashboard/payments'
      preLoaderRoute: typeof DashboardPaymentsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/settings': {
      id: '/dashboard/settings'
      path: '/dashboard/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/explore/$groups': {
      id: '/dashboard/explore/$groups'
      path: '/dashboard/explore/$groups'
      fullPath: '/dashboard/explore/$groups'
      preLoaderRoute: typeof DashboardExploreGroupsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/explore/': {
      id: '/dashboard/explore/'
      path: '/dashboard/explore'
      fullPath: '/dashboard/explore'
      preLoaderRoute: typeof DashboardExploreIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/help-support': typeof HelpSupportRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/groups': typeof DashboardGroupsRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/explore/$groups': typeof DashboardExploreGroupsRoute
  '/dashboard/explore': typeof DashboardExploreIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/help-support': typeof HelpSupportRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/groups': typeof DashboardGroupsRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/explore/$groups': typeof DashboardExploreGroupsRoute
  '/dashboard/explore': typeof DashboardExploreIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/help-support': typeof HelpSupportRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/groups': typeof DashboardGroupsRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/auth/': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/explore/$groups': typeof DashboardExploreGroupsRoute
  '/dashboard/explore/': typeof DashboardExploreIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/help-support'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/reset-password'
    | '/auth/signup'
    | '/dashboard/groups'
    | '/dashboard/payments'
    | '/dashboard/settings'
    | '/auth'
    | '/dashboard'
    | '/dashboard/explore/$groups'
    | '/dashboard/explore'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/help-support'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/reset-password'
    | '/auth/signup'
    | '/dashboard/groups'
    | '/dashboard/payments'
    | '/dashboard/settings'
    | '/auth'
    | '/dashboard'
    | '/dashboard/explore/$groups'
    | '/dashboard/explore'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/help-support'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/reset-password'
    | '/auth/signup'
    | '/dashboard/groups'
    | '/dashboard/payments'
    | '/dashboard/settings'
    | '/auth/'
    | '/dashboard/'
    | '/dashboard/explore/$groups'
    | '/dashboard/explore/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  HelpSupportRoute: typeof HelpSupportRoute
  AuthForgotPasswordRoute: typeof AuthForgotPasswordRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthResetPasswordRoute: typeof AuthResetPasswordRoute
  AuthSignupRoute: typeof AuthSignupRoute
  DashboardGroupsRoute: typeof DashboardGroupsRoute
  DashboardPaymentsRoute: typeof DashboardPaymentsRoute
  DashboardSettingsRoute: typeof DashboardSettingsRoute
  AuthIndexRoute: typeof AuthIndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardExploreGroupsRoute: typeof DashboardExploreGroupsRoute
  DashboardExploreIndexRoute: typeof DashboardExploreIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  HelpSupportRoute: HelpSupportRoute,
  AuthForgotPasswordRoute: AuthForgotPasswordRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthResetPasswordRoute: AuthResetPasswordRoute,
  AuthSignupRoute: AuthSignupRoute,
  DashboardGroupsRoute: DashboardGroupsRoute,
  DashboardPaymentsRoute: DashboardPaymentsRoute,
  DashboardSettingsRoute: DashboardSettingsRoute,
  AuthIndexRoute: AuthIndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardExploreGroupsRoute: DashboardExploreGroupsRoute,
  DashboardExploreIndexRoute: DashboardExploreIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/help-support",
        "/auth/forgot-password",
        "/auth/login",
        "/auth/reset-password",
        "/auth/signup",
        "/dashboard/groups",
        "/dashboard/payments",
        "/dashboard/settings",
        "/auth/",
        "/dashboard/",
        "/dashboard/explore/$groups",
        "/dashboard/explore/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/help-support": {
      "filePath": "help-support.tsx"
    },
    "/auth/forgot-password": {
      "filePath": "auth/forgot-password.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/reset-password": {
      "filePath": "auth/reset-password.tsx"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/dashboard/groups": {
      "filePath": "dashboard/groups.tsx"
    },
    "/dashboard/payments": {
      "filePath": "dashboard/payments.tsx"
    },
    "/dashboard/settings": {
      "filePath": "dashboard/settings.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/dashboard/explore/$groups": {
      "filePath": "dashboard/explore/$groups.tsx"
    },
    "/dashboard/explore/": {
      "filePath": "dashboard/explore/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
