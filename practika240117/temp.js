// Напишите функцию, объединяющую два отсортированных массива в один.Массивы содержат только целые числа.Кроме того, конечный результат должен быть отсортирован и не иметь дубликатов.

function mergeAndSortUniqueArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] === mergedArray[j]) {
        mergedArray.splice(j, 1);
        j--;
      }
    }
  }

  mergedArray.sort((a, b) => a - b);
  return mergedArray;
}

// Пример использования
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];

const resultArray = mergeAndSortUniqueArrays(sortedArray1, sortedArray2);
console.log(resultArray);


