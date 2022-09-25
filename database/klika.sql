-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 25, 2022 at 08:33 AM
-- Server version: 8.0.30
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `klika`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int NOT NULL,
  `name` text COLLATE utf8mb4_general_ci NOT NULL,
  `author` text COLLATE utf8mb4_general_ci NOT NULL,
  `genre` text COLLATE utf8mb4_general_ci NOT NULL,
  `year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `name`, `author`, `genre`, `year`) VALUES
(1, 'For What It\'s Worth', 'Buffalo Springfield', 'Folk Rock', 1967),
(2, 'Johnny B. Goode', 'Chuck Berry', 'Rock & Roll', 1959),
(3, 'Yesterday', 'The Beatles', 'British Invasion', 1965),
(4, 'Like a Rolling Stone', 'Bob Dylan', 'Folk Rock', 1965),
(5, 'Imagine', 'John Lennon', 'Rock', 1971),
(6, 'Stairway to Heaven', 'Jimmy Page', 'Rock', 1971),
(7, 'Heartbreak Hotel', 'Elvis Presley', 'Rock & Roll', 1956),
(8, 'Gimme Shelter', 'The Rolling Stones', 'Rock', 1969),
(9, 'Let It Be', 'The Beatles', 'Rock', 1970),
(10, 'What\'s Going On', 'Marvin Gaye', 'Soul', 1971),
(11, 'Good Vibrations', 'The Beach Boys', 'Psychedelic Pop', 1967),
(12, 'Oh, Pretty Woman', 'Roy Orbison', 'Rock', 1964),
(13, 'Respect', 'Aretha Franklin', 'Soul', 1967),
(14, 'Layla', 'Derek and the Dominos', 'Blues Rock', 1970),
(15, 'My Generation', 'The Who', 'British Invasion', 1965),
(16, 'Hey Jude', 'The Beatles', 'Pop', 1968),
(17, 'The Weight', 'The Band', 'Folk Rock', 1968),
(18, 'Bohemian Rhapsody', 'Queen', 'Rock', 1975),
(19, 'All Along the Watchtower', 'The Jimi Hendrix Experience', 'Psychedelic Rock', 1968),
(20, 'Born to Run', 'Bruce Springsteen', 'Heartland Rock', 1975),
(21, 'Wish You Were Here', 'Pink Floyd', 'Acoustic Rock', 1975),
(22, 'Sympathy for the Devil', 'The Rolling Stones', 'Rock', 1968),
(23, 'Smells Like Teen Spirit', 'Nirvana', 'Grunge', 1991),
(24, 'Be My Baby', 'The Ronettes', 'Pop', 1964),
(25, 'The Tracks of My Tears', 'Smokey Robinson and the Miracles', 'Soul', 1965),
(26, 'Hotel California', 'Eagles', 'Rock', 1976),
(27, 'I Heard It Through the Grapevine', 'Marvin Gaye', 'Soul', 1968),
(28, '(Sittin on) the Dock of the Bay', 'Otis Redding', 'R&B', 1968),
(29, 'I Want to Hold Your Hand', 'The Beatles', 'British Invasion', 1963),
(30, 'What\'d I Say', 'Ray Charles', 'R&B', 1959),
(31, 'Jailhouse Rock', 'Elvis Presley', 'Rock & Roll', 1957),
(32, 'Blowin\' in the Wind', 'Bob Dylan', 'Folk', 1963),
(33, 'Blitzkrieg Bop', 'Ramones', 'Punk', 1976),
(34, 'Papa\'s Got a Brand New Bag', 'James Brown', 'R&B', 1965),
(35, 'A Change is Gonna Come', 'Sam Cooke', 'Soul', 1964),
(36, 'Midnight in a Perfect World', 'DJ Shadow', 'Trip-Hop', 1996),
(37, 'Bridge Over Troubled  Water', 'Simon and Garfunkel', 'Pop', 1970),
(38, 'Fortunate Son', 'Creedence Clearwater Revival', 'Roots Rock', 1969),
(39, 'Voodoo Child (Slight Return)', 'The Jimi Hendrix', 'Psychedelic Rock', 1968),
(40, 'God Only Knows', 'The Beach Boys', 'Baroque Pop', 1966);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
