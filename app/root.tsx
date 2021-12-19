import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import fontStyleUrl from "@fontsource/aguafina-script/index.css";
import mainStyleUrl from "~/styles/main.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontStyleUrl },
    { rel: "stylesheet", href: mainStyleUrl }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
