"use client";

import { type Route } from "@/app/navigation";
import { usePathname } from "next/navigation";
import React from "react";

import classes from "./Header.module.css";

export default function HeaderNavLink(route: Route) {
  const pathname = usePathname();

  if (route.type === "function") {
    return <a className={classes.link}>{route.label}</a>;
  }

  const isActive = route.exactMatch
    ? pathname === route.href
    : pathname.startsWith(route.href);

  if (route.type === "link") {
    return (
      <a
        href={route.href}
        className={classes.link}
        data-active={isActive || undefined}
      >
        {route.label}
      </a>
    );
  }
}
