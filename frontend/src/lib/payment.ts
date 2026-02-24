import { fetchJson } from './api';

type RazorpayOrderResponse = {
  key: string;
  orderId: string;
  amount: number;
  currency: string;
};

type RazorpayPaymentResponse = {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
};

const RAZORPAY_SCRIPT_ID = 'razorpay-checkout-script';

function loadRazorpayScript(): Promise<void> {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  const existing = document.getElementById(RAZORPAY_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Unable to load payment gateway')), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = RAZORPAY_SCRIPT_ID;
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Unable to load payment gateway'));
    document.body.appendChild(script);
  });
}

function openCheckout(order: RazorpayOrderResponse, prefill: { name: string; email?: string; contact: string }, eventLabel: string) {
  return new Promise<RazorpayPaymentResponse>((resolve, reject) => {
    if (!window.Razorpay) {
      reject(new Error('Payment gateway not available'));
      return;
    }

    const checkout = new window.Razorpay({
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      name: 'Inertia 2.0',
      description: `${eventLabel} Registration`,
      order_id: order.orderId,
      prefill,
      theme: { color: '#1d4ed8' },
      handler: response => {
        resolve({
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature
        });
      },
      modal: {
        ondismiss: () => reject(new Error('Payment was cancelled'))
      }
    });

    checkout.open();
  });
}

export async function collectPayment(
  event: 'hackathon' | 'robo-race' | 'workshops' | 'kinetic-showdown' | 'esports-valorant' | 'esports-bgmi' | 'esports-solo-valorant' | 'esports-solo-bgmi',
  prefill: { name: string; email?: string; contact: string },
  label: string
) {
  return collectPaymentWithOptions(event, prefill, label);
}

export async function collectPaymentWithOptions(
  event: 'hackathon' | 'robo-race' | 'workshops' | 'kinetic-showdown' | 'esports-valorant' | 'esports-bgmi' | 'esports-solo-valorant' | 'esports-solo-bgmi',
  prefill: { name: string; email?: string; contact: string },
  label: string,
  options?: { memberCount?: number }
) {
  await loadRazorpayScript();
  const order = await fetchJson<RazorpayOrderResponse>('/api/payments/razorpay/order', {
    method: 'POST',
    body: JSON.stringify({ event, ...(options?.memberCount ? { memberCount: options.memberCount } : {}) })
  });
  return openCheckout(order, prefill, label);
}
