export const getCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Mark Henry",
          number: "1234 5678 9012 2020",
          expiry: "12/24",
          cvv: "123",
          frozen: false,
        },
        {
          id: 2,
          name: "Vishal Pandey",
          number: "9876 5432 1098 7654",
          expiry: "11/23",
          cvv: "456",
          frozen: true,
        },
        {
          id: 3,
          name: "Kishan Singh",
          number: "1111 2222 3333 4444",
          expiry: "01/25",
          cvv: "789",
          frozen: false,
        },
      ]);
    }, 500);
  });
};
