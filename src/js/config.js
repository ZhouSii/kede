/* 
* @Author: Marte
* @Date:   2018-02-03 18:20:03
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 15:50:03
*/

require.config({
    // console.log(666);
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
        'banner':'../lib/unslider.min'
    },

    shim:{
        // 设置依赖
        'zoom':['jquery'],
        'banner':['jquery'],
    }
})