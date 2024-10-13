//your JS code here. If required.
 function getArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]); // The input array
        }, 3000); // Resolves after 3 seconds
      });
    }

    // Chaining promises to manipulate the data and update the DOM
    getArray()
      .then((arr) => {
        return new Promise((resolve) => {
          // Filter out odd numbers
          const evenNumbers = arr.filter(num => num % 2 === 0);
          
          // Update the "output" div with filtered even numbers after 1 second
          setTimeout(() => {
            document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
            resolve(evenNumbers); // Pass the even numbers to the next promise
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        return new Promise((resolve) => {
          // Multiply the even numbers by 2
          const multipliedNumbers = evenNumbers.map(num => num * 2);

          // Update the "output" div with the multiplied numbers after 2 more seconds
          setTimeout(() => {
            document.getElementById('output').textContent = `Multiplied by 2: ${multipliedNumbers.join(', ')}`;
            resolve(multipliedNumbers);
          }, 2000);
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });