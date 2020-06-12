-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2017 at 11:22 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `date_order` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` float NOT NULL DEFAULT '0',
  `note` text,
  `status` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `id_customer`, `date_order`, `total`, `note`, `status`) VALUES
(34, 7, '2017-04-15 07:14:16', 292, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bill_detail`
--

CREATE TABLE `bill_detail` (
  `id` int(11) NOT NULL,
  `id_bill` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` float DEFAULT '0',
  `price` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bill_detail`
--

INSERT INTO `bill_detail` (`id`, `id_bill`, `id_product`, `quantity`, `price`) VALUES
(13, 34, 33, 3, 157),
(14, 34, 34, 3, 135);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `link`, `id_product`) VALUES
(54, '54.jpeg', 29),
(55, '55.jpeg', 29),
(56, '56.jpeg', 30),
(57, '57.jpeg', 30),
(58, '58.jpeg', 31),
(59, '59.jpeg', 31),
(60, '60.jpeg', 32),
(61, '61.jpeg', 32),
(62, '62.jpeg', 33),
(63, '63.jpeg', 33),
(64, '64.jpeg', 34),
(65, '65.jpeg', 34),
(66, '66.jpeg', 35),
(67, '67.jpeg', 35),
(70, '70.jpeg', 37),
(71, '71.jpeg', 37),
(72, '72.jpeg', 38),
(73, '73.jpeg', 38),
(74, '74.jpeg', 39),
(75, '75.jpeg', 39),
(78, '78.jpeg', 41),
(79, '79.jpeg', 41),
(80, '80.jpeg', 42),
(81, '81.jpeg', 42),
(82, '82.jpeg', 43),
(83, '83.jpeg', 43),
(84, '84.jpeg', 44),
(85, '85.jpeg', 44),
(86, '86.jpeg', 45),
(87, '87.jpeg', 45),
(88, '88.jpeg', 46),
(89, '89.jpeg', 46),
(90, '90.jpeg', 47),
(91, '91.jpeg', 47),
(92, '92.jpeg', 48),
(93, '93.jpeg', 48),
(94, '94.jpeg', 49),
(95, '95.jpeg', 49),
(96, '96.jpeg', 50),
(97, '97.jpeg', 50),
(98, '98.jpeg', 51),
(99, '99.jpeg', 51),
(100, '100.jpeg', 52),
(101, '101.jpeg', 52),
(102, '102.jpeg', 53),
(103, '103.jpeg', 53),
(104, '104.jpeg', 54),
(105, '105.jpeg', 54),
(106, '106.jpeg', 55),
(107, '107.jpeg', 55),
(108, '108.jpeg', 56),
(109, '109.jpeg', 56),
(110, '110.jpeg', 57),
(111, '111.jpeg', 57),
(112, '112.jpeg', 58),
(113, '113.jpeg', 58),
(114, '114.jpeg', 59),
(115, '115.jpeg', 59),
(116, '116.jpeg', 60),
(117, '117.jpeg', 60),
(118, '118.jpeg', 61),
(119, '119.jpeg', 61),
(120, '120.jpeg', 62),
(121, '121.jpeg', 62),
(122, '122.jpeg', 63),
(123, '123.jpeg', 63),
(124, '124.jpeg', 64),
(125, '125.jpeg', 64),
(126, '126.jpeg', 65),
(127, '127.jpeg', 65),
(128, '128.jpeg', 66),
(129, '129.jpeg', 66),
(130, '130.jpeg', 67),
(131, '131.jpeg', 67),
(134, '134.jpeg', 69),
(135, '135.jpeg', 69),
(136, '136.jpeg', 70),
(137, '137.jpeg', 70),
(138, '138.jpeg', 71),
(139, '139.jpeg', 71),
(140, '140.jpeg', 72),
(141, '141.jpeg', 72),
(142, '142.jpeg', 73),
(143, '143.jpeg', 73),
(144, '144.jpeg', 74),
(145, '145.jpeg', 74),
(146, '146.jpeg', 75),
(147, '147.jpeg', 75),
(148, '148.jpeg', 76),
(149, '149.jpeg', 76),
(150, '150.jpeg', 77),
(151, '151.jpeg', 77),
(152, '152.jpeg', 78),
(153, '153.jpeg', 78);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `id_type` int(11) DEFAULT NULL,
  `price` float DEFAULT '0',
  `color` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL COMMENT 'chất liệu',
  `description` text NOT NULL,
  `new` tinyint(4) NOT NULL DEFAULT '0',
  `inCollection` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `id_type`, `price`, `color`, `material`, `description`, `new`, `inCollection`) VALUES
