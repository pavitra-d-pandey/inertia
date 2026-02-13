export const SECRET_ADMIN_PASSWORD = 'mediacell@123';
const SECRET_ADMIN_KEY = 'secret_admin_password';

export function isSecretAdminUnlocked(): boolean {
  return sessionStorage.getItem(SECRET_ADMIN_KEY) === SECRET_ADMIN_PASSWORD;
}

export function unlockSecretAdmin(password: string): boolean {
  if (password !== SECRET_ADMIN_PASSWORD) {
    return false;
  }
  sessionStorage.setItem(SECRET_ADMIN_KEY, password);
  return true;
}

export function getSecretAdminToken(): string {
  return sessionStorage.getItem(SECRET_ADMIN_KEY) || '';
}
