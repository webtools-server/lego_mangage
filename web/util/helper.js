/**
 * helper
 */

export function serializeMemberValue(arr = []) {
  if (!Array.isArray(arr)) arr = [];
  return `,${arr.join(',')},`;
}

export function parseMemberValue(str = '') {
  if (typeof str !== 'string') str = '';
  str = str.slice(1, -1);
  if (!str) return [];
  return str.split(',');
}

export function  getUrlKey(name){
  return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}
/**
 * 根据索引位置修改数据
 * @param {*} levelIndex 索引顺序（例如0-2）
 * @param {*} obj 源数据
 * @param {*} changeData  找到的位置修改为新数据 
 */
export function setPageData(levelIndex, obj, changeData) {
  var index = levelIndex.shift()
  if (!obj[index]) {
      obj[index] = {
        children: {}
      }
  }
  if (!obj[index].children) {
      obj[index].children = {}
  }

  if (levelIndex.length) {
    setPageData(levelIndex, obj[index].children, changeData)
  } else {
      obj[index].children = changeData
  }

  // a = [{children: [{a: 2}, {b: 2, children: [{test: 1}, {test2: 3}]}]}]
  // a[0]['children'][1]['children']
}

/**
 * 
 * @param {*} levelIndex key的连续key
 * @param {*} obj 
 * @param {*} changeData 
 */
export function setPageDataItemByKey(levelIndex, obj, changeData) {
  var index = levelIndex.shift()
/*   if (!obj[index]) {
      obj[index] = {}
  } */

  if (levelIndex.length) {
    setPageDataItemByKey(levelIndex, obj[index], changeData)
  } else {
    obj[index] = changeData
  }
}

/**
 * 遍历修改这个值中的uuid属性 并整合 业务组件中prop到children
 * @param {*} item 
 * @param {*} index  当前数据在兄弟元素中的index
 * @param {*} level  层级， 从 0 开始（数据的深度）
 * @param {*} levelIndex  索引顺序（例如0-2）
 * component_type: 1 是业务组件，需要遍历下级的uuid的组件
 */
export function setUuid(item, index, level, levelIndex, sbilingItem) {
  // 
  if(item.component_type === 0 || !item.component_type) {
    if(!item.props.uuid) {
      item.props.uuid = '' + levelIndex + '-' + index
    }
    if(!item.props.topUuid) {
      item.props.topUuid = '' + levelIndex
    }
  }
  if(item.component_type === 1) {
    if(!item.props.data.uuid) {
      item.props.data.uuid = '' + levelIndex + '-' +  index
    }
    if(!item.props.data.topUuid) {
      item.props.data.topUuid = '' + levelIndex
    }
    if(item.props.data.children) {
      item.props.data.children((child, childIndex) => {
         setUuid(child, childIndex, level + 1, '' + levelIndex + '-' +  childIndex, item.props.data.children)
      })
      item.children = item.props.data.children
    }
    
  }
}


export function updatePageItemThemeStyle(data, currentThemeStyle) {
  data.forEach(item => {
    if(item.themeExtend) {
      // 当前主题下的哪个配色 (主题style目前只有color， 但用于组件的字体色和背景色)
      const themeExtendStyleOne = item.themeExtend[currentThemeStyle.t_theme_id]
      if(themeExtendStyleOne) {
        if(!item.props.originStyles) item.props.originStyles= {}
        themeExtendStyleOne.forEach(styleItem => {
          // 渐变和opacity todo
          item.props.originStyles[styleItem.css] = currentThemeStyle.config[styleItem.key][styleItem.type]
        })
      }
    }
    if(item.children && item.children.length > 1) {
      updatePageItemThemeStyle(item.children, currentTheme)
    }
  });
}