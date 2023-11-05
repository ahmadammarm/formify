"use server"

import { currentUser } from "@clerk/nextjs"

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
    const user = currentUser();

    if(!user) {
        throw new UserNotFoundErr("User not found");
    }
}