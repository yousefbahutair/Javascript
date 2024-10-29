function tribonacci(signature, n) {
    // Handle cases for n
    if (n === 0) return [];
    if (n === 1) return [signature[0]];
    if (n === 2) return [signature[0], signature[1]];
  
    // Create a result array starting with the signature
    let result = [...signature];
  
    // Calculate tribonacci numbers for n >= 3
    for (let i = 3; i < n; i++) {
      let sum = result[i - 1] + result[i - 2] + result[i - 3];
      result.push(sum);
    }
  
    return result; // Return the final result
  }
  
  // Example usage:
  console.log(tribonacci([1, 2, 3], 5)); // Output: [1, 2, 3, 6, 11]