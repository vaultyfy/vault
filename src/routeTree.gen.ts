/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as HelpSupportImport } from "./routes/help-support";
import { Route as AboutImport } from "./routes/about";
import { Route as IndexImport } from "./routes/index";
import { Route as DashboardIndexImport } from "./routes/dashboard/index";
import { Route as ConsoleIndexImport } from "./routes/console/index";
import { Route as AuthIndexImport } from "./routes/auth/index";
import { Route as DashboardSettingsImport } from "./routes/dashboard/settings";
import { Route as DashboardPaymentsImport } from "./routes/dashboard/payments";
import { Route as DashboardGroupsImport } from "./routes/dashboard/groups";
import { Route as DashboardExploreImport } from "./routes/dashboard/explore";
import { Route as ConsoleUsersImport } from "./routes/console/users";
import { Route as ConsoleRulesImport } from "./routes/console/rules";
import { Route as DashboardCreateGroupImport } from "./routes/dashboard/create-group";
import { Route as AuthSignupImport } from "./routes/auth/signup";
import { Route as AuthResetPasswordImport } from "./routes/auth/reset-password";
import { Route as AuthLoginImport } from "./routes/auth/login";
import { Route as AuthForgotPasswordImport } from "./routes/auth/forgot-password";
import { Route as ConsolePaymentMonitoringIndexImport } from "./routes/console/payment-monitoring/index";
import { Route as ConsoleLoanMgmtIndexImport } from "./routes/console/loan-mgmt/index";
import { Route as ConsoleGroupMgmtIndexImport } from "./routes/console/group-mgmt/index";
import { Route as ConsolePaymentMonitoringPaymentDetailsImport } from "./routes/console/payment-monitoring/payment-details";
import { Route as ConsoleLoanMgmtLoanDetailsImport } from "./routes/console/loan-mgmt/loan-details";
import { Route as ConsoleGroupMgmtGroupDetailsImport } from "./routes/console/group-mgmt/group-details";
import { Route as DashboardGroupsIndexImport } from "./routes/dashboard/groups/index";
import { Route as DashboardExploreIndexImport } from "./routes/dashboard/explore/index";
import { Route as DashboardGroupsMyGroupImport } from "./routes/dashboard/groups/$my-group";
import { Route as DashboardExploreGroupsImport } from "./routes/dashboard/explore/$groups";

// Create/Update Routes

const HelpSupportRoute = HelpSupportImport.update({
  id: "/help-support",
  path: "/help-support",
  getParentRoute: () => rootRoute,
} as any);

const AboutRoute = AboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardIndexRoute = DashboardIndexImport.update({
  id: "/dashboard/",
  path: "/dashboard/",
  getParentRoute: () => rootRoute,
} as any);

const ConsoleIndexRoute = ConsoleIndexImport.update({
  id: "/console/",
  path: "/console/",
  getParentRoute: () => rootRoute,
} as any);

const AuthIndexRoute = AuthIndexImport.update({
  id: "/auth/",
  path: "/auth/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardSettingsRoute = DashboardSettingsImport.update({
  id: "/dashboard/settings",
  path: "/dashboard/settings",
  getParentRoute: () => rootRoute,
} as any);

const DashboardPaymentsRoute = DashboardPaymentsImport.update({
  id: "/dashboard/payments",
  path: "/dashboard/payments",
  getParentRoute: () => rootRoute,
} as any);

const DashboardCreateGroupRoute = DashboardCreateGroupImport.update({
  id: "/dashboard/create-group",
  path: "/dashboard/create-group",
  getParentRoute: () => rootRoute,
} as any);

const ConsoleUsersRoute = ConsoleUsersImport.update({
  id: "/console/users",
  path: "/console/users",
  getParentRoute: () => rootRoute,
} as any);

const ConsoleRulesRoute = ConsoleRulesImport.update({
  id: "/console/rules",
  path: "/console/rules",
  getParentRoute: () => rootRoute,
} as any);

