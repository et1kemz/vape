// Данные товаров
const products = [
    {
      name: "Geek Vape Wenax Q Mini - Turquoise",
      description: "Известная китайская компания Geekvape представила свой новый продукт в формате портативной под-системы. Устройство с названием Wenax Q Mini Pod получило привлекательный внешний вид, удобный конструктив, а также поддержку широкого ассортимента картриджей. Новинка Wenax Q Mini Pod изготовлена в небольшом прямоугольном корпусе, в качестве материалов изготовления для которого выступает алюминиевый сплав и пластик. Устройство наделено лаконичным внешним видом и несколькими цветовыми решениями на выбор пользователей.",
      mainImage: "/images/geekvapeWenax-Turquise.jpg",
      colors: [
        { color: "#ff0000", image: "https://via.placeholder.com/600x400/ff0000?text=Товар+1+красный" },
        { color: "#00ff00", image: "https://via.placeholder.com/600x400/00ff00?text=Товар+1+зеленый" },
        { color: "#0000ff", image: "https://via.placeholder.com/600x400/0000ff?text=Товар+1+синий" },
      ],
    },
    {
      name: "Товар 2",
      description: "Описание товара 2. Ещё один отличный выбор!",
      mainImage: "https://via.placeholder.com/600x400?text=Товар+2",
      colors: [
        { color: "#ffff00", image: "https://via.placeholder.com/600x400/ffff00?text=Товар+2+жёлтый" },
        { color: "#ff00ff", image: "https://via.placeholder.com/600x400/ff00ff?text=Товар+2+фиолетовый" },
        { color: "#00ffff", image: "https://via.placeholder.com/600x400/00ffff?text=Товар+2+голубой" },
      ],
    },
  ];
  
  // Элементы DOM
  const mainImage = document.getElementById("main-image");
  const productTitle = document.getElementById("product-title");
  const productDescription = document.getElementById("product-description");
  const colorOptions = document.getElementById("color-options");
  const cartItems = document.getElementById("cart-items");
  const addToCartButton = document.getElementById("add-to-cart");
  
  // Корзина
  let cart = [];
  
  // Текущий выбранный товар
  let currentProduct = null;
  let currentColorImage = null;
  
  // Функция для отображения товара
  function displayProduct(product) {
    currentProduct = product;
    currentColorImage = product.mainImage;
  
    productTitle.textContent = product.name;
    productDescription.textContent = product.description;
    mainImage.src = product.mainImage;
  
    // Очистить предыдущие опции цвета
    colorOptions.innerHTML = "";
  
    // Добавить опции цвета
    product.colors.forEach(colorOption => {
      const colorDiv = document.createElement("div");
      colorDiv.className = "color-option";
      colorDiv.style.backgroundColor = colorOption.color;
  
      // Смена изображения при клике
      colorDiv.addEventListener("click", () => {
        mainImage.src = colorOption.image;
        currentColorImage = colorOption.image; // Запоминаем выбранное изображение
      });
  
      colorOptions.appendChild(colorDiv);
    });
  }
  
  // Функция для добавления товара в корзину
  function addToCart() {
    if (!currentProduct) return;
  
    const cartItem = {
      name: currentProduct.name,
      image: currentColorImage,
    };
  
    cart.push(cartItem); // Добавляем товар в корзину
    updateCartUI(); // Обновляем интерфейс корзины
  
    console.log("Текущая корзина:", cart); // Выводим корзину в консоль
  }
  
  // Функция для обновления интерфейса корзины
  function updateCartUI() {
    cartItems.innerHTML = ""; // Очищаем список корзины
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 5px;">
        ${item.name}
      `;
      cartItems.appendChild(li);
    });
  }
  
  // Обработчик клика по кнопке "Добавить в корзину"
  addToCartButton.addEventListener("click", addToCart);
  
  // Загрузка первого товара при открытии
  displayProduct(products[0]);
  // Загрузка первого товара при открытии
  displayProduct(products[0]);