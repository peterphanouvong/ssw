import { Profile, User } from "@prisma/client";

export type UserProfile = User & {
  profile: Profile;
};