const AuthSignupRoute = AuthSignupImport.update({
  id: "/auth/signup",
  path: "/auth/signup",
  getParentRoute: () => rootRoute,
} as any);

const AuthResetPasswordRoute = AuthResetPasswordImport.update({
  id: "/auth/reset-password",
  path: "/auth/reset-password",
  getParentRoute: () => rootRoute,
} as any);

const AuthLoginRoute = AuthLoginImport.update({
  id: "/auth/login",
  path: "/auth/login",
  getParentRoute: () => rootRoute,
} as any);

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  id: "/auth/forgot-password",
  path: "/auth/forgot-password",
  getParentRoute: () => rootRoute,
} as any);

const ConsolePaymentMonitoringIndexRoute =
  ConsolePaymentMonitoringIndexImport.update({
    id: "/console/payment-monitoring/",
    path: "/console/payment-monitoring/",
    getParentRoute: () => rootRoute,
  } as any);

const ConsoleLoanMgmtIndexRoute = ConsoleLoanMgmtIndexImport.update({
  id: "/console/loan-mgmt/",
  path: "/console/loan-mgmt/",
  getParentRoute: () => rootRoute,
} as any);

const ConsoleGroupMgmtIndexRoute = ConsoleGroupMgmtIndexImport.update({
  id: "/console/group-mgmt/",
  path: "/console/group-mgmt/",
  getParentRoute: () => rootRoute,
} as any);

const ConsolePaymentMonitoringPaymentDetailsRoute =
  ConsolePaymentMonitoringPaymentDetailsImport.update({
    id: "/console/payment-monitoring/payment-details",
    path: "/console/payment-monitoring/payment-details",
    getParentRoute: () => rootRoute,
  } as any);

const ConsoleLoanMgmtLoanDetailsRoute = ConsoleLoanMgmtLoanDetailsImport.update(
  {
    id: "/console/loan-mgmt/loan-details",
    path: "/console/loan-mgmt/loan-details",
    getParentRoute: () => rootRoute,
  } as any,
);

const ConsoleGroupMgmtGroupDetailsRoute =
  ConsoleGroupMgmtGroupDetailsImport.update({
    id: "/console/group-mgmt/group-details",
    path: "/console/group-mgmt/group-details",
    getParentRoute: () => rootRoute,
  } as any);

const DashboardGroupsIndexRoute = DashboardGroupsIndexImport.update({
  id: "/dashboard/groups/",
  path: "/dashboard/groups/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardExploreIndexRoute = DashboardExploreIndexImport.update({
  id: "/dashboard/explore/",
  path: "/dashboard/explore/",
  getParentRoute: () => rootRoute,
} as any);

const DashboardGroupsMyGroupRoute = DashboardGroupsMyGroupImport.update({
  id: "/dashboard/groups/$my-group",
  path: "/dashboard/groups/$my-group",
  getParentRoute: () => rootRoute,
} as any);

