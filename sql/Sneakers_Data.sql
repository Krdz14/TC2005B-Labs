-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2024 at 09:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sneakers`
--

--
-- Dumping data for table `ordenes`
--

INSERT INTO `ordenes` (`id`, `username`, `sneakers_id`, `created_at`) VALUES
(1, 'kate', 1, '2024-09-03 19:06:50');

--
-- Dumping data for table `sneakers`
--

INSERT INTO `sneakers` (`id`, `descripcion`, `imagen`, `created_at`) VALUES
(1, 'Adidas Samba', 'https://media.gq.com.mx/photos/65c2943789f66df8f3bcdece/16:9/w_2560%2Cc_limit/adidas_Samba_Vegan.jpg', '2024-09-03 19:05:27'),
(2, 'Nike Jordan 1', 'https://minymal.com.mx/wp-content/uploads/2022/03/Jordan-1-High-Retro-University-Blue-6.webp', '2024-09-03 19:05:27'),
(3, 'Converse', 'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-en-bota-de-lona-unisex-negro-162050c-3_c8qe79v5p37epkki.jpg', '2024-09-03 19:05:27');

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `nombre`, `password`, `created_at`) VALUES
('kate', 'Kate Rodriguez', 'kate123', '2024-09-03 19:06:36');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
