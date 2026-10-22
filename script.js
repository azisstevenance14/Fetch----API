// 1. Tangkap elemen DOM
const btnFetch = document.getElementById('btnFetch');
const userList = document.getElementById('userList');

// 2. Fungsi Asynchronous untuk mengambil data dari server
async function getUsers() {
  try {
    userList.innerHTML = '<li>Memuat data...</li>';

    // Await 1: Minta data ke server/URL API
    const response = await fetch('data.json');
    
    
    // Validasi sederhana jika URL salah/error dari server
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server!');
    }

    // Await 2: Ubah data respon menjadi format JSON/Object JavaScript
    const users = await response.json();
    console.log(users);
    // Kosongkan list sebelum diisi data baru
    userList.innerHTML = '';

    // Loop data yang berhasil didapat lalu tampilkan di HTML
    users.forEach(function(user) {
      const li = document.createElement('li');
      li.textContent = `${user.nama} ${user.Umur}`;
      userList.appendChild(li);
    });

  } catch (error) {
    // Tangkap error jika koneksi terputus atau URL salah
    console.error('Terjadi Masalah:', error);
    userList.innerHTML = `<li style="color: red;">Error: ${error.message}</li>`;
  }
}

// 3. Pasang Event Listener ke tombol
btnFetch.addEventListener('click', getUsers);