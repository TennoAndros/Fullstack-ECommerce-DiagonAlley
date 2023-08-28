"use strict";
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// @ts-ignore
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { userName, email, products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "paypal"],
        customer_email: email,
        mode: "payment",
        success_url: `${process.env.USER_PORT}/checkout/success`,
        cancel_url: `${process.env.USER_PORT}`,
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      return {
        error: {
          message: "There was a problem with the Payment. Please try again.",
        },
      };
    }
  },
}));
