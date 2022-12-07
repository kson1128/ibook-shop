// import initStripe from 'stripe';
// import { supabase } from '../../supabase/utils/supabase';

// const handler = async (req, res) => {
//   if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
//     return res.status(401).send('You are not authorized to call this API');
//   }
//   const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

//   const customer = await stripe.customers.create({
//     email: req.body.record.email,
//   });

//   console.log('this is customer', customer);

//   let response = await supabase
//     .from('User')
//     .update({
//       stripe_customer: customer,
//     })
//     .eq('id', req.body.record.id);

//   console.log('response', response);

//   res.send(`stripe customer has been created: ${customer.id}`);
// };
// export default handler;
