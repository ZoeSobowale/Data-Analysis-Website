-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2022 at 05:06 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `team_software_engineering`
--

-- --------------------------------------------------------

--
-- Table structure for table `averages`
--

CREATE TABLE `averages` (
  `entryID` int(10) UNSIGNED NOT NULL,
  `year` varchar(16) DEFAULT NULL,
  `homeless in priority need White` float DEFAULT 0,
  `homeless in priority need Asian or Asian British` float DEFAULT 0,
  `homeless in priority need Mixed` float DEFAULT 0,
  `homeless in priority need Other ethnic origin` float DEFAULT 0,
  `homeless in priority need Ethnic Group not Stated` float DEFAULT 0,
  `homeless in priority need total` float DEFAULT 0,
  `Number accepted per 1000 households` float DEFAULT 0,
  `Total decisions eligible homeless priority need intentionally` float DEFAULT 0,
  `Total decisions eligible not homeless` float DEFAULT 0,
  `Total homelessness decisions` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `averages`
--

INSERT INTO `averages` (`entryID`, `year`, `homeless in priority need White`, `homeless in priority need Asian or Asian British`, `homeless in priority need Mixed`, `homeless in priority need Other ethnic origin`, `homeless in priority need Ethnic Group not Stated`, `homeless in priority need total`, `Number accepted per 1000 households`, `Total decisions eligible homeless priority need intentionally`, `Total decisions eligible not homeless`, `Total homelessness decisions`) VALUES
(1, '2009_2010', 164.735, 15.6738, 6.97561, 9.3628, 11.1829, 244.024, 1.53871, 40.061, 162.247, 542.476),
(2, '2010_2011', 178.168, 16.8049, 8.01829, 11.3171, 13.5701, 269.265, 1.69441, 43.2104, 186.43, 619.613),
(3, '2011_2012', 202.095, 20.622, 9.90854, 13.311, 14.6311, 306.646, 1.94018, 48.2713, 187.768, 661.954),
(4, '2012_2013', 209.378, 25.3872, 10.4665, 13.2317, 16.7713, 325.415, 1.98918, 51.0762, 191.735, 687.32),
(5, '2013_2014', 199.756, 26.9085, 9.5061, 12.6982, 17.4878, 318.787, 1.96032, 51.6402, 181.29, 680.531),
(6, '2014_2015', 203.25, 29.3659, 10.2256, 14.0061, 19.8262, 331.848, 2.04961, 54.4299, 173.701, 684.939),
(7, '2015_2016', 204.899, 32.6524, 11.375, 16.372, 22.1616, 352.015, 2.13957, 56.7591, 169.47, 699.823),
(8, '2016_2017', 215.055, 33.1463, 11.1555, 16.7988, 20.7287, 360.405, 2.16503, 58.7957, 163.835, 704.823),
(9, '2016_2017', 215.055, 33.1463, 11.1555, 16.7988, 20.7287, 360.405, 2.16503, 58.7957, 163.835, 704.823),
(10, '2017_2018', 209.552, 31.6555, 11.8201, 14.2256, 21.561, 344.976, 2.10162, 51.8994, 155.985, 667.137);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `averages`
--
ALTER TABLE `averages`
  ADD PRIMARY KEY (`entryID`),
  ADD KEY `entryID` (`entryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `averages`
--
ALTER TABLE `averages`
  MODIFY `entryID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
