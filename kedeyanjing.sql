/*
Navicat MySQL Data Transfer

Source Server         : kede
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:52:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for kedeyanjing
-- ----------------------------
DROP TABLE IF EXISTS `kedeyanjing`;
CREATE TABLE `kedeyanjing` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 NOT NULL,
  `des` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `class` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of kedeyanjing
-- ----------------------------
INSERT INTO `kedeyanjing` VALUES ('1', 't1', '1', '1', 'img/mt_a1.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('2', '1', '1', '1', 'img/mt_a2.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('3', '1', '1', '1', 'img/mt_a3.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('4', '1', '1', '1', 'img/mt_a4.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('5', '1', '1', '1', 'img/mt_a5.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('6', '1', '1', '1', 'img/mt_a6.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('7', '1', '1', '1', 'img/mt_a7.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('8', '1', '1', '1', 'img/mt_a8.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('9', '1', '1', '1', 'img/mt_a9.jpg', '11', 't');
INSERT INTO `kedeyanjing` VALUES ('10', '妆美堂DECORATIVE月抛2片装', '59.00', '9色可选', 'img/r1.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('11', '海昌印象之美双周抛8片装', '79.00', '直降20元', 'img/r2.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('12', '博士伦蕾丝明眸两周抛6片装', '108.00', '耀眼蕾丝', 'img/r3.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('13', 'ANNASUI安娜苏日抛20片装', '128.00', '直降40元', 'img/r4.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('14', '实瞳可芙蕾日抛30片装', '169.00', '直降87元', 'img/r5.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('15', '诺思魅眸许愿美妆彩瞳日抛30片装', '99.00', '2盒特惠', 'img/r6.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('16', '强生美瞳妍妍两周抛20片装', '118.00', '满459送娥佩兰化妆水', 'img/r7.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('17', 'Candy Magic 1day日抛10片装', '96.00', '第二盒半价', 'img/r8.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('18', '心の拉花美妆彩瞳月抛3片装', '35.00', '四盒68元护理盒', 'img/r9.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('19', 'NEO可视眸巨目年抛1片装', '19.00', '韩国进口 经典款式', 'img/r10.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('20', '海昌星眸半年抛1片装', '65.00', '4盒32/盒', 'img/r11.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('21', '海昌甜心布朗尼半年抛1片装', '35.00', '4盒32/盒', 'img/r12.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('22', 'GIVRE绮芙莉月抛彩色隐形眼镜1片装', '46.00', '第二盒半价', 'img/2f_1.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('23', '博士伦蕾丝炫眸日抛10片装', '78.00', '第二盒半价', 'img/2f_2.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('24', '伊厶康Artric76年抛1片装', '35.00', '李圣经同款', 'img/2f_3.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('25', '新视野Select Fairy妃妮严选月抛1片装', '74.00', '第二盒半价 ', 'img/2f_4.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('26', 'NEO可视眸小黑环半年抛1片装', '34.00', '网红推荐自然款', 'img/2f_5.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('27', '茵洛Clalen IRIS日抛10片装', '59.00', '韩国进口', 'img/2f_6.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('28', '科莱博小黑裙月抛2片装 ', '29.00', '两盒送护理液360ml ', 'img/2f_7.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('29', '菲士康大美目焕彩日抛30片装', '37.00', '四盒优惠', 'img/2f_8.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('30', '诺思Airtime摩登女郎美妆彩瞳月抛3片装', '99.00', '四盒送68元护理盒', 'img/2f_9g.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('31', '诺思魅眸星际日抛30片', '55.00', '2盒特惠', 'img/2f_10.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('32', '诺思魅眸星际日抛30片', '55.00', '2盒特惠', 'img/2f_10.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('33', '诺思魅眸星际日抛30片', '55.00', '2盒特惠', 'img/2f_10.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('34', '诺思魅眸星际日抛30片', '55.00', '2盒特惠', 'img/2f_10.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('35', '海昌星眸半年抛1片装', '65.00', '4盒32/盒', 'img/2f_2.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('36', 'NEO可视眸巨目年抛1片装', '19.00', '韩国进口 经典款式', 'img/2f_5.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('37', '伊厶康Artric76年抛1片装', '35.00', '李圣经同款', 'img/2f_3.jpg', '1', 'mt');
INSERT INTO `kedeyanjing` VALUES ('38', '海昌星眸半年抛1片装', '65.00', '4盒32/盒', 'img/2f_1.jpg', '1', 'mt');
SET FOREIGN_KEY_CHECKS=1;
