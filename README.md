## Vaultyfy

![hero](/vultifier.png)

Join verified thrift savings groups, contribute securely, and receive payouts in rotation. Transparent, reliable, and built for your goals

## Getting started
- Clone this repo

```shell
git clone https://github.com/kaf-lamed-beyt/vultifier.git
```

- Create a new branch with a name reflecting what you intend to work on

```shell
git checkout -b <branch-name>
```

- Install pnpm if you don't have it already installed on your machine, it is the package manager we're using in this project.

```shell
npm i -g pnpm
```

- Get all the project dependencies

```shell
pnpm i
```

- Get a shallow copy of the environment variables

```shell
cp .env.example .env.local
```

- Run the command below to start the dev server. The local address should be **localhost:3000**
```shell
pnpm run dev
```

- When you're done with your changes, send a PR to the dev branch.


## Tools

These are the tools (or tech) we're using in this repo. The list would increase as we progress.

- [ChakraUI v2](https://v2.chakra-ui.com/) for our design system and UI components. Note we're using ChakraUI's v2 as opposed to the latest version 3 which includes a lot of breaking changes that are not backward compatible
- Icons set from [Lucide](https://lucide.dev/icons/) and [Phosphor Icons](https://phosphoricons.com/)
- React Context API for sharing data across the entire app when needed
- [nuqs](https://nuqs.47ng.com/docs): for a global URL store.
- [Formik](https://formik.org/) to handle complex form states
- [Yup](https://yup-docs.vercel.app/docs/intro) for Object schema validations. This goes in handy with Formik
- [Zustand](https://zustand.docs.pmnd.rs/)
- [SWR](https://swr.vercel.app) for custom data-fetching flows

## App structure (flow)

This section contains how we structure the movement of files around in the codebase. For now, below are some DOs. We'll update them as time goes on;

- Since we don't have an API client, all endpoints should go into the endpoints file, in [src/utils/constants/endpoints.ts](/src/utils/constants/endpoints.ts). It should structured according to purpose or category. For example, all the auth endpoints are in a `readOnly` auth object

```ts
export const auth = {
  signup: `${BASE_URL}/accounts/register/`,
  login: `${BASE_URL}/accounts/login/`,
  logout: `${BASE_URL}/accounts/logout/`,
  refresh: `${BASE_URL}/accounts/refresh/`,
  user: {
    address: `${BASE_URL}/accounts/address/`,
  },
  reset_password: `${BASE_URL}/password_reset/`,
  reset_pwd_confirm: `${BASE_URL}/password_reset/confirm/`,
} as const;
```

So, an example request becomes something like so:

```ts
export const checkout = async (params: CheckoutParams) => {
  const cookie = getCookie("tees");
  const parsedCookie: UserAccessInfo = JSON.parse(cookie as string);

  const url = new URL(app.checkout);
  params.type && url.searchParams.append("type", params.type);
  params.type === "estimation" && url.searchParams.append("deposit", "true");

  try {
    const request = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsedCookie.access}`,
      },
      body: JSON.stringify({
        ...params.data,
      }),
    });

    return request;
  } catch (error) {
    console.error("error", error);
  }
};
```

- All modules should be barrel exported
- Requests that are not of method `"GET"` should go into the `mutations` folder. If they are of type `"GET"` we should colocate them in `queries`, and then have all the modules barrel-exported from a `index.ts` file like so:

```ts
export * from "./endpoints";
export * from "./cookie";
```
donut-progress
