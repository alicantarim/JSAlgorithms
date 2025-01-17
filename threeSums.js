// Bir dizi içindeki elemanlardan toplamı sıfır olan üçlüleri bulmayı amaçlayan bir algoritma

function threeSums(nums) {
  //1. diziyi sırala
  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // Aynı sayıyı tekrardan işlememek için kontrol
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1; // i'nin sağındaki ilk eleman
    let right = nums.length - 1; // Dizinin son elemanı

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Toplam sıfırsa, sonucu ekle
        result.push([nums[i], nums[left], nums[right]]);
        // Aynı elemanları tekrardan işlememek için sol ve sağ işaretçileri kaydır
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[left - 1]) {
          right--;
        }

        // İşaretçileri kaydırarak sıradaki elemanlara geç
        left++;
        right--;
      } else if (sum < 0) {
        // Toplam sıfırdan küçükse, daha büyük bir sayıya geçmek için left'i artır
        left++;
      } else {
        // Toplam sıfırdan büyükse, daha küçük bir sayıya geçmek için right'i azalt
        right--;
      }
    }
  }

  return result;
}

const input = [-4, -1, -1, -1, 0, 1, 2];
const output = threeSums(input);
console.log(output); // [[-4, 1, 3], [-1, -1, 2]]
