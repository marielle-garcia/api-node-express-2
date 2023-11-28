create database api_node_versao2;
use api_node_versao2;

CREATE TABLE `notes` (
  `id` int(11) NOT NULL auto_increment primary key,
  `title` varchar(50) NOT NULL,
  `notes` varchar(1000) NOT NULL,
  `variant` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SELECT * FROM NOTES;
