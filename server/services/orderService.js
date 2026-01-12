const Order = require('../models/Order');
const AppError = require('../utils/appError');

class OrderService {
  async createOrder(userId, orderData) {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = orderData;

    if (orderItems && orderItems.length === 0) {
      throw new AppError('No order items', 400);
    } else {
      const order = new Order({
        orderItems,
        user: userId,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();
      return createdOrder;
    }
  }

  async getOrderById(orderId) {
    const order = await Order.findById(orderId).populate(
      'user',
      'name email'
    );

    if (!order) {
      throw new AppError('Order not found', 404);
    }

    return order;
  }
}

module.exports = new OrderService();
