import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2019-12-03',
  typescript: true
});
