import { OrderDto } from "./dto/order.dto";
import { ItemDto } from "./dto/item.dto";


function makeItems(quantity = 10): ItemDto[] {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    const obj = new ItemDto();
    obj.id = i;
    obj.name = `Item ${i}`;
    obj.price = Math.random() * 100;
    obj.quantity = Math.floor(Math.random() * 10);
    items.push(obj);
  }
  return items;
}

function makeOrders(quantity = 10): OrderDto[] {
  const orders = [];
  for (let i = 0; i < quantity; i++) {
    const obj = new OrderDto();
    obj.id = i;
    obj.items = makeItems();
    obj.total = 10.0;
    orders.push(obj);
  }
  return orders;
}

export { makeOrders };