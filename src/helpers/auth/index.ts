import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { envConfig } from "@/constants";
import { authConfig } from "@/plugins/next-auth/config";

export const { signOut, signIn, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const response = await fetch(`${envConfig.baseUrl}/auth/login`, {
          body: JSON.stringify({
            password: credentials?.password,
            user: credentials?.user,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
        });
        const dataResponse = await response.json();

        if (response.ok && dataResponse) {
          return {
            ...dataResponse.data.userData,
            accessToken: dataResponse.data.accessToken,
          };
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(dataResponse.message);
      },
    }),
  ],
});
