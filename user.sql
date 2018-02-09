/*
Navicat MySQL Data Transfer

Source Server         : kede
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:25:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `userphone` varchar(255) DEFAULT NULL,
  `emain` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'laoxie', '123456', '13000009999', null);
INSERT INTO `user` VALUES ('2', null, 'e10adc3949ba59abbe56e057f20f883e', '321323121321', null);
INSERT INTO `user` VALUES ('3', null, '6b620aedfa4cf153467265629501dd61', '222222222222', null);
INSERT INTO `user` VALUES ('4', null, 'e10adc3949ba59abbe56e057f20f883e', '18622223333', null);
INSERT INTO `user` VALUES ('5', null, 'e10adc3949ba59abbe56e057f20f883e', '18613190000', null);
INSERT INTO `user` VALUES ('6', null, 'e10adc3949ba59abbe56e057f20f883e', '13455556666', null);
INSERT INTO `user` VALUES ('7', null, 'd41d8cd98f00b204e9800998ecf8427e', '', null);
INSERT INTO `user` VALUES ('8', null, 'd41d8cd98f00b204e9800998ecf8427e', '32132131', null);
INSERT INTO `user` VALUES ('9', null, 'd41d8cd98f00b204e9800998ecf8427e', '18634930808', null);
INSERT INTO `user` VALUES ('10', null, 'e10adc3949ba59abbe56e057f20f883e', '123456', null);
INSERT INTO `user` VALUES ('11', null, '25d55ad283aa400af464c76d713c07ad', '18313190000', null);
INSERT INTO `user` VALUES ('12', null, '6ebe76c9fb411be97b3b0d48b791a7c9', '18322334455', null);
SET FOREIGN_KEY_CHECKS=1;
