document.addEventListener('DOMContentLoaded', function() {
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Xử lý đăng nhập
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Đăng nhập thành công!');
    });

    // Xử lý đăng ký
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Đăng ký thành công!');
    });

    // Lấy tất cả các nút "Mua Ngay"
    const buyButtons = document.querySelectorAll('.buy-now');

    // Lặp qua từng nút "Mua Ngay" để lắng nghe sự kiện click
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

            // Lấy thông tin sản phẩm từ thuộc tính data của nút
            const productName = button.dataset.name;
            const productPrice = button.dataset.price;

            // Tạo đối tượng sản phẩm
            const product = {
                name: productName,
                price: parseInt(productPrice)
            };

            // Thêm sản phẩm vào giỏ hàng
            addToCart(product);
        });
    });

    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(product) {
        let cart = localStorage.getItem('cart');
        cart = cart ? JSON.parse(cart) : [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Đã thêm ${product.name} vào giỏ hàng.`);
    }
});
