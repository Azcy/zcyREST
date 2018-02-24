## 1.查询

对RESTful URL进行GET请求即可查询到数据库中的数据，可以通过querystring来修改参数。

### 查询规则：
    
    所有不以_开头的键，都会被放进sequelize#query()的where参数中。
    
    所有以_开头的键，都会被放进sequelize#query()的参数中，和where保持平级。
    
    查询整个数据表中的数据：
    http://"URL":"端口号"/"表名"
    
    查询数据表中某id（主键）的数据：
    http://"URL":"端口号"/"表名"/"id"
    
    查询数据表中某字段值为"XXX"的数据：
    http://"URL":"端口号"/"表名"/?"字段名"="XXX"
    
    查询数据表中前"X"条数据：
    http://"URL":"端口号"/"表名"/?_limit="X"
    
    按照某字段（倒序）排序数据表中数据：
    http://"URL":"端口号"/"表名"/?_order="字段名" DESC
    
    按照某字段（升序）排序数据表中数据：
    http://"URL":"端口号"/"表名"/?_order="字段名" ASC
    
    跳过前"N"条后，查询数据表中数据：
    http://"URL":"端口号"/"表名"/?_offset="N"
    
    按某字段分组排序查询数据表中数据：
    http://"URL":"端口号"/"表名"/?_group="字段名"
    
    查询某字段中含有"Str"的数据：
    let res = qs.stringify({"字段名": {$like: '%Str%'}})
    
    http://"URL":"端口号"/"表名"/?res
    
    实例url请求：
    http://localhost:9000/DEPT?DNAME[$like]=%SA%
    
    查询某字段中大于"M"并小于"N"的数据：
    let res = qs.stringify({"字段名": {$gt: "M",$lt: "N"}})
    
    http://"URL":"端口号"/"表名"/?res
    
    实例url请求：
    http://localhost:9000/DEPT?kk[$gt]=M&kk[$lt]=N
    
    更多规则请参考Sequelize文档。




### 任务
    
    1、详细列出请求url，以及说明
    2、搞懂koa-restql
    3、jwt权限控制
    4、优化源码
    5、请求规则的测试
    6、koa与express的差别

```
Project.findAll({
  where: {
    id: {
      $and: {a: 5}           // AND (a = 5)
      $or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
      $gt: 6,                // id > 6
      $gte: 6,               // id >= 6
      $lt: 10,               // id < 10
      $lte: 10,              // id <= 10
      $ne: 20,               // id != 20
      $between: [6, 10],     // BETWEEN 6 AND 10
      $notBetween: [11, 15], // NOT BETWEEN 11 AND 15
      $in: [1, 2],           // IN [1, 2]
      $notIn: [1, 2],        // NOT IN [1, 2]
      $like: '%hat',         // LIKE '%hat'
      $notLike: '%hat'       // NOT LIKE '%hat'
      $iLike: '%hat'         // ILIKE '%hat' (case insensitive)  (PG only)
      $notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
      $overlap: [1, 2]       // && [1, 2] (PG array overlap operator)
      $contains: [1, 2]      // @> [1, 2] (PG array contains operator)
      $contained: [1, 2]     // <@ [1, 2] (PG array contained by operator)
      $any: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
    },
    status: {
      $not: false,           // status NOT FALSE
    }
  }
})


对数据集使用limit、offset、order 和 group

// 使用 limit 限制返回结果数
Project.findAll({ limit: 10 })

// 跳过前 10 条结果
Project.findAll({ offset: 10 })

// 跳过前 10 条结果后，返回两条数据
Project.findAll({ offset: 10, limit: 2 })


分组与排序的语法是相似的，如下：

Project.findAll({order: 'title DESC'})
// ORDER BY title DESC

Project.findAll({group: 'name'})
// GROUP BY name

Model.findAll({
  where: {
    name: 'a project',
    $or: [
      {id: [1, 2, 3]},
      {
        $and: [
          {id: {gt: 10}},
          {id: {lt: 100}}
        ]
      }
    ]
  }
});

//WHERE `Model`.`name` = 'a project' AND (`Model`.`id` IN (1, 2, 3) OR (`Model`.`id` > 10 AND `Model`.`id` < 100));
```