--Jordan
(29, 'Air Jordan 6 Retro', 4, 124, 'White', 'Leather', 'Taking color, material and graphic cues from the AJ7 nicknamed "Hare Jordan," the Air Jordan 6 Retro hops out in celebration of the Spring holiday with a fresh remastering of iconic AJ heritage.', 0, 0),
(30, 'Air Jordan 1 Low SE', 4, 121, 'Laser Blue', 'Leather', 'Always fresh and never out of style, the Air Jordan 1 Low is one of the most iconic sneakers of all time. This SE version shakes up the classic design with flavorful new color schemes and trim details.', 1, 0),
(31, 'Air Jordan 1 Mid', 4, 133, 'Black', 'Leather', 'The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.', 1, 0),
(32, 'Air Jordan 3 Retro SE', 4, 143, 'Black/White/Gorge Green', 'Leather', 'Go wild in the Air Jordan 3 Retro SE. Part of the "Animal Instinct" pack, it features a mix of animal-inspired materials that give fresh, new identity to the iconic shoe.', 1, 0),
(33, 'Air Jordan 1 Low', 4, 157, 'Pine Green', 'Leather', 'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. Its made for casual mode, with an iconic design that goes with everything and never goes out of style.', 0, 0),
(34, 'Air Jordan 1 Low', 4, 135, 'White', 'Leather', 'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. Its made for casual mode, with an iconic design that goes with everything and never goes out of style.', 1, 1),
(35, 'Jordan Zoom Trunner Advance', 4, 107, 'White', 'Leather', 'Designed for athletes who want a shoe they can run or train in, the Jordan Zoom Trunner Advance offers support in all directions. It features a radically new diamond-like cage that helps stabilize your side-to-side motions. Responsive cushioning helps drive you forward.', 0, 0),
(37, 'Air Jordan OG', 4, 149, 'Red', 'Leather', 'First released in 98, the Air Jordan OG was designed for the women s basketball community who wanted an AJ all their own. The original Air Jordan for women, it has dimpled leather and midsole sculpting inspired by the AJ13.', 0, 1),
(38, 'Air Jordan 1 Low', 4, 146, 'DarkGoldenRod', 'Leather', 'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh. Its made for casual mode, with an iconic design that goes with everything and never goes out of style.', 1, 0),
(39, 'Air Jordan Dub Zero', 4, 122, 'Black', 'Leather', 'The Air Jordan Dub Zero stands out with its intricately detailed, laser-etched upper. Its webbed lacing system and foam-backed collar stabilize a performance fit.', 0, 0),
(41, 'Air Jordan 1 Mid SE', 4, 132, 'White/Rush Blue/Black/University Red', 'Leather', 'The Air Jordan 1 Mid SE maintains the timeless appeal of the OG AJ1, revamped with fresh colors and premium materials. Built with a lightweight Air-Sole unit and classic design lines, it captures the essence of the original through a modern lens.', 0, 1),
(42, 'Air Jordan 7 Retro SE', 4, 134, 'LightGreen', 'Leather', 'The Air Jordan 7 Retro SE celebrates the Spring holiday with textured leather on the upper inspired by rabbit feet.', 0, 0),
(43, 'Jordan Delta', 4, 117, ' Vachetta Tan/Light Cream/Gym Red/Sail', 'Leather', 'The Jordan Delta masters the art of accessibility with a design thats expressive and comfortable from the inside out. Made with a mix of high-tech and natural materials, this shoe has plush, lightweight foam underfoot. Its meticulously crafted for a look and feel only Jordan brand can deliver.', 1, 0),
(44, 'Air Jordan IV', 4, 142, 'Cool Grey/Wolf Grey/Anthracite/Volt', 'Leather', 'As fresh as its first release, the Air Jordan 4 Retro remakes Michael Jordan s 4th signature shoe for a new generation. This shoe uses suede and textile for a light, supportive feel, plus cushioning for underfoot comfort.', 0, 0),
(45, 'Air Jordan 1 Mid GT', 4, 141, ' Pink Quartz', 'Leather', 'The Air Jordan 1 Mid GT Infant/Toddler Shoe features a combination leather upper with a perforated toe for premium style and breathability. A cushioned midsole delivers comfortable impact protection.', 0, 1),

