-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 02 Des 2015 pada 11.15
-- Versi Server: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_tak_hunter`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `event`
--

CREATE TABLE IF NOT EXISTS `event` (
  `nama` varchar(50) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `status` varchar(7) NOT NULL,
  `waktu` date NOT NULL,
  `Keterangan` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `event`
--

INSERT INTO `event` (`nama`, `lokasi`, `status`, `waktu`, `Keterangan`) VALUES
('dkgjfgr', 'kvjfngjhfnb', 'confirm', '2015-11-11', 'vnjfhgusb  s jghk7'),
('fjdjhfehf', 'vnjdfhdbg', 'confirm', '2015-11-11', 'mvfjng jfnghngg kjdjfbbf'),
('fjhfhbg', 'kfjnfjbghfbv', 'confirm', '2015-11-11', 'kdgfhg vjkfvbjb kcjvujfng'),
('kljgurhg', 'ifjudngrg', 'confirm', '2015-12-15', 'fkejhrfuehty4rhg'),
('lab', 'charcharchar', 'confirm', '2015-12-15', 'dum dum tralalalala dum dum duarrr'),
('ofjejf', 'fdfneenf', 'confirm', '2015-11-11', 'flit8jhh rritirjtirjt');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `nim` int(10) NOT NULL DEFAULT '0',
  `nama` varchar(20) NOT NULL,
  `fakultas` varchar(20) NOT NULL,
  `angkatan` varchar(9) NOT NULL,
  `kontak` varchar(12) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `kata_sandi` varchar(20) NOT NULL,
  `akses` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`nim`, `nama`, `fakultas`, `angkatan`, `kontak`, `email`, `kata_sandi`, `akses`) VALUES
(1, 'Transformer', 'Elektro', '2015', NULL, NULL, 'admin123', 'Administrator'),
(110613, 'rrrrrrrrr', 'Rekayasa Industri', '2011', '7777777777', 'nia@lala.com', 'nia', 'Publisher');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
 ADD PRIMARY KEY (`nama`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`nim`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
