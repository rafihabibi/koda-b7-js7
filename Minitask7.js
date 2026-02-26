const hasilUjianSiswa = {
    matematika: 70,
    bahasa_inggris: 75,
    bahasa_indonesia: 90,
    ipa: 85
};

function hasilUjian({matematika, bahasa_inggris,bahasa_indonesia, ipa}) {
    let total = matematika + bahasa_indonesia + bahasa_inggris + ipa;
    let rataRata = total / 4;

    return `total nilai siswa: ${total}, Nilai rata-rata: ${rataRata}`;
}
console.log(hasilUjian(hasilUjianSiswa));