--Force
(46, 'Nike Air Force 1 LV8 2', 5, 117, 'Khaki', 'Leather', 'Discover new paths in the Nike Air Force 1 LV8 2. With classic Air-Sole cushioning and the same design of the ’82 OG, these legendary, trail-inspired kicks are ready for your next adventure.', 0, 0),
(47, 'Nike Air Force 1 07 LV8', 5, 124, 'Orange Trance', 'Leather', 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: stitched overlays, bold colors and the perfect amount of flash to make you shine.', 1, 0),
(48, 'Nike Air Force 1 Sage Low LX', 5, 109, 'Light Cream', 'Leather', 'Taking both height and craft to new levels, the Nike Air Force 1 Sage Low LX features a platform midsole and pared-down upper. Rolled edges and clean lines replace traditional overlays for a bold look.', 1, 0),
(49, 'Nike Air Force 1 07', 5, 133, 'Laser Crimson', 'Leather', 'The legend lives on in the Nike Air Force 1 07—a modern take on the iconic AF1 that blends classic style with sweet details. A stitched tag logo runs down the tongue while over-branding throughout reinforces Nike heritage.', 1, 1),
(50, 'Nike Air Force 1 07 LV8', 5, 118, 'White', 'Leather', 'The legend lives on in the Nike Air Force 1 07 LV8—a modern take on the iconic AF1 that blends classic style with fresh details, color and flair. A ribbon of striped webbing above the midsole gives a retro look and feel while classic graphics and legendary Air cushioning rep the AF1 we all know and love.', 1, 0),
(51, 'Nike Air Force 1 07', 5, 152, 'Black', 'Leather', 'The legend lives on in the Nike Air Force 1 07—a modern take on the iconic AF1 that blends classic style with sweet details. A stitched tag logo runs down the tongue while over-branding throughout reinforces Nike heritage.', 0, 0),
(52, 'Nike Air Force 1 LV8', 5, 127, 'Black/Lotus Pink/White/Orange Trance', 'Leather', 'The Nike Air Force 1 LV8 freshens up the ’82 legend. A cooling insole with breathable materials and a see-through Swoosh bring new life while still keeping classic elements from the icon made just for kids.', 1, 1),
(53, 'Nike Air Force 1 Sage Low', 5, 137, 'Barely Rose', 'Leather', 'Taking both height and craft to new levels, the Nike Air Force 1 Sage Low features a platform midsole and a pared-down upper for a bold yet feminine look.', 0, 0),
(54, 'Nike Force 1', 5, 148, 'Black/Green Spark', 'Leather', 'The Nike Air Force 1 ’07 pays homage to the diverse culture of Chicago. 10 divergent patterns create a design that nods to the city s communities. It celebrates this February s assembling of basketball stars in the Windy City.', 0, 0),
(55, 'Nike Air Force 1 07 LV8 1', 5, 107, 'University Red', 'Leather', 'The Nike Air Force 1 07 LV8 1 incorporates the same hoops-inspired performance features of the 82 OG while adding fresh design details for an updated look. Its low-cut collar provides a comfortable fit around the ankle, while the all-red colorway delivers a striking visual that tells others to stop and look.', 1, 0),
(56, 'Nike Air Force 1 High 07 LV8 3', 5, 113, 'Olive Aura', 'Leather', 'The Nike Air Force 1 High 07 LV8 incorporates the same hoops-inspired performance features of the 1982 original release while adding fresh details for a modern look. The padded, high-cut collar provides a comfortable fit around the ankle while bold color accents on select colorways deliver a striking visual.', 0, 1),
(57, 'Nike SF Air Force 1 Premium', 5, 145, 'Dark Russet', 'Leather', 'A hoops icon toughens up with the Nike SF Air Force 1 Premium Men s Shoe. Crafted with a genuine leather and fabric upper, it features military-inspired details, a customizable ankle strap and a Nike Air unit for cushioned comfort.', 1, 0),
(58, 'Nike AF1 Shadow SE', 5, 105, 'Black', 'Leather', 'A fun, playful twist on a classic design, the Nike Air Force 1 Shadow has a layered upper, repeated graphics and an exaggerated midsole that will make them think they re seeing double.', 1, 0),
(59, 'Nike Air Force 1 Jewel', 5, 113, 'Black/White/University Red', 'Leather', 'This iteration of the iconic Air Force 1 lineage honors the Chicago Bulls pinstripe uniforms of the late-90s. It features inspirational messages on the sockliner, a jewel Swoosh and "Chicago" embroidered on the heel tab.', 0, 1),
(60, 'Nike Air Force 1 High 07', 5, 147, 'Black', 'Leather', 'The legend lives on in the Nike Air Force 1 High ’07 Men s Shoe, a modern take on the icon that blends classic style and fresh, crisp details.', 0, 0),

--Vans
(61, 'SK8-HI', 6, 119, 'BLACK', 'Cotton', 'The Sk8-Hi, Vans legendary lace-up high top inspired by the classic Old Skool, has a durable canvas and suede upper, a supportive and padded ankle, and Vans vulcanized signature Waffle Outsole.', 0, 0),
(62, 'OLD SKOOL', 6, 113, 'SILVER LUREX', 'Cotton', 'The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring an allover silver silver Lurex thread, giving this style a metallic finish. It also includes sturdy canvas uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles.', 0, 0),
(63, 'OLD SKOOL', 6, 108, 'OCHRE','Cotton', 'The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring an allover silver silver Lurex thread, giving this style a metallic finish. It also includes sturdy canvas uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles.', 0, 1),
(64, 'ERA', 6, 101, 'GREEN ASH', 'Cotton', 'The Era, the Vans classic low top skate shoe, features sturdy canvas uppers with metal eyelets, padded collars for support and flexibility, and signature rubber waffle outsoles.', 0, 0),
(65, 'NEON ERA', 6, 144, 'KNOCKOUT PINK', 'Cotton', 'The Neon Era combines the Vans classic low top skate shoe with sturdy textile uppers, metal eyelets, padded collars for support and flexibility, and signature rubber waffle outsoles.', 1, 0),
(66, 'NEON OLD SKOOL', 6, 135, 'GREEN GECKO', 'Cotton', 'The Neon Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring sturdy textile uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles.', 0, 0),
(67, 'VANS CROSS STRAP', 6, 147, 'BLACK/WHITE', 'Cotton', 'Warp your perception of what a sandal can be. Completely rethought, the Cross Strap sandal is a nouveau twist on the traditional slide, and a fresh new silhouette with an injection of fun. Featuring suede-backed, soft leather straps with Vans-embossed logo details, the Vans Cross Strap also includes UltraCush footbeds for all day comfort, and rubber sawtooth tread.', 1, 0),

--Adidas
(69, 'ULTRABOOST 20 S SHOES', 7, 107, 'INTENSE GREEN', 'Leather', 'Confidence from the ground up. These adidas running shoes are designed to turbo charge your daily miles. The knit upper offers stitched-in support based on motion capture technology. A soft, comfortable elastane heel allows for natural movement of the Achilles. Responsive cushioning helps keep transitions smooth and the energy flowing.', 0, 0),
(70, 'SOLARGLIDE ST 19 SHOES', 7, 115, 'GLOW BLUE', 'Leather', 'When your run is the most uncomplicated part of your day. Designed for stability, these adidas running shoes are your tried-and-true partner for long-distance runs. Energized cushioning is firmer on the medial side for added support, and a stability rail keeps your stride feeling balanced.', 1, 0),
(71, 'EDGE LUX 4 SHOES', 7, 154, 'CORE BLACK', 'Leather', 'Sometimes life is so busy you feel like you re living out of your gym bag. Who wants to carry three pairs of shoes in there? These adidas shoes will take you from an early-morning run around the reservoir to an evening HIIT class and keep you stylish and comfortable for everything that happens in between.', 0, 0),
(72, 'ULTRABOOST 20 SHOES', 7, 147, 'GREY FIVE', 'Leather', 'Make pink your power color. Inspired by the global movement for change that unites all of us, no matter our gender, these adidas Ultraboost 20 Shoes help make your best run a reality. Yarn spun from Parley Ocean Plastic was used to make the stretchy knit upper. Responsive cushioning gives you the comfort you need to go long.', 0, 1),
(73, 'ULTRABOOST 20 SHOES', 7, 112, 'CLOUD WHITE', 'Leather', 'A new day. A new run. Make it your best. These high-performance shoes feature a foot-hugging knit upper. Stitched-in reinforcement is precisely placed to give you support in the places you need it most. The soft elastane heel delivers a more comfortable fit. Responsive cushioning returns energy to your stride with every footstrike for that I-could-run-forever feeling.', 0, 0),
(74, 'EDGE LUX 4 SHOES', 7, 141, 'GLORY GREY', 'Leather', 'Sometimes life is so busy you feel like you re living out of your gym bag. Who wants to carry three pairs of shoes in there? These adidas shoes will take you from an early-morning run around the reservoir to an evening HIIT class and keep you stylish and comfortable for everything that happens in between.', 1, 1),
(75, 'ULTRABOOST 20 SHOES', 7, 148, 'CLOUD WHITE', 'Leather', 'Confidence from the ground up. These adidas running shoes are designed to turbo charge your daily miles. The knit upper offers stitched-in support based on motion capture technology. A soft, comfortable elastane heel allows for natural movement of the Achilles. Responsive cushioning helps keep transitions smooth and the energy flowing.', 0, 0),
(76, 'CLIMACOOL VENTO SHOES', 7, 156, 'CORE BLACK', 'Leather', 'You check the forecast. Hot and sunny. Again. But your routine stays on track in these adidas Climacool Vento Shoes. They have a breathable upper and responsive cushioning that keep you looking and feeling fresh in the heat.', 1, 0),
(77, 'SUPERNOVA SHOES', 7, 118, 'CLOUD WHITE', 'Leather', 'Everyone runs for different reasons. Whatever drives you to hit the path or the pavement, these adidas shoes are designed to help you reach your goals. Flexible cushioning in the forefoot combines with responsive cushioning in the heel to give you a comfortable ride. And because we re serious about creating a healthier environment, these shoes are built with recycled materials.', 0, 1),
(78, 'SUPERNOVA SHOES', 7, 144, 'CORE BLACK', 'Leather', 'Everyone runs for different reasons. Whatever drives you to hit the path or the pavement, these adidas shoes are designed to help you reach your goals. Flexible cushioning in the forefoot combines with responsive cushioning in the heel to give you a comfortable ride. And because we re serious about creating a healthier environment, these shoes are built with recycled materials.', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`id`, `name`, `image`) VALUES
(4, 'Air Jordan', 'maxi.jpg'),
(5, 'Air Force', 'party.jpg'),
(6, 'Vans', 'mini.jpg'),
(7, 'Adidas', 'rompers.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `address`) VALUES
(1, 'huong@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', NULL, NULL, NULL),
(2, '', 'd41d8cd98f00b204e9800998ecf8427e', '', NULL, NULL),
(4, 'huonggg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL),
(6, 'huonggssssg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL),
(7, 'huossssggag@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'Hương siêu nhân', '234567890', '123343 lê thị riêng');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f1` (`id_customer`);

--
-- Indexes for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f2` (`id_bill`),
  ADD KEY `f3` (`id_product`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f5` (`id_product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f4` (`id_type`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- AUTO_INCREMENT for table `product_type`
--
ALTER TABLE `product_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `f1` FOREIGN KEY (`id_customer`) REFERENCES `users` (`id`);

--
-- Constraints for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `f2` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id`),
  ADD CONSTRAINT `f3` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `f5` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `f4` FOREIGN KEY (`id_type`) REFERENCES `product_type` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
