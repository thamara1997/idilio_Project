-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: idilio
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `designer`
--

DROP TABLE IF EXISTS `designer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `designer` (
  `designer_id` int NOT NULL AUTO_INCREMENT,
  `approved` bit(1) DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `fburl` varchar(255) DEFAULT NULL,
  `instaurl` varchar(255) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `linkedinurl` varchar(255) DEFAULT NULL,
  `order_count` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`designer_id`),
  KEY `FKwkvbbxjxa7y1ssmboghdq4ga` (`user_id`),
  CONSTRAINT `FKwkvbbxjxa7y1ssmboghdq4ga` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designer`
--

LOCK TABLES `designer` WRITE;
/*!40000 ALTER TABLE `designer` DISABLE KEYS */;
INSERT INTO `designer` VALUES (1,_binary '',NULL,NULL,NULL,5,NULL,10,1);
/*!40000 ALTER TABLE `designer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`login_id`),
  KEY `FKdfw7mwdvfedd18ti3ai84i64s` (`user_id`),
  CONSTRAINT `FKdfw7mwdvfedd18ti3ai84i64s` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'darshanathamara143@gmail.com','$2a$10$uKezIranf81BqBH46PW2EuGHMYMicz5No8g16u0Xyc95Q2nFTF7ba',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_order`
--

DROP TABLE IF EXISTS `new_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_order` (
  `new_order_id` int NOT NULL AUTO_INCREMENT,
  `attachments` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `rate` int DEFAULT NULL,
  `req_description` varchar(255) DEFAULT NULL,
  `req_draw` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `designer_id` int DEFAULT NULL,
  `package_id` int DEFAULT NULL,
  `progress_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`new_order_id`),
  KEY `FKhhvtb9sdhna7isxfuhhawao0u` (`designer_id`),
  KEY `FK3sr60iyllxkxebdk2nah189t4` (`package_id`),
  KEY `FKj6t60ddbah4vbyc8wclqib31` (`progress_id`),
  KEY `FKrd81iv9tojk30t05alq6qlii6` (`user_id`),
  CONSTRAINT `FK3sr60iyllxkxebdk2nah189t4` FOREIGN KEY (`package_id`) REFERENCES `package` (`package_id`),
  CONSTRAINT `FKhhvtb9sdhna7isxfuhhawao0u` FOREIGN KEY (`designer_id`) REFERENCES `designer` (`designer_id`),
  CONSTRAINT `FKj6t60ddbah4vbyc8wclqib31` FOREIGN KEY (`progress_id`) REFERENCES `progress` (`progress_id`),
  CONSTRAINT `FKrd81iv9tojk30t05alq6qlii6` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_order`
--

LOCK TABLES `new_order` WRITE;
/*!40000 ALTER TABLE `new_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `new_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package`
--

DROP TABLE IF EXISTS `package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package` (
  `package_id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`package_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package`
--

LOCK TABLES `package` WRITE;
/*!40000 ALTER TABLE `package` DISABLE KEYS */;
INSERT INTO `package` VALUES (1,29.99,'Album Cover','Basic'),(2,49.99,'Album Cover','Standard'),(3,99.99,'Album Cover','Advance'),(4,149.99,'Album Cover','Premium'),(5,29.99,'Podcast Cover','Basic'),(6,49.99,'Podcast Cover','Standard'),(7,99.99,'Podcast Cover','Advance'),(8,149.99,'Podcast Cover','Premium'),(9,29.99,'Book Cover','Basic'),(10,49.99,'Book Cover','Standard'),(11,99.99,'Book Cover','Advance'),(12,149.99,'Book Cover','Premium'),(13,29.99,'Flyers','Basic'),(14,49.99,'Flyers','Standard'),(15,99.99,'Flyers','Advance'),(16,149.99,'Flyers','Premium'),(17,29.99,'Mascot Logo','Basic'),(18,49.99,'Mascot Logo','Standard'),(19,99.99,'Mascot Logo','Advance'),(20,149.99,'Mascot Logo','Premium'),(21,29.99,'Company Logo','Basic'),(22,49.99,'Company Logo','Standard'),(23,99.99,'Company Logo','Advance'),(24,149.99,'Company Logo','Premium');
/*!40000 ALTER TABLE `package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `paid_date` datetime(6) DEFAULT NULL,
  `resource_order_id` int DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `FKmnyw8i1u2dw199p3sfcxc63ba` (`resource_order_id`),
  CONSTRAINT `FKmnyw8i1u2dw199p3sfcxc63ba` FOREIGN KEY (`resource_order_id`) REFERENCES `resource_order` (`resource_order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment2`
--

DROP TABLE IF EXISTS `payment2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment2` (
  `payment2id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `paid_date` datetime(6) DEFAULT NULL,
  `new_order_id` int DEFAULT NULL,
  PRIMARY KEY (`payment2id`),
  KEY `FKp46oqqs252r78a5cf2d3862ma` (`new_order_id`),
  CONSTRAINT `FKp46oqqs252r78a5cf2d3862ma` FOREIGN KEY (`new_order_id`) REFERENCES `new_order` (`new_order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment2`
--

LOCK TABLES `payment2` WRITE;
/*!40000 ALTER TABLE `payment2` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `progress`
--

DROP TABLE IF EXISTS `progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `progress` (
  `progress_id` int NOT NULL AUTO_INCREMENT,
  `change_time` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `stage` int DEFAULT NULL,
  PRIMARY KEY (`progress_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `progress`
--

LOCK TABLES `progress` WRITE;
/*!40000 ALTER TABLE `progress` DISABLE KEYS */;
INSERT INTO `progress` VALUES (1,NULL,'Order Placed',1),(2,NULL,'Requirement Submitted',2),(3,NULL,'Order In Progress',3),(4,NULL,'Review Delivery',4),(5,NULL,'Order Completed',5);
/*!40000 ALTER TABLE `progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource_order`
--

DROP TABLE IF EXISTS `resource_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource_order` (
  `resource_order_id` int NOT NULL AUTO_INCREMENT,
  `attachments` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `rate` int DEFAULT NULL,
  `req_description` varchar(255) DEFAULT NULL,
  `req_draw` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `progress_id` int DEFAULT NULL,
  `resource_id` int DEFAULT NULL,
  PRIMARY KEY (`resource_order_id`),
  KEY `FKnxj4t8fbf3kjpjvqbu86fmxts` (`progress_id`),
  KEY `FKh15uu1udicr500820ut8co6vx` (`resource_id`),
  CONSTRAINT `FKh15uu1udicr500820ut8co6vx` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`resource_id`),
  CONSTRAINT `FKnxj4t8fbf3kjpjvqbu86fmxts` FOREIGN KEY (`progress_id`) REFERENCES `progress` (`progress_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource_order`
--

LOCK TABLES `resource_order` WRITE;
/*!40000 ALTER TABLE `resource_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `resource_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resources` (
  `resource_id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `search_tags` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `designer_id` int DEFAULT NULL,
  PRIMARY KEY (`resource_id`),
  KEY `FKdv12ikm6wvxbgmsklx4ieq6pr` (`designer_id`),
  CONSTRAINT `FKdv12ikm6wvxbgmsklx4ieq6pr` FOREIGN KEY (`designer_id`) REFERENCES `designer` (`designer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (1,10,'PODCAST COVER','Hello desc','tag1,tag2,tag3','Hello',1);
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'LK','Darshana',NULL,'Thamara',NULL,'ADMIN');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_orders`
--

DROP TABLE IF EXISTS `users_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_orders` (
  `users_orders_id` int NOT NULL AUTO_INCREMENT,
  `resource_order_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`users_orders_id`),
  KEY `FKjqwqrkgeddjv4g0n287jjs86b` (`resource_order_id`),
  KEY `FKl3wynkar78jkqnwc2yalrctkx` (`user_id`),
  CONSTRAINT `FKjqwqrkgeddjv4g0n287jjs86b` FOREIGN KEY (`resource_order_id`) REFERENCES `resource_order` (`resource_order_id`),
  CONSTRAINT `FKl3wynkar78jkqnwc2yalrctkx` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_orders`
--

LOCK TABLES `users_orders` WRITE;
/*!40000 ALTER TABLE `users_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-23  8:32:54
