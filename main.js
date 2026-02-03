// Câu 1 khai báo hàm tạo
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2 khởi tạo mảng products
const products = [
  new Product(1, "MacBook Pro", 35000000, 5, "Laptop", true),
  new Product(2, "iPhone 15", 32000000, 0, "Phone", true),
  new Product(3, "AirPods Pro", 6000000, 10, "Accessories", true),
  new Product(4, "Magic Mouse", 3000000, 7, "Accessories", false),
  new Product(5, "iPad Pro", 28000000, 3, "Tablet", true),
  new Product(6, "Apple Watch", 12000000, 8, "Accessories", true),
];

// Câu 3 khởi tạo mảng chưa name và price
const nameAndPriceList = products.map((product) => ({
  name: product.name,
  price: product.price,
}));

console.log(nameAndPriceList);

// Câu 4 lọc sản phẩm còn hàng trong kho
const inStockProducts = products.filter((product) => product.quantity > 0);

console.log(inStockProducts);

// Câu 5 kiểm tra sản phẩm có giá trên 30.000.000
const hasExpensiveProduct = products.some(
  (product) => product.price > 30000000,
);

console.log(hasExpensiveProduct);

// Câu 6 Kiểm tra tất cả sản phẩm "Accessories" có đang bán không
const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable === true);

console.log(allAccessoriesAvailable);

// Câu 7 tính tổng giá trị kho
const totalInventoryValue = products.reduce(
  (total, product) => total + product.price * product.quantity,
  0,
);

console.log(totalInventoryValue);

// Câu 8 dùng for...of duyệt và in
for (const product of products) {
  console.log(
    `${product.name} - ${product.category} - ${
      product.isAvailable ? "Đang bán" : "Ngừng bán"
    }`
  );
}

// Câu 9 dùng for...in
for (const key in products[0]) {
  console.log(key, ":", products[0][key]);
}

// Câu 10 lấy danh sách tên sản phẩm đang bán & còn hàng
const sellingAndInStockNames = products
  .filter(product => product.isAvailable && product.quantity > 0)
  .map(product => product.name);

console.log(sellingAndInStockNames);
