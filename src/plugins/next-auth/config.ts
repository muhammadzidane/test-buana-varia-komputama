import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const isAuthenticatedPages = ["/dashboard", "/overview", "/"].includes(
        nextUrl.pathname
      );

      if (isAuthenticatedPages && !isLoggedIn) {
        return false; // Redirect unauthenticated users to login page for authenticated pages
      }

      if (!isAuthenticatedPages && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true; // Allow access if not on authenticated page or user is logged in
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [],
} satisfies NextAuthConfig;
