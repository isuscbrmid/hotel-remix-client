import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  LinksFunction,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import GeneralLayout from './layouts/general-layout';
import globalStylesUrl from "./styles/global.css";

export const meta: MetaFunction = () => {
  return { title: "Posada del Angel" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl
    }
  ];
};

export default function Root() {
  // get styles from context
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <GeneralLayout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </GeneralLayout>
      </body>
    </html>
  );
}
