import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { makeOrders } from './orders.factories';

@Injectable()
export class OrdersService {
  findAll(): OrderDto[] {
    return makeOrders(30);
  }
}
