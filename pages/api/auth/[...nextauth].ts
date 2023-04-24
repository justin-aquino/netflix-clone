//next auth middleware
//install packages npm i next-auth bcrypt

import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../../../lib/prismadb";
import { compare } from "bcrypt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth({
 providers: [
  GithubProvider({
   clientId: process.env.GITHUB_ID || "",
   clientSecret: process.env.GITHUB_SECRET || "",
  }),
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID || "",
   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  }),
  Credentials({
   id: "credentials",
   name: "Credentials",
   credentials: {
    email: {
     label: "Email",
     type: "text",
    },
    password: {
     label: "Password",
     type: "password",
    },
   },
   async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
     //check if we have credentials.
     throw new Error("Email and password required.");
    }

    //find user using email

    const user = await prismadb.user.findUnique({
     where: {
      email: credentials.email,
     },
    });
    if (!user || !user.hashedPassword) {
     throw new Error("Email does not exist");
    }

    const isCorrectPassword = await compare(
     credentials.password,
     user.hashedPassword
    );

    if (!isCorrectPassword) {
     throw new Error("Incorrect password");
    }
    return user;
   },
  }),
 ],
 pages: {
  signIn: "/auth",
 },
 debug: process.env.NODE_ENV === "development", //this will show you any bugs in the terminal.
 session: {
  strategy: "jwt",
 },
 adapter: PrismaAdapter(prismadb),
 jwt: {
  secret: process.env.NEXTAUTH_JWT_SECRET,
 },
 secret: process.env.NEXTAUTH_SECRET,
});
