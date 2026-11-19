-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Nov 12. 08:35
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `tenisz13a`
--
CREATE DATABASE IF NOT EXISTS `tenisz13a` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `tenisz13a`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bejegyzes`
--

CREATE TABLE `bejegyzes` (
  `bejegyzes_id` int(11) NOT NULL,
  `bejegyzes_szoveg` text NOT NULL,
  `bejegyzes_datum` date NOT NULL,
  `bejegyzes_becenev` varchar(255) NOT NULL,
  `bejegyzes_teniszezo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `bejegyzes`
--

INSERT INTO `bejegyzes` (`bejegyzes_id`, `bejegyzes_szoveg`, `bejegyzes_datum`, `bejegyzes_becenev`, `bejegyzes_teniszezo_id`) VALUES
(1, 'Carlos Alcaraz nyerte a Párizsi 1000-es ATP tornát.', '2026-11-08', 'Lali', 1),
(2, 'Carlos Alcaraz megnyerte a 2026-os bécsi Erste Bank Open ATP 500-as tenisztornát, miután a november 1-jei döntőben két szettben (6:1, 6:4) legyőzte Alex de Minaurt.', '2026-11-01', 'Pisti', 1),
(3, 'Jannik Sinner továbbra is a sérüléséből lábadozik, de már körvonalazódik, mikor térhet vissza a pályára. Az olasz teniszező az Australian Opent célozta meg, és arról is beszélt, miért nem akarja siettetni a felépülését.', '2026-10-23', 'Lali', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `teniszezo`
--

CREATE TABLE `teniszezo` (
  `teniszezo_id` int(11) NOT NULL,
  `teniszezo_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `teniszezo`
--

INSERT INTO `teniszezo` (`teniszezo_id`, `teniszezo_nev`) VALUES
(1, 'Carlos Alcaras'),
(2, 'Janic Sinner '),
(3, 'Djokovich');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bejegyzes`
--
ALTER TABLE `bejegyzes`
  ADD PRIMARY KEY (`bejegyzes_id`),
  ADD KEY `bejegyzes_teniszezo_id` (`bejegyzes_teniszezo_id`);

--
-- A tábla indexei `teniszezo`
--
ALTER TABLE `teniszezo`
  ADD PRIMARY KEY (`teniszezo_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bejegyzes`
--
ALTER TABLE `bejegyzes`
  MODIFY `bejegyzes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `teniszezo`
--
ALTER TABLE `teniszezo`
  MODIFY `teniszezo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `bejegyzes`
--
ALTER TABLE `bejegyzes`
  ADD CONSTRAINT `bejegyzes_ibfk_1` FOREIGN KEY (`bejegyzes_teniszezo_id`) REFERENCES `teniszezo` (`teniszezo_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
