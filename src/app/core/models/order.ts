/**
 * model of order data
 */
export interface Order {
  id: number; // id of cart/basket
  profile: string; // id of user
  status: number; // 1 or 2
  created_at: string; // time of creating order ("2018-08-07T10:37:35.437289Z")
  submitted_at: string; // time of submitting order ("2018-08-07T10:37:35.437289Z")
}
