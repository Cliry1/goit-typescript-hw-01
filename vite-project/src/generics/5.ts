export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type Roles = Record<UserRole, string>

const RoleDescription: Roles = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};