const DashboardExploreGroupsRoute = DashboardExploreGroupsImport.update({
  id: "/dashboard/explore/$groups",
  path: "/dashboard/explore/$groups",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    "/help-support": {
      id: "/help-support";
      path: "/help-support";
      fullPath: "/help-support";
      preLoaderRoute: typeof HelpSupportImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/forgot-password": {
      id: "/auth/forgot-password";
      path: "/auth/forgot-password";
      fullPath: "/auth/forgot-password";
      preLoaderRoute: typeof AuthForgotPasswordImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/login": {
      id: "/auth/login";
      path: "/auth/login";
      fullPath: "/auth/login";
      preLoaderRoute: typeof AuthLoginImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/reset-password": {
      id: "/auth/reset-password";
      path: "/auth/reset-password";
      fullPath: "/auth/reset-password";
      preLoaderRoute: typeof AuthResetPasswordImport;
      parentRoute: typeof rootRoute;
    };
    "/auth/signup": {
      id: "/auth/signup";
      path: "/auth/signup";
      fullPath: "/auth/signup";
      preLoaderRoute: typeof AuthSignupImport;
      parentRoute: typeof rootRoute;
    };
    "/console/rules": {
      id: "/console/rules";
      path: "/console/rules";
      fullPath: "/console/rules";
      preLoaderRoute: typeof ConsoleRulesImport;
      parentRoute: typeof rootRoute;
    };
    "/console/users": {
      id: "/console/users";
      path: "/console/users";
      fullPath: "/console/users";
      preLoaderRoute: typeof ConsoleUsersImport;
      parentRoute: typeof rootRoute;
    };
    "/dashboard/explore": {
      id: "/dashboard/explore";
      path: "/dashboard/explore";
      fullPath: "/dashboard/explore";
      preLoaderRoute: typeof DashboardExploreImport;
      parentRoute: typeof rootRoute;
    };
    "/dashboard/groups": {
      id: "/dashboard/groups";
      path: "/dashboard/groups";
      fullPath: "/dashboard/groups";
      preLoaderRoute: typeof DashboardGroupsImport;

      "/dashboard/create-group": {
        id: "/dashboard/create-group";
        path: "/dashboard/create-group";
        fullPath: "/dashboard/create-group";
        preLoaderRoute: typeof DashboardCreateGroupImport;
        parentRoute: typeof rootRoute;
      };
      "/dashboard/payments": {
        id: "/dashboard/payments";
        path: "/dashboard/payments";
        fullPath: "/dashboard/payments";
        preLoaderRoute: typeof DashboardPaymentsImport;
        parentRoute: typeof rootRoute;
      };
      "/dashboard/settings": {
        id: "/dashboard/settings";
        path: "/dashboard/settings";
        fullPath: "/dashboard/settings";
        preLoaderRoute: typeof DashboardSettingsImport;
        parentRoute: typeof rootRoute;
      };
      "/auth/": {
        id: "/auth/";
        path: "/auth";
        fullPath: "/auth";
        preLoaderRoute: typeof AuthIndexImport;
        parentRoute: typeof rootRoute;
      };
      "/console/": {
        id: "/console/";
        path: "/console";
        fullPath: "/console";
        preLoaderRoute: typeof ConsoleIndexImport;
        parentRoute: typeof rootRoute;
      };
      "/dashboard/": {
        id: "/dashboard/";
        path: "/dashboard";
        fullPath: "/dashboard";
        preLoaderRoute: typeof DashboardIndexImport;
        parentRoute: typeof rootRoute;
      };
      "/console/group-mgmt/group-details": {
        id: "/console/group-mgmt/group-details";
        path: "/console/group-mgmt/group-details";
        fullPath: "/console/group-mgmt/group-details";
        preLoaderRoute: typeof ConsoleGroupMgmtGroupDetailsImport;
        parentRoute: typeof rootRoute;
      };
      "/console/loan-mgmt/loan-details": {
        id: "/console/loan-mgmt/loan-details";
        path: "/console/loan-mgmt/loan-details";
        fullPath: "/console/loan-mgmt/loan-details";
        preLoaderRoute: typeof ConsoleLoanMgmtLoanDetailsImport;
        parentRoute: typeof rootRoute;
      };
      "/console/payment-monitoring/payment-details": {
        id: "/console/payment-monitoring/payment-details";
        path: "/console/payment-monitoring/payment-details";
        fullPath: "/console/payment-monitoring/payment-details";
        preLoaderRoute: typeof ConsolePaymentMonitoringPaymentDetailsImport;
        parentRoute: typeof rootRoute;
      };
      "/console/group-mgmt/": {
        id: "/console/group-mgmt/";
        path: "/console/group-mgmt";
        fullPath: "/console/group-mgmt";
        preLoaderRoute: typeof ConsoleGroupMgmtIndexImport;
        parentRoute: typeof rootRoute;
      };
      "/console/loan-mgmt/": {
        id: "/console/loan-mgmt/";
        path: "/console/loan-mgmt";
        fullPath: "/console/loan-mgmt";
        preLoaderRoute: typeof ConsoleLoanMgmtIndexImport;
        parentRoute: typeof rootRoute;
      };
      "/console/payment-monitoring/": {
        id: "/console/payment-monitoring/";
        path: "/console/payment-monitoring";
        fullPath: "/console/payment-monitoring";
        preLoaderRoute: typeof ConsolePaymentMonitoringIndexImport;

        "/dashboard/explore/$groups": {
          id: "/dashboard/explore/$groups";
          path: "/dashboard/explore/$groups";
          fullPath: "/dashboard/explore/$groups";
          preLoaderRoute: typeof DashboardExploreGroupsImport;
          parentRoute: typeof rootRoute;
        };
        "/dashboard/groups/$my-group": {
          id: "/dashboard/groups/$my-group";
          path: "/dashboard/groups/$my-group";
          fullPath: "/dashboard/groups/$my-group";
          preLoaderRoute: typeof DashboardGroupsMyGroupImport;
          parentRoute: typeof rootRoute;
        };
        "/dashboard/explore/": {
          id: "/dashboard/explore/";
          path: "/dashboard/explore";
          fullPath: "/dashboard/explore";
          preLoaderRoute: typeof DashboardExploreIndexImport;
          parentRoute: typeof rootRoute;
        };
        "/dashboard/groups/": {
          id: "/dashboard/groups/";
          path: "/dashboard/groups";
          fullPath: "/dashboard/groups";
          preLoaderRoute: typeof DashboardGroupsIndexImport;
          parentRoute: typeof rootRoute;
        };
      };
    };
  }
  // Create and export the route tree

  export interface FileRoutesByFullPath {
    "/": typeof IndexRoute;
    "/about": typeof AboutRoute;
    "/help-support": typeof HelpSupportRoute;
    "/auth/forgot-password": typeof AuthForgotPasswordRoute;
    "/auth/login": typeof AuthLoginRoute;
    "/auth/reset-password": typeof AuthResetPasswordRoute;
    "/auth/signup": typeof AuthSignupRoute;
    "/console/rules": typeof ConsoleRulesRoute;
    "/console/users": typeof ConsoleUsersRoute;
    "/dashboard/explore": typeof DashboardExploreRoute;
    "/dashboard/groups": typeof DashboardGroupsRoute;
    "/dashboard/create-group": typeof DashboardCreateGroupRoute;
    "/dashboard/payments": typeof DashboardPaymentsRoute;
    "/dashboard/settings": typeof DashboardSettingsRoute;
    "/auth": typeof AuthIndexRoute;
    "/console": typeof ConsoleIndexRoute;
    "/dashboard": typeof DashboardIndexRoute;
    "/console/group-mgmt/group-details": typeof ConsoleGroupMgmtGroupDetailsRoute;
    "/console/loan-mgmt/loan-details": typeof ConsoleLoanMgmtLoanDetailsRoute;
    "/console/payment-monitoring/payment-details": typeof ConsolePaymentMonitoringPaymentDetailsRoute;
    "/console/group-mgmt": typeof ConsoleGroupMgmtIndexRoute;
    "/console/loan-mgmt": typeof ConsoleLoanMgmtIndexRoute;
    "/console/payment-monitoring": typeof ConsolePaymentMonitoringIndexRoute;
    "/dashboard/explore/$groups": typeof DashboardExploreGroupsRoute;
    "/dashboard/groups/$my-group": typeof DashboardGroupsMyGroupRoute;
    "/dashboard/explore": typeof DashboardExploreIndexRoute;
    "/dashboard/groups": typeof DashboardGroupsIndexRoute;
  }

  export interface FileRoutesByTo {
    "/": typeof IndexRoute;
    "/about": typeof AboutRoute;
    "/help-support": typeof HelpSupportRoute;
    "/auth/forgot-password": typeof AuthForgotPasswordRoute;
    "/auth/login": typeof AuthLoginRoute;
    "/auth/reset-password": typeof AuthResetPasswordRoute;
    "/auth/signup": typeof AuthSignupRoute;
    "/console/rules": typeof ConsoleRulesRoute;
    "/console/users": typeof ConsoleUsersRoute;
    "/dashboard/explore": typeof DashboardExploreRoute;
    "/dashboard/groups": typeof DashboardGroupsRoute;
    "/dashboard/create-group": typeof DashboardCreateGroupRoute;
    "/dashboard/payments": typeof DashboardPaymentsRoute;
    "/dashboard/settings": typeof DashboardSettingsRoute;
    "/auth": typeof AuthIndexRoute;
    "/console": typeof ConsoleIndexRoute;
    "/dashboard": typeof DashboardIndexRoute;
    "/console/group-mgmt/group-details": typeof ConsoleGroupMgmtGroupDetailsRoute;
    "/console/loan-mgmt/loan-details": typeof ConsoleLoanMgmtLoanDetailsRoute;
    "/console/payment-monitoring/payment-details": typeof ConsolePaymentMonitoringPaymentDetailsRoute;
    "/console/group-mgmt": typeof ConsoleGroupMgmtIndexRoute;
    "/console/loan-mgmt": typeof ConsoleLoanMgmtIndexRoute;
    "/console/payment-monitoring": typeof ConsolePaymentMonitoringIndexRoute;
    "/dashboard/explore/$groups": typeof DashboardExploreGroupsRoute;
    "/dashboard/groups/$my-group": typeof DashboardGroupsMyGroupRoute;
    "/dashboard/explore": typeof DashboardExploreIndexRoute;
    "/dashboard/groups": typeof DashboardGroupsIndexRoute;
  }

  export interface FileRoutesById {
    __root__: typeof rootRoute;
    "/": typeof IndexRoute;
    "/about": typeof AboutRoute;
    "/help-support": typeof HelpSupportRoute;
    "/auth/forgot-password": typeof AuthForgotPasswordRoute;
    "/auth/login": typeof AuthLoginRoute;
    "/auth/reset-password": typeof AuthResetPasswordRoute;
    "/auth/signup": typeof AuthSignupRoute;
    "/console/rules": typeof ConsoleRulesRoute;
    "/console/users": typeof ConsoleUsersRoute;
    "/dashboard/explore": typeof DashboardExploreRoute;
    "/dashboard/groups": typeof DashboardGroupsRoute;
    "/dashboard/create-group": typeof DashboardCreateGroupRoute;
    "/dashboard/payments": typeof DashboardPaymentsRoute;
    "/dashboard/settings": typeof DashboardSettingsRoute;
    "/auth/": typeof AuthIndexRoute;
    "/console/": typeof ConsoleIndexRoute;
    "/dashboard/": typeof DashboardIndexRoute;
    "/console/group-mgmt/group-details": typeof ConsoleGroupMgmtGroupDetailsRoute;
    "/console/loan-mgmt/loan-details": typeof ConsoleLoanMgmtLoanDetailsRoute;
    "/console/payment-monitoring/payment-details": typeof ConsolePaymentMonitoringPaymentDetailsRoute;
    "/console/group-mgmt/": typeof ConsoleGroupMgmtIndexRoute;
    "/console/loan-mgmt/": typeof ConsoleLoanMgmtIndexRoute;
    "/console/payment-monitoring/": typeof ConsolePaymentMonitoringIndexRoute;
    "/dashboard/explore/$groups": typeof DashboardExploreGroupsRoute;
    "/dashboard/groups/$my-group": typeof DashboardGroupsMyGroupRoute;
    "/dashboard/explore/": typeof DashboardExploreIndexRoute;
    "/dashboard/groups/": typeof DashboardGroupsIndexRoute;
  }

  export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths:
      | "/"
      | "/about"
      | "/help-support"
      | "/auth/forgot-password"
      | "/auth/login"
      | "/auth/reset-password"
      | "/auth/signup"
      | "/console/rules"
      | "/console/users"
      | "/dashboard/explore"
      | "/dashboard/groups"
      | "/dashboard/create-group"
      | "/dashboard/payments"
      | "/dashboard/settings"
      | "/auth"
      | "/console"
      | "/dashboard"
      | "/console/group-mgmt/group-details"
      | "/console/loan-mgmt/loan-details"
      | "/console/payment-monitoring/payment-details"
      | "/console/group-mgmt"
      | "/console/loan-mgmt"
      | "/console/payment-monitoring"
      | "/dashboard/explore/$groups"
      | "/dashboard/groups/$my-group"
      | "/dashboard/explore"
      | "/dashboard/groups";
    fileRoutesByTo: FileRoutesByTo;
    to:
      | "/"
      | "/about"
      | "/help-support"
      | "/auth/forgot-password"
      | "/auth/login"
      | "/auth/reset-password"
      | "/auth/signup"
      | "/console/rules"
      | "/console/users"
      | "/dashboard/explore"
      | "/dashboard/groups"
      | "/dashboard/create-group"
      | "/dashboard/payments"
      | "/dashboard/settings"
      | "/auth"
      | "/console"
      | "/dashboard"
      | "/console/group-mgmt/group-details"
      | "/console/loan-mgmt/loan-details"
      | "/console/payment-monitoring/payment-details"
      | "/console/group-mgmt"
      | "/console/loan-mgmt"
      | "/console/payment-monitoring"
      | "/dashboard/explore/$groups"
      | "/dashboard/groups/$my-group"
      | "/dashboard/explore"
      | "/dashboard/groups";
    id:
      | "__root__"
      | "/"
      | "/about"
      | "/help-support"
      | "/auth/forgot-password"
      | "/auth/login"
      | "/auth/reset-password"
      | "/auth/signup"
      | "/console/rules"
      | "/console/users"
      | "/dashboard/explore"
      | "/dashboard/groups"
      | "/dashboard/create-group"
      | "/dashboard/payments"
      | "/dashboard/settings"
      | "/auth/"
      | "/console/"
      | "/dashboard/"
      | "/console/group-mgmt/group-details"
      | "/console/loan-mgmt/loan-details"
      | "/console/payment-monitoring/payment-details"
      | "/console/group-mgmt/"
      | "/console/loan-mgmt/"
      | "/console/payment-monitoring/"
      | "/dashboard/explore/$groups"
      | "/dashboard/groups/$my-group"
      | "/dashboard/explore/"
      | "/dashboard/groups/";
    fileRoutesById: FileRoutesById;
  }

  export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
    AboutRoute: typeof AboutRoute;
    HelpSupportRoute: typeof HelpSupportRoute;
    AuthForgotPasswordRoute: typeof AuthForgotPasswordRoute;
    AuthLoginRoute: typeof AuthLoginRoute;
    AuthResetPasswordRoute: typeof AuthResetPasswordRoute;
    AuthSignupRoute: typeof AuthSignupRoute;
    ConsoleRulesRoute: typeof ConsoleRulesRoute;
    ConsoleUsersRoute: typeof ConsoleUsersRoute;
    DashboardExploreRoute: typeof DashboardExploreRoute;
    DashboardGroupsRoute: typeof DashboardGroupsRoute;

    DashboardCreateGroupRoute: typeof DashboardCreateGroupRoute;
    DashboardPaymentsRoute: typeof DashboardPaymentsRoute;
    DashboardSettingsRoute: typeof DashboardSettingsRoute;
    AuthIndexRoute: typeof AuthIndexRoute;
    ConsoleIndexRoute: typeof ConsoleIndexRoute;
    DashboardIndexRoute: typeof DashboardIndexRoute;
    ConsoleGroupMgmtGroupDetailsRoute: typeof ConsoleGroupMgmtGroupDetailsRoute;
    ConsoleLoanMgmtLoanDetailsRoute: typeof ConsoleLoanMgmtLoanDetailsRoute;
    ConsolePaymentMonitoringPaymentDetailsRoute: typeof ConsolePaymentMonitoringPaymentDetailsRoute;
    ConsoleGroupMgmtIndexRoute: typeof ConsoleGroupMgmtIndexRoute;
    ConsoleLoanMgmtIndexRoute: typeof ConsoleLoanMgmtIndexRoute;
    ConsolePaymentMonitoringIndexRoute: typeof ConsolePaymentMonitoringIndexRoute;
    DashboardExploreGroupsRoute: typeof DashboardExploreGroupsRoute;
    DashboardGroupsMyGroupRoute: typeof DashboardGroupsMyGroupRoute;
    DashboardExploreIndexRoute: typeof DashboardExploreIndexRoute;
    DashboardGroupsIndexRoute: typeof DashboardGroupsIndexRoute;
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
    ConsoleUsersRoute: ConsoleUsersRoute,
    DashboardExploreRoute: DashboardExploreRoute,
    DashboardGroupsRoute: DashboardGroupsRoute,
    DashboardCreateGroupRoute: DashboardCreateGroupRoute,
    DashboardPaymentsRoute: DashboardPaymentsRoute,
    DashboardSettingsRoute: DashboardSettingsRoute,
    AuthIndexRoute: AuthIndexRoute,
    ConsoleIndexRoute: ConsoleIndexRoute,
    DashboardIndexRoute: DashboardIndexRoute,
    ConsoleGroupMgmtGroupDetailsRoute: ConsoleGroupMgmtGroupDetailsRoute,
    ConsoleLoanMgmtLoanDetailsRoute: ConsoleLoanMgmtLoanDetailsRoute,
    ConsolePaymentMonitoringPaymentDetailsRoute:
      ConsolePaymentMonitoringPaymentDetailsRoute,
    ConsoleGroupMgmtIndexRoute: ConsoleGroupMgmtIndexRoute,
    ConsoleLoanMgmtIndexRoute: ConsoleLoanMgmtIndexRoute,
    ConsolePaymentMonitoringIndexRoute: ConsolePaymentMonitoringIndexRoute,
    DashboardExploreGroupsRoute: DashboardExploreGroupsRoute,
    DashboardGroupsMyGroupRoute: DashboardGroupsMyGroupRoute,
    DashboardExploreIndexRoute: DashboardExploreIndexRoute,
    DashboardGroupsIndexRoute: DashboardGroupsIndexRoute,
  };

  export const routeTree = rootRoute
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes<FileRouteTypes>();
}

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
        "/console/users",
        "/dashboard/explore",
        "/dashboard/groups",
        "/dashboard/payments",
        "/dashboard/settings",
        "/auth/",
        "/console/",
        "/dashboard/",
        "/console/group-mgmt/group-details",
        "/console/loan-mgmt/loan-details",
        "/console/payment-monitoring/payment-details",
        "/console/group-mgmt/",
        "/console/loan-mgmt/",
        "/console/payment-monitoring/"
        "/dashboard/create-group",
        "/dashboard/payments",
        "/dashboard/settings",
        "/auth/",
        "/dashboard/",
        "/dashboard/explore/$groups",
        "/dashboard/groups/$my-group",
        "/dashboard/explore/",
        "/dashboard/groups/"
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
    "/console/users": {
      "filePath": "console/users.tsx"
    },
    "/dashboard/explore": {
      "filePath": "dashboard/explore.tsx"
    },
    "/dashboard/groups": {
      "filePath": "dashboard/groups.tsx"
    "/dashboard/create-group": {
      "filePath": "dashboard/create-group.tsx"
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
    "/console/group-mgmt/": {
      "filePath": "console/group-mgmt/index.tsx"
    },
    "/console/loan-mgmt/": {
      "filePath": "console/loan-mgmt/index.tsx"
    },
    "/console/payment-monitoring/": {
      "filePath": "console/payment-monitoring/index.tsx"
    "/dashboard/explore/$groups": {
      "filePath": "dashboard/explore/$groups.tsx"
    },
    "/dashboard/groups/$my-group": {
      "filePath": "dashboard/groups/$my-group.tsx"
    },
    "/dashboard/explore/": {
      "filePath": "dashboard/explore/index.tsx"
    },
    "/dashboard/groups/": {
      "filePath": "dashboard/groups/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
