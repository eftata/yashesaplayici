function yashesapla () {

    // Girilen değerleri alıyoruz.

    let d1 = document.getElementById("gün").value;
    let m1 = document.getElementById("ay").value;
    let y1 = document.getElementById("yıl").value;
    

    // Şu anki tarihi alma bölümü.

    let date = new Date();
    let d2 = date.getDate();
    let m2 = date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Hangi Ayın kaç gün olduğunu yazıyoruz.
    
    //Hata olmaması için gün ve ayı kontrol ediyoruz.

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2-1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1 ;
    }

    //Kontrollerden sonra asıl yapacağımız işlemleri yapıyoruz...
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2- y1 ;

    // Çıkan sonucu sonuç bölümüne yazıyoruz.

    document.querySelector("#varsayılanYas").innerText = `Siz dünyaya geleli ${y} Yıl  ${m} Ay ve ${d} Gün olmuş`;
}