# 更新历史
## 1.3.6 <span style="font-size:0.6em;">2020-06-27</span>
- 更新: spring-boot 2.3.1.RELEASE
- 更新: guava 29.0-jre
## 1.3.5 <span style="font-size:0.6em;">2020-05-24</span>
- 更新: spring-boot 2.3.0.RELEASE
- 更新: querydsl 4.3.1
- 更新: druid 1.1.22
- 调整: 增加`spring-boot-starter-validation`以匹配`spring-boot 2.3.0`
## 1.3.3 <span style="font-size:0.6em;">2020-03-02</span>
- 更新: spring-boot 2.2.5.RELEASE
- 更新: querydsl 4.2.2
- 更新: druid 1.1.21
- 调整: 调整部分 `update` 方法,如果传入更新对象有`id`,会把`id`当作更新条件
- 调整: Service方法去掉默认事务声明
## 1.3.0 <span style="font-size:0.6em;">2019-10-23</span>
- 更新: spring-boot 2.2.0.RELEASE
- 更新: druid 1.1.20
- 调整: 调整部分 `javax` 的 `validation` , `serlevt` , `annotation` , `inject` 依赖到 `jakarta` 下
- 调整: SimpleView的json的默认编码为 `application/json` , 原为 `application/json;charset=UTF-8` 
## 1.2.0 <span style="font-size:0.6em;">2019-06-19</span>
- 更新: spring-boot 2.1.6.RELEASE
- 新增: 分页查询`page`方法增加2个排序重载
- 调整: 拆分`getColumn`,`getColumns`,`listColumn`,`listColumns`,`pageColumns`方法为`原方法`和增加`Ext`后缀的方法,`原方法`只允许传入字段,`Ext`方法允许字段再进行操作,如起别名或计算等操作(升级到1.2.0后,原有查询对字段进行计算或别名操作的方法需要改为Ext方法)
## 1.1.3 <span style="font-size:0.6em;">2019-06-12</span>
- 更新: spring-boot 2.1.5.RELEASE
- 更新: druid 1.1.17
- 修复: 部分update方法不更新修改时间`modifyTime`问题
## 1.1.2 <span style="font-size:0.6em;">2019-03-14</span>
- 更新: spring-boot 2.1.3.RELEASE
- 更新: druid 1.1.14
- 改进: mysql-connector-java 8.x版本在Sql-Builder和QueryDsl-CodeGen的兼容,不再主动初始化驱动,如使用JDBC4.0以下版本驱动,请手动初始化
## 1.1.0 <span style="font-size:0.6em;">2018-12-01</span>
- 更新: spring-boot 2.1.1.RELEASE
- 更新: druid 1.1.12
- 移除: huiche-core的jsr305和org.jetbrains.annotations,改为provided引入
## 1.0.7 <span style="font-size:0.6em;">2018-09-16</span>
- 新增: Sql语句格式化功能
- 新增: LogUtil,方便日志输入异常堆栈
- 新增: ValidationUtil,方便手动进行验证
- 新增: 部分常用插件的pluginManagement
- 新增: update新增设置null或基于字段本身的值进行更新的方法
- 改进: 合并create方法和creates方法
- 改进: 建表工具重构,改善扫描实体类的速度和兼容性,调整主键字段不进行任何更新
- 更新: spring-boot 2.0.5
- 移除: 默认service的部分非必要方法,传统Post风格的Crud控制器
## 1.0.6 <span style="font-size:0.6em;">2018-08-01</span>
- 新增: PasswordEncoder 接口,封装密码加密,starter里面提供默认实现
- 修复: HuiCheExcetion个别构造的code丢失问题
- 改进: StringUtil.json() 方法
- 改进: 合并updates到update方法避免歧义
- 改进: 条件拼装or方法参数为可变数组 不再限定只能2个条件
- 改进: 建表工具,移出小数类型的默认长度
- 改进: 建表工具,Java float类型 映射为 数据库Double类型
- 更新: spring-boot 2.0.4
- 移除: DateUtil 时间字符串转LocalDateTime方法
## 1.0.5 <span style="font-size:0.6em;">2018-06-25</span>
- 改进: web模块预置的 `restful` 风格的增删改查接口
## 1.0.4 <span style="font-size:0.6em;">2018-06-17</span>
- 新增: 文档和使用指南 [huiche.org](http://huiche.org)
- 新增: 数据迁移工具 `huiche-transfer`, 作为扩展模块
- 新增: 建表工具关键字`user`
- 更新: spring-boot 2.0.3
- 更新: jetbrains-annotations 16.0.2
## 1.0.3 <span style="font-size:0.6em;">2018-06-10</span>
- 新增: StreamUtil,扩展stream的groupby `org.huiche.core.util.StreamUtil`
- 改进: Query新增扩展列和排除列方法 `org.huiche.data.query.Query`
- 完善: javadoc
## 1.0.2 <span style="font-size:0.6em;">2018-06-03</span>
- 修复: BaseCrudDao的`exists`问题
- 更新: druid 1.1.10
## 1.0.1 <span style="font-size:0.6em;">2018-05-27</span>
- 修复: 全局异常捕获,错误堆栈打印问题 `org.huiche.config.ErrorHandler`
- 改进: BaseCrudDao `org.huiche.dao.BaseCrudDao`
- 改进: Query `org.huiche.data.query.Query`
## 1.0.0 <span style="font-size:0.6em;">2018-05-21</span>
- 初始版本