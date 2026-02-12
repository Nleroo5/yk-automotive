export interface Vehicle {
  id: string;
  name: string;
  year: number;
  mileage: number;
  price: number;
  image: string;
  status: "available" | "sold" | "pending";
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "2020 Honda Accord EX",
    year: 2020,
    mileage: 42000,
    price: 22995,
    image: "/placeholder-vehicle-1.jpg",
    status: "available"
  },
  {
    id: "2",
    name: "2019 Toyota Camry SE",
    year: 2019,
    mileage: 38000,
    price: 21500,
    image: "/placeholder-vehicle-2.jpg",
    status: "available"
  },
  {
    id: "3",
    name: "2021 Mazda CX-5 Touring",
    year: 2021,
    mileage: 28000,
    price: 27995,
    image: "/placeholder-vehicle-3.jpg",
    status: "available"
  },
  {
    id: "4",
    name: "2018 Ford F-150 XLT",
    year: 2018,
    mileage: 55000,
    price: 29995,
    image: "/placeholder-vehicle-4.jpg",
    status: "available"
  },
  {
    id: "5",
    name: "2020 Nissan Altima SV",
    year: 2020,
    mileage: 35000,
    price: 19995,
    image: "/placeholder-vehicle-5.jpg",
    status: "available"
  },
  {
    id: "6",
    name: "2019 Chevrolet Silverado LT",
    year: 2019,
    mileage: 48000,
    price: 31995,
    image: "/placeholder-vehicle-6.jpg",
    status: "available"
  }
];
