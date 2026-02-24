const SECRET_ADMIN_PASSWORDS = ['codehunt@8', 'kineticshowdown@15', 'esports@7', 'openmic@7'];
const SECRET_ADMIN_KEY = 'secret_admin_password';

export function isSecretAdminUnlocked(): boolean {
  const token = (sessionStorage.getItem(SECRET_ADMIN_KEY) || '').trim().toLowerCase();
  return SECRET_ADMIN_PASSWORDS.includes(token);
}

export function unlockSecretAdmin(password: string): boolean {
  const normalized = password.trim().toLowerCase();
  if (!SECRET_ADMIN_PASSWORDS.includes(normalized)) {
    return false;
  }
  sessionStorage.setItem(SECRET_ADMIN_KEY, normalized);
  return true;
}

export function getSecretAdminToken(): string {
  return sessionStorage.getItem(SECRET_ADMIN_KEY) || '';
}
