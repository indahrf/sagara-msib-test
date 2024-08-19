-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2024 at 05:09 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sagara_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`id`, `name`, `color`, `size`, `price`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 'Basic T-Shirt', 'Beige', 'M', '19.99', 10, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(2, 'Slim Fit Jeans', 'Black', 'L', '49.99', 75, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(3, 'Casual Shirt', 'Blue', 'S', '29.99', 50, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(4, 'Winter Jacket', 'Brown', 'XL', '89.99', 30, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(5, 'Sport Shorts', 'Coral', 'M', '24.99', 60, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(6, 'Dress Shoes', 'Cyan', '42', '79.99', 40, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(7, 'Wool Sweater', 'Gold', 'L', '59.99', 4, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(8, 'Formal Pants', 'Gray', 'M', '39.99', 55, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(9, 'Lightweight Hoodie', 'Green', 'XXL', '34.99', 2, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(10, 'Denim Jacket', 'Indigo', 'L', '64.99', 0, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(11, 'Blazer', 'Lavender', 'M', '99.99', 25, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(12, 'Track Pants', 'Magenta', 'S', '29.99', 0, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(13, 'Leather Belt', 'Maroon', 'M', '14.99', 120, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(14, 'Sports Shirt', 'Navy', 'M', '19.99', 90, '2024-08-19 22:09:41', '2024-08-19 22:09:41'),
(15, 'Cargo Shorts', 'Olive', 'L', '34.99', 65, '2024-08-19 22:09:41', '2024-08-19 22:09:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
