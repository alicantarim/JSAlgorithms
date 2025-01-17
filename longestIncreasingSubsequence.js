// En uzun artan alt diziyi (Longest Increasing Subsequence) bulan fonksiyon

function longestIncreasingSubsequence(nums) {
  const n = nums.length;
  if (n === 0) return []; // Eğer dizi boşsa, direkt boş bir dizi döndür

  // dp[i]: nums[i]'de sonlanan en uzun artan alt dizinin uzunluğunu tutar
  const dp = Array(n).fill(1);

  // parent: Alt diziyi oluşturmak için elemanların hangi indeksten geldiğini takip eder
  const parent = Array(n).fill(-1);

  let maxLength = 0; // En uzun alt dizinin uzunluğu
  let maxIndex = 0; // Bu dizinin sonlandığı indeks

  // Tüm elemanlar için artan alt diziyi hesapla
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // Eğer nums[j] < nums[i] ise, nums[i] artan bir dizi oluşturabilir
      if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        parent[i] = j; // nums[i]'ye ulaşmanın yolu nums[j]'dir
      }
    }
    // Maksimum uzunluğu ve sonlandığı indeksi güncelle
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      maxIndex = i;
    }
  }

  // Alt diziyi oluştur
  const result = [];
  let currentIndex = maxIndex;
  while (currentIndex !== -1) {
    result.unshift(nums[currentIndex]); // Alt diziyi baştan oluşturmak için başa ekle
    currentIndex = parent[currentIndex];
  }

  return result;
}

// Örnek kullanım
const input = [10, 9, 2, 5, 3, 7, 101, 18];
const output = longestIncreasingSubsequence(input);
console.log(output); // [2, 5, 7, 101]

/* //! AÇIKLAMALAR
1- dp Dizisi:
        dp[i] her eleman için, o elemanda sonlanan en uzun artan alt dizinin uzunluğunu tutar. İlk başta, her elemanın kendi başına bir dizi olduğu varsayıldığı için 1 ile doldurulur.
2- parent Dizisi:
        Her eleman için, artan alt diziyi oluşturmak amacıyla, bir önceki elemanın indeksini saklar. Bu sayede, alt dizi geriye doğru takip edilerek oluşturulabilir.
3- İç İçe Döngüler:
        i ve j döngüleri, nums[i] değerine kadar olan tüm elemanlarla karşılaştırma yapar. Eğer nums[j] < nums[i] ve dp[j] + 1 > dp[i] ise, dp[i] ve parent[i] güncellenir.
4- Maksimum Uzunluğu ve İndeksi Takip:
        Döngü sırasında, en uzun alt dizinin uzunluğu (maxLength) ve sonlandığı indeks (maxIndex) sürekli takip edilir.
5- Sonucu Oluşturma:
        parent dizisini takip ederek, en uzun artan alt diziyi baştan sona oluştururuz. unshift fonksiyonu kullanılarak elemanlar başa eklenir.
*/
