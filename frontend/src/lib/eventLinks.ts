export const WHATSAPP_LINKS = {
  hackathon: 'https://chat.whatsapp.com/Levkc07bFIPJrgUcvvHx18?mode=gi_t',
  kineticShowdown: 'https://chat.whatsapp.com/IwlQQ0CvlZXDrQuOEysHNk?mode=gi_t',
  workshops: 'https://chat.whatsapp.com/KdtdwL2U4LoLffzGjiy6Nj?mode=gi_t',
  esports: 'https://chat.whatsapp.com/LGGupN5pEaf8oyTq3vNC1F?mode=gi_t',
  openMic: 'https://chat.whatsapp.com/LbqecHlh4iZJXabqiVZPWM?mode=gi_t'
} as const;

export function redirectToWhatsApp(link: string) {
  window.location.href = link;
}
