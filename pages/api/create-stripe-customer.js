import initStripe from 'stripe';
import { supabase } from '../../supabase/utils/supabase';

const handler = async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });

  console.log('this is customer', customer);

  await supabase
    .from('User')
    .update({
      stripe_customer: customer,
    })
    .eq('id', req.body.record.id);

  res.send(`stripe customer has been created: ${customer.id}`);
};
export default handler;
