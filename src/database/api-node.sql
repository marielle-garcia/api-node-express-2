create database api_node2;
use api_node2;

CREATE TABLE `notes` (
  `id` int(11) NOT NULL auto_increment primary key,
  `titulo` varchar(50) NOT NULL,
  `nota` varchar(1000) NOT NULL,
  `cor` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `notes` (`id`, `titulo`, `nota`, `cor`) VALUES
(1, "mercado", "kskjdkdjsjkjfs","#FFFFFF"),
(2, "mercado", "kskjdkdjsjkjfs","#FFFFFF");

SELECT * FROM NOTES;