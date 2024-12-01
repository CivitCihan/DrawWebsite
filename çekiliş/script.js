// İsimleri ve ürünleri tutmak için listeler
let names = [];
const products = ["alez", "koltuk", "yemek takımı", "Tablet", "Akıllı Saat"]; // Ürün listesi

// Listeye isim ekleme fonksiyonu
function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim(); // İsmi boşluklardan arındır
    if (name) {
        names.push(name); // İsmi listeye ekle
        updateNameList(); // Listeyi güncelle
        nameInput.value = ''; // Giriş alanını temizle
    } else {
        alert('Lütfen bir isim girin!');
    }
}

// Listeyi ekranda güncelleme fonksiyonu
function updateNameList() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = ''; // Listeyi temizle
    names.forEach((name, index) => {
        const li = document.createElement('li'); // Yeni bir liste elemanı oluştur
        li.textContent = name; // İsmi ekle
        nameList.appendChild(li); // Listeye ekle
    });
}

// Kazananı ve ürünü seçme fonksiyonu
function pickWinner() {
    if (names.length === 0) {
        alert('Liste boş! Lütfen önce isim ekleyin.');
        return;
    }
    const winnerIndex = Math.floor(Math.random() * names.length); // Rastgele bir indeks seç
    const winner = names[winnerIndex];
    const productIndex = Math.floor(Math.random() * products.length); // Rastgele ürün seç
    const product = products[productIndex];
    document.getElementById('winnerMessage').textContent = `Kazanan: ${winner}! 🎉 Kazandığı Ürün: ${product}`;
}
