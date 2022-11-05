import { ItemDto } from "./item.dto";

export class OrderDto {
  id: number;
  items: ItemDto[];
  total: number;
}
