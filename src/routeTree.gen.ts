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
import { Route as ConsoleIndexImport } from './routes/console/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as DashboardPaymentsImport } from './routes/dashboard/payments'
import { Route as DashboardNotificationImport } from './routes/dashboard/notification'
import { Route as DashboardMilestonesImport } from './routes/dashboard/milestones'
import { Route as DashboardCreateGroupImport } from './routes/dashboard/create-group'
import { Route as DashboardCalendarImport } from './routes/dashboard/calendar'
import { Route as ConsoleRulesImport } from './routes/console/rules'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthResetPasswordImport } from './routes/auth/reset-password'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgotPasswordImport } from './routes/auth/forgot-password'
import { Route as DashboardSettingsIndexImport } from './routes/dashboard/settings/index'
import { Route as DashboardGroupsIndexImport } from './routes/dashboard/groups/index'
import { Route as DashboardExploreIndexImport } from './routes/dashboard/explore/index'
import { Route as ConsoleUsersIndexImport } from './routes/console/users/index'
import { Route as ConsolePaymentMonitoringIndexImport } from './routes/console/payment-monitoring/index'
import { Route as ConsoleLoanMgmtIndexImport } from './routes/console/loan-mgmt/index'
import { Route as ConsoleGroupMgmtIndexImport } from './routes/console/group-mgmt/index'
import { Route as DashboardSettingsPersonalInfoImport } from './routes/dashboard/settings/personal-info'
import { Route as DashboardSettingsPaymentsPayoutsImport } from './routes/dashboard/settings/payments-payouts'
import { Route as DashboardSettingsLoginSecurityImport } from './routes/dashboard/settings/login-security'
import { Route as DashboardGroupsGroupIdImport } from './routes/dashboard/groups/$groupId'
import { Route as DashboardExploreGroupIdImport } from './routes/dashboard/explore/$groupId'
import { Route as ConsoleUsersUserDetailsImport } from './routes/console/users/user-details'
import { Route as ConsolePaymentMonitoringPaymentDetailsImport } from './routes/console/payment-monitoring/payment-details'
import { Route as ConsoleLoanMgmtLoanDetailsImport } from './routes/console/loan-mgmt/loan-details'
import { Route as ConsoleGroupMgmtGroupDetailsImport } from './routes/console/group-mgmt/group-details'

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

const ConsoleIndexRoute = ConsoleIndexImport.update({
  id: '/console/',
  path: '/console/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardPaymentsRoute = DashboardPaymentsImport.update({
  id: '/dashboard/payments',
  path: '/dashboard/payments',
  getParentRoute: () => rootRoute,
} as any)

const DashboardNotificationRoute = DashboardNotificationImport.update({
  id: '/dashboard/notification',
  path: '/dashboard/notification',
  getParentRoute: () => rootRoute,
} as any)

const DashboardMilestonesRoute = DashboardMilestonesImport.update({
  id: '/dashboard/milestones',
  path: '/dashboard/milestones',
  getParentRoute: () => rootRoute,
} as any)

const DashboardCreateGroupRoute = DashboardCreateGroupImport.update({
  id: '/dashboard/create-group',
  path: '/dashboard/create-group',
  getParentRoute: () => rootRoute,
} as any)

const DashboardCalendarRoute = DashboardCalendarImport.update({
  id: '/dashboard/calendar',
  path: '/dashboard/calendar',
  getParentRoute: () => rootRoute,
} as any)

const ConsoleRulesRoute = ConsoleRulesImport.update({
  id: '/console/rules',
  path: '/console/rules',
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

const DashboardSettingsIndexRoute = DashboardSettingsIndexImport.update({
  id: '/dashboard/settings/',
  path: '/dashboard/settings/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardGroupsIndexRoute = DashboardGroupsIndexImport.update({
  id: '/dashboard/groups/',
  path: '/dashboard/groups/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExploreIndexRoute = DashboardExploreIndexImport.update({
  id: '/dashboard/explore/',
  path: '/dashboard/explore/',
  getParentRoute: () => rootRoute,
} as any)

const ConsoleUsersIndexRoute = ConsoleUsersIndexImport.update({
  id: '/console/users/',
  path: '/console/users/',
  getParentRoute: () => rootRoute,
} as any)

const ConsolePaymentMonitoringIndexRoute =
  ConsolePaymentMonitoringIndexImport.update({
    id: '/console/payment-monitoring/',
    path: '/console/payment-monitoring/',
    getParentRoute: () => rootRoute,
  } as any)

const ConsoleLoanMgmtIndexRoute = ConsoleLoanMgmtIndexImport.update({
  id: '/console/loan-mgmt/',
  path: '/console/loan-mgmt/',
  getParentRoute: () => rootRoute,
} as any)

const ConsoleGroupMgmtIndexRoute = ConsoleGroupMgmtIndexImport.update({
  id: '/console/group-mgmt/',
  path: '/console/group-mgmt/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardSettingsPersonalInfoRoute =
  DashboardSettingsPersonalInfoImport.update({
    id: '/dashboard/settings/personal-info',
    path: '/dashboard/settings/personal-info',
    getParentRoute: () => rootRoute,
  } as any)

const DashboardSettingsPaymentsPayoutsRoute =
  DashboardSettingsPaymentsPayoutsImport.update({
    id: '/dashboard/settings/payments-payouts',
    path: '/dashboard/settings/payments-payouts',
    getParentRoute: () => rootRoute,
  } as any)

const DashboardSettingsLoginSecurityRoute =
  DashboardSettingsLoginSecurityImport.update({
    id: '/dashboard/settings/login-security',
    path: '/dashboard/settings/login-security',
    getParentRoute: () => rootRoute,
  } as any)

const DashboardGroupsGroupIdRoute = DashboardGroupsGroupIdImport.update({
  id: '/dashboard/groups/$groupId',
  path: '/dashboard/groups/$groupId',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExploreGroupIdRoute = DashboardExploreGroupIdImport.update({
  id: '/dashboard/explore/$groupId',
  path: '/dashboard/explore/$groupId',
  getParentRoute: () => rootRoute,
} as any)

const ConsoleUsersUserDetailsRoute = ConsoleUsersUserDetailsImport.update({
  id: '/console/users/user-details',
  path: '/console/users/user-details',
  getParentRoute: () => rootRoute,
} as any)

const ConsolePaymentMonitoringPaymentDetailsRoute =
  ConsolePaymentMonitoringPaymentDetailsImport.update({
    id: '/console/payment-monitoring/payment-details',
    path: '/console/payment-monitoring/payment-details',
    getParentRoute: () => rootRoute,
  } as any)

const ConsoleLoanMgmtLoanDetailsRoute = ConsoleLoanMgmtLoanDetailsImport.update(
  {
    id: '/console/loan-mgmt/loan-details',
    path: '/console/loan-mgmt/loan-details',
    getParentRoute: () => rootRoute,
  } as any,
)

const ConsoleGroupMgmtGroupDetailsRoute =
  ConsoleGroupMgmtGroupDetailsImport.update({
    id: '/console/group-mgmt/group-details',
    path: '/console/group-mgmt/group-details',
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
    '/console/rules': {
      id: '/console/rules'
      path: '/console/rules'
      fullPath: '/console/rules'
      preLoaderRoute: typeof ConsoleRulesImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/calendar': {
      id: '/dashboard/calendar'
      path: '/dashboard/calendar'
      fullPath: '/dashboard/calendar'
      preLoaderRoute: typeof DashboardCalendarImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/create-group': {
      id: '/dashboard/create-group'
      path: '/dashboard/create-group'
      fullPath: '/dashboard/create-group'
      preLoaderRoute: typeof DashboardCreateGroupImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/milestones': {
      id: '/dashboard/milestones'
      path: '/dashboard/milestones'
      fullPath: '/dashboard/milestones'
      preLoaderRoute: typeof DashboardMilestonesImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/notification': {
      id: '/dashboard/notification'
      path: '/dashboard/notification'
      fullPath: '/dashboard/notification'
      preLoaderRoute: typeof DashboardNotificationImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/payments': {
      id: '/dashboard/payments'
      path: '/dashboard/payments'
      fullPath: '/dashboard/payments'
      preLoaderRoute: typeof DashboardPaymentsImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/console/': {
      id: '/console/'
      path: '/console'
      fullPath: '/console'
      preLoaderRoute: typeof ConsoleIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/console/group-mgmt/group-details': {
      id: '/console/group-mgmt/group-details'
      path: '/console/group-mgmt/group-details'
      fullPath: '/console/group-mgmt/group-details'
      preLoaderRoute: typeof ConsoleGroupMgmtGroupDetailsImport
      parentRoute: typeof rootRoute
    }
    '/console/loan-mgmt/loan-details': {
      id: '/console/loan-mgmt/loan-details'
      path: '/console/loan-mgmt/loan-details'
      fullPath: '/console/loan-mgmt/loan-details'
      preLoaderRoute: typeof ConsoleLoanMgmtLoanDetailsImport
      parentRoute: typeof rootRoute
    }
    '/console/payment-monitoring/payment-details': {
      id: '/console/payment-monitoring/payment-details'
      path: '/console/payment-monitoring/payment-details'
      fullPath: '/console/payment-monitoring/payment-details'
      preLoaderRoute: typeof ConsolePaymentMonitoringPaymentDetailsImport
      parentRoute: typeof rootRoute
    }
    '/console/users/user-details': {
      id: '/console/users/user-details'
      path: '/console/users/user-details'
      fullPath: '/console/users/user-details'
      preLoaderRoute: typeof ConsoleUsersUserDetailsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/explore/$groupId': {
      id: '/dashboard/explore/$groupId'
      path: '/dashboard/explore/$groupId'
      fullPath: '/dashboard/explore/$groupId'
      preLoaderRoute: typeof DashboardExploreGroupIdImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/groups/$groupId': {
      id: '/dashboard/groups/$groupId'
      path: '/dashboard/groups/$groupId'
      fullPath: '/dashboard/groups/$groupId'
      preLoaderRoute: typeof DashboardGroupsGroupIdImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/settings/login-security': {
      id: '/dashboard/settings/login-security'
      path: '/dashboard/settings/login-security'
      fullPath: '/dashboard/settings/login-security'
      preLoaderRoute: typeof DashboardSettingsLoginSecurityImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/settings/payments-payouts': {
      id: '/dashboard/settings/payments-payouts'
      path: '/dashboard/settings/payments-payouts'
      fullPath: '/dashboard/settings/payments-payouts'
      preLoaderRoute: typeof DashboardSettingsPaymentsPayoutsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/settings/personal-info': {
      id: '/dashboard/settings/personal-info'
      path: '/dashboard/settings/personal-info'
      fullPath: '/dashboard/settings/personal-info'
      preLoaderRoute: typeof DashboardSettingsPersonalInfoImport
      parentRoute: typeof rootRoute
    }
    '/console/group-mgmt/': {
      id: '/console/group-mgmt/'
      path: '/console/group-mgmt'
      fullPath: '/console/group-mgmt'
      preLoaderRoute: typeof ConsoleGroupMgmtIndexImport
      parentRoute: typeof rootRoute
    }
    '/console/loan-mgmt/': {
      id: '/console/loan-mgmt/'
      path: '/console/loan-mgmt'
      fullPath: '/console/loan-mgmt'
      preLoaderRoute: typeof ConsoleLoanMgmtIndexImport
      parentRoute: typeof rootRoute
    }
    '/console/payment-monitoring/': {
      id: '/console/payment-monitoring/'
      path: '/console/payment-monitoring'
      fullPath: '/console/payment-monitoring'
      preLoaderRoute: typeof ConsolePaymentMonitoringIndexImport
      parentRoute: typeof rootRoute
    }
    '/console/users/': {
      id: '/console/users/'
      path: '/console/users'
      fullPath: '/console/users'
      preLoaderRoute: typeof ConsoleUsersIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/explore/': {
      id: '/dashboard/explore/'
      path: '/dashboard/explore'
      fullPath: '/dashboard/explore'
      preLoaderRoute: typeof DashboardExploreIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/groups/': {
      id: '/dashboard/groups/'
      path: '/dashboard/groups'
      fullPath: '/dashboard/groups'
      preLoaderRoute: typeof DashboardGroupsIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/settings/': {
      id: '/dashboard/settings/'
      path: '/dashboard/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsIndexImport
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
  '/console/rules': typeof ConsoleRulesRoute
  '/dashboard/calendar': typeof DashboardCalendarRoute
  '/dashboard/create-group': typeof DashboardCreateGroupRoute
  '/dashboard/milestones': typeof DashboardMilestonesRoute
  '/dashboard/notification': typeof DashboardNotificationRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/auth': typeof AuthIndexRoute
  '/console': typeof ConsoleIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/console/group-mgmt/group-details': typeof ConsoleGroupMgmtGroupDetailsRoute
  '/console/loan-mgmt/loan-details': typeof ConsoleLoanMgmtLoanDetailsRoute
  '/console/payment-monitoring/payment-details': typeof ConsolePaymentMonitoringPaymentDetailsRoute
  '/console/users/user-details': typeof ConsoleUsersUserDetailsRoute
  '/dashboard/explore/$groupId': typeof DashboardExploreGroupIdRoute
  '/dashboard/groups/$groupId': typeof DashboardGroupsGroupIdRoute
  '/dashboard/settings/login-security': typeof DashboardSettingsLoginSecurityRoute
  '/dashboard/settings/payments-payouts': typeof DashboardSettingsPaymentsPayoutsRoute
  '/dashboard/settings/personal-info': typeof DashboardSettingsPersonalInfoRoute
  '/console/group-mgmt': typeof ConsoleGroupMgmtIndexRoute
  '/console/loan-mgmt': typeof ConsoleLoanMgmtIndexRoute
  '/console/payment-monitoring': typeof ConsolePaymentMonitoringIndexRoute
  '/console/users': typeof ConsoleUsersIndexRoute
  '/dashboard/explore': typeof DashboardExploreIndexRoute
  '/dashboard/groups': typeof DashboardGroupsIndexRoute
  '/dashboard/settings': typeof DashboardSettingsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/help-support': typeof HelpSupportRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/signup': typeof AuthSignupRoute
  '/console/rules': typeof ConsoleRulesRoute
  '/dashboard/calendar': typeof DashboardCalendarRoute
  '/dashboard/create-group': typeof DashboardCreateGroupRoute
  '/dashboard/milestones': typeof DashboardMilestonesRoute
  '/dashboard/notification': typeof DashboardNotificationRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/auth': typeof AuthIndexRoute
  '/console': typeof ConsoleIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/console/group-mgmt/group-details': typeof ConsoleGroupMgmtGroupDetailsRoute
  '/console/loan-mgmt/loan-details': typeof ConsoleLoanMgmtLoanDetailsRoute
  '/console/payment-monitoring/payment-details': typeof ConsolePaymentMonitoringPaymentDetailsRoute
  '/console/users/user-details': typeof ConsoleUsersUserDetailsRoute
  '/dashboard/explore/$groupId': typeof DashboardExploreGroupIdRoute
  '/dashboard/groups/$groupId': typeof DashboardGroupsGroupIdRoute
  '/dashboard/settings/login-security': typeof DashboardSettingsLoginSecurityRoute
  '/dashboard/settings/payments-payouts': typeof DashboardSettingsPaymentsPayoutsRoute
  '/dashboard/settings/personal-info': typeof DashboardSettingsPersonalInfoRoute
  '/console/group-mgmt': typeof ConsoleGroupMgmtIndexRoute
  '/console/loan-mgmt': typeof ConsoleLoanMgmtIndexRoute
  '/console/payment-monitoring': typeof ConsolePaymentMonitoringIndexRoute
  '/console/users': typeof ConsoleUsersIndexRoute
  '/dashboard/explore': typeof DashboardExploreIndexRoute
  '/dashboard/groups': typeof DashboardGroupsIndexRoute
  '/dashboard/settings': typeof DashboardSettingsIndexRoute
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
  '/console/rules': typeof ConsoleRulesRoute
  '/dashboard/calendar': typeof DashboardCalendarRoute
  '/dashboard/create-group': typeof DashboardCreateGroupRoute
  '/dashboard/milestones': typeof DashboardMilestonesRoute
  '/dashboard/notification': typeof DashboardNotificationRoute
  '/dashboard/payments': typeof DashboardPaymentsRoute
  '/auth/': typeof AuthIndexRoute
  '/console/': typeof ConsoleIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/console/group-mgmt/group-details': typeof ConsoleGroupMgmtGroupDetailsRoute
  '/console/loan-mgmt/loan-details': typeof ConsoleLoanMgmtLoanDetailsRoute
  '/console/payment-monitoring/payment-details': typeof ConsolePaymentMonitoringPaymentDetailsRoute
  '/console/users/user-details': typeof ConsoleUsersUserDetailsRoute
  '/dashboard/explore/$groupId': typeof DashboardExploreGroupIdRoute
  '/dashboard/groups/$groupId': typeof DashboardGroupsGroupIdRoute
  '/dashboard/settings/login-security': typeof DashboardSettingsLoginSecurityRoute
  '/dashboard/settings/payments-payouts': typeof DashboardSettingsPaymentsPayoutsRoute
  '/dashboard/settings/personal-info': typeof DashboardSettingsPersonalInfoRoute
  '/console/group-mgmt/': typeof ConsoleGroupMgmtIndexRoute
  '/console/loan-mgmt/': typeof ConsoleLoanMgmtIndexRoute
  '/console/payment-monitoring/': typeof ConsolePaymentMonitoringIndexRoute
  '/console/users/': typeof ConsoleUsersIndexRoute
  '/dashboard/explore/': typeof DashboardExploreIndexRoute
  '/dashboard/groups/': typeof DashboardGroupsIndexRoute
  '/dashboard/settings/': typeof DashboardSettingsIndexRoute
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
    | '/console/rules'
    | '/dashboard/calendar'
    | '/dashboard/create-group'
    | '/dashboard/milestones'
    | '/dashboard/notification'
    | '/dashboard/payments'
    | '/auth'
    | '/console'
    | '/dashboard'
    | '/console/group-mgmt/group-details'
    | '/console/loan-mgmt/loan-details'
    | '/console/payment-monitoring/payment-details'
    | '/console/users/user-details'
    | '/dashboard/explore/$groupId'
    | '/dashboard/groups/$groupId'
    | '/dashboard/settings/login-security'
    | '/dashboard/settings/payments-payouts'
    | '/dashboard/settings/personal-info'
    | '/console/group-mgmt'
    | '/console/loan-mgmt'
    | '/console/payment-monitoring'
    | '/console/users'
    | '/dashboard/explore'
    | '/dashboard/groups'
    | '/dashboard/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/help-support'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/reset-password'
    | '/auth/signup'
    | '/console/rules'
    | '/dashboard/calendar'
    | '/dashboard/create-group'
    | '/dashboard/milestones'
    | '/dashboard/notification'
    | '/dashboard/payments'
    | '/auth'
    | '/console'
    | '/dashboard'
    | '/console/group-mgmt/group-details'
    | '/console/loan-mgmt/loan-details'
    | '/console/payment-monitoring/payment-details'
    | '/console/users/user-details'
    | '/dashboard/explore/$groupId'
    | '/dashboard/groups/$groupId'
    | '/dashboard/settings/login-security'
    | '/dashboard/settings/payments-payouts'
    | '/dashboard/settings/personal-info'
    | '/console/group-mgmt'
    | '/console/loan-mgmt'
    | '/console/payment-monitoring'
    | '/console/users'
    | '/dashboard/explore'
    | '/dashboard/groups'
    | '/dashboard/settings'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/help-support'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/reset-password'
    | '/auth/signup'
    | '/console/rules'
    | '/dashboard/calendar'
    | '/dashboard/create-group'
    | '/dashboard/milestones'
    | '/dashboard/notification'
    | '/dashboard/payments'
    | '/auth/'
    | '/console/'
    | '/dashboard/'
    | '/console/group-mgmt/group-details'
    | '/console/loan-mgmt/loan-details'
    | '/console/payment-monitoring/payment-details'
    | '/console/users/user-details'
    | '/dashboard/explore/$groupId'
    | '/dashboard/groups/$groupId'
    | '/dashboard/settings/login-security'
    | '/dashboard/settings/payments-payouts'
    | '/dashboard/settings/personal-info'
    | '/console/group-mgmt/'
    | '/console/loan-mgmt/'
    | '/console/payment-monitoring/'
    | '/console/users/'
    | '/dashboard/explore/'
    | '/dashboard/groups/'
    | '/dashboard/settings/'
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
  ConsoleRulesRoute: typeof ConsoleRulesRoute
  DashboardCalendarRoute: typeof DashboardCalendarRoute
  DashboardCreateGroupRoute: typeof DashboardCreateGroupRoute
  DashboardMilestonesRoute: typeof DashboardMilestonesRoute
  DashboardNotificationRoute: typeof DashboardNotificationRoute
  DashboardPaymentsRoute: typeof DashboardPaymentsRoute
  AuthIndexRoute: typeof AuthIndexRoute
  ConsoleIndexRoute: typeof ConsoleIndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  ConsoleGroupMgmtGroupDetailsRoute: typeof ConsoleGroupMgmtGroupDetailsRoute
  ConsoleLoanMgmtLoanDetailsRoute: typeof ConsoleLoanMgmtLoanDetailsRoute
  ConsolePaymentMonitoringPaymentDetailsRoute: typeof ConsolePaymentMonitoringPaymentDetailsRoute
  ConsoleUsersUserDetailsRoute: typeof ConsoleUsersUserDetailsRoute
  DashboardExploreGroupIdRoute: typeof DashboardExploreGroupIdRoute
  DashboardGroupsGroupIdRoute: typeof DashboardGroupsGroupIdRoute
  DashboardSettingsLoginSecurityRoute: typeof DashboardSettingsLoginSecurityRoute
  DashboardSettingsPaymentsPayoutsRoute: typeof DashboardSettingsPaymentsPayoutsRoute
  DashboardSettingsPersonalInfoRoute: typeof DashboardSettingsPersonalInfoRoute
  ConsoleGroupMgmtIndexRoute: typeof ConsoleGroupMgmtIndexRoute
  ConsoleLoanMgmtIndexRoute: typeof ConsoleLoanMgmtIndexRoute
  ConsolePaymentMonitoringIndexRoute: typeof ConsolePaymentMonitoringIndexRoute
  ConsoleUsersIndexRoute: typeof ConsoleUsersIndexRoute
  DashboardExploreIndexRoute: typeof DashboardExploreIndexRoute
  DashboardGroupsIndexRoute: typeof DashboardGroupsIndexRoute
  DashboardSettingsIndexRoute: typeof DashboardSettingsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  HelpSupportRoute: HelpSupportRoute,
  AuthForgotPasswordRoute: AuthForgotPasswordRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthResetPasswordRoute: AuthResetPasswordRoute,
  AuthSignupRoute: AuthSignupRoute,
  ConsoleRulesRoute: ConsoleRulesRoute,
  DashboardCalendarRoute: DashboardCalendarRoute,
  DashboardCreateGroupRoute: DashboardCreateGroupRoute,
  DashboardMilestonesRoute: DashboardMilestonesRoute,
  DashboardNotificationRoute: DashboardNotificationRoute,
  DashboardPaymentsRoute: DashboardPaymentsRoute,
  AuthIndexRoute: AuthIndexRoute,
  ConsoleIndexRoute: ConsoleIndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  ConsoleGroupMgmtGroupDetailsRoute: ConsoleGroupMgmtGroupDetailsRoute,
  ConsoleLoanMgmtLoanDetailsRoute: ConsoleLoanMgmtLoanDetailsRoute,
  ConsolePaymentMonitoringPaymentDetailsRoute:
    ConsolePaymentMonitoringPaymentDetailsRoute,
  ConsoleUsersUserDetailsRoute: ConsoleUsersUserDetailsRoute,
  DashboardExploreGroupIdRoute: DashboardExploreGroupIdRoute,
  DashboardGroupsGroupIdRoute: DashboardGroupsGroupIdRoute,
  DashboardSettingsLoginSecurityRoute: DashboardSettingsLoginSecurityRoute,
  DashboardSettingsPaymentsPayoutsRoute: DashboardSettingsPaymentsPayoutsRoute,
  DashboardSettingsPersonalInfoRoute: DashboardSettingsPersonalInfoRoute,
  ConsoleGroupMgmtIndexRoute: ConsoleGroupMgmtIndexRoute,
  ConsoleLoanMgmtIndexRoute: ConsoleLoanMgmtIndexRoute,
  ConsolePaymentMonitoringIndexRoute: ConsolePaymentMonitoringIndexRoute,
  ConsoleUsersIndexRoute: ConsoleUsersIndexRoute,
  DashboardExploreIndexRoute: DashboardExploreIndexRoute,
  DashboardGroupsIndexRoute: DashboardGroupsIndexRoute,
  DashboardSettingsIndexRoute: DashboardSettingsIndexRoute,
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
        "/console/rules",
        "/dashboard/calendar",
        "/dashboard/create-group",
        "/dashboard/milestones",
        "/dashboard/notification",
        "/dashboard/payments",
        "/auth/",
        "/console/",
        "/dashboard/",
        "/console/group-mgmt/group-details",
        "/console/loan-mgmt/loan-details",
        "/console/payment-monitoring/payment-details",
        "/console/users/user-details",
        "/dashboard/explore/$groupId",
        "/dashboard/groups/$groupId",
        "/dashboard/settings/login-security",
        "/dashboard/settings/payments-payouts",
        "/dashboard/settings/personal-info",
        "/console/group-mgmt/",
        "/console/loan-mgmt/",
        "/console/payment-monitoring/",
        "/console/users/",
        "/dashboard/explore/",
        "/dashboard/groups/",
        "/dashboard/settings/"
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
    "/console/rules": {
      "filePath": "console/rules.tsx"
    },
    "/dashboard/calendar": {
      "filePath": "dashboard/calendar.tsx"
    },
    "/dashboard/create-group": {
      "filePath": "dashboard/create-group.tsx"
    },
    "/dashboard/milestones": {
      "filePath": "dashboard/milestones.tsx"
    },
    "/dashboard/notification": {
      "filePath": "dashboard/notification.tsx"
    },
    "/dashboard/payments": {
      "filePath": "dashboard/payments.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/console/": {
      "filePath": "console/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/console/group-mgmt/group-details": {
      "filePath": "console/group-mgmt/group-details.tsx"
    },
    "/console/loan-mgmt/loan-details": {
      "filePath": "console/loan-mgmt/loan-details.tsx"
    },
    "/console/payment-monitoring/payment-details": {
      "filePath": "console/payment-monitoring/payment-details.tsx"
    },
    "/console/users/user-details": {
      "filePath": "console/users/user-details.tsx"
    },
    "/dashboard/explore/$groupId": {
      "filePath": "dashboard/explore/$groupId.tsx"
    },
    "/dashboard/groups/$groupId": {
      "filePath": "dashboard/groups/$groupId.tsx"
    },
    "/dashboard/settings/login-security": {
      "filePath": "dashboard/settings/login-security.tsx"
    },
    "/dashboard/settings/payments-payouts": {
      "filePath": "dashboard/settings/payments-payouts.tsx"
    },
    "/dashboard/settings/personal-info": {
      "filePath": "dashboard/settings/personal-info.tsx"
    },
    "/console/group-mgmt/": {
      "filePath": "console/group-mgmt/index.tsx"
    },
    "/console/loan-mgmt/": {
      "filePath": "console/loan-mgmt/index.tsx"
    },
    "/console/payment-monitoring/": {
      "filePath": "console/payment-monitoring/index.tsx"
    },
    "/console/users/": {
      "filePath": "console/users/index.tsx"
    },
    "/dashboard/explore/": {
      "filePath": "dashboard/explore/index.tsx"
    },
    "/dashboard/groups/": {
      "filePath": "dashboard/groups/index.tsx"
    },
    "/dashboard/settings/": {
      "filePath": "dashboard/settings/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
