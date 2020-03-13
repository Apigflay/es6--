'''
@Author: your name
@Date: 2020-03-02 15:56:06
@LastEditTime: 2020-03-09 13:38:47
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: \pythonLearn\python.py
'''
# -*- coding: utf-8 -*-
# name = input('place input your name')
# print('I\'m \"OK\"!')
# print('''line1                                      
# │... line2                                               
# │... line3''')
# a1 = 123;
# a1 = '234';
# print(a1);
# a = 'ABC'
# b = a
# a = 'XYZ'
# print(b)
# print('%2d-%02d' % (3, 1))
# print('%.2f' % 3.1415926)
# L = [
#     ['Apple', 'Google', 'Microsoft'],
#     ['Java', 'Python', 'Ruby', 'PHP'],
#     ['Adam', 'Bart', 'Lisa']
# ]
# # 打印Apple:
# print(L[0][0])
# # 打印Python:
# print(L[1][1])
# # 打印Lisa:
# print('2222')
# import mysql.connector
 

 
# print(mydb)
#-i https://pypi.tuna.tsinghua.edu.cn/simple/

# use qdm19942899_db # 库名

# create table student (  #创建student表 增加自增id
# id int primary key auto_increment,
# username varchar(50) not null,
# age int(3) not null,
# gender varchar(30) not null,
# address varchar(100) not null,
# love varchar(30) not null,
# time timestamp not null default current_timestamp
# )

# alter table student modify column time timestamp not null default current_timestamp; 初始为设置时间 后来自动增加
# alter table student modify column time timestamp not null default current_timestamp on update current_timestamp;

# select * from stu  # 查stu表所有数据
# select * from stu where (classId>=2) #查stu表 id>=2的所有数据

# insert into studentMsg (username,age,gender,address,love) values ('小刚',22,'男','Hong Kong','滑冰，游泳') 增加数据
#  db.commit()

import pymysql
db=pymysql.connect(host="qdm19942899.my3w.com", user="qdm19942899", passwd="sql283251605.", db="qdm19942899_db", charset='utf8' )
# 使用cursor()方法获取操作游标 
cursor = db.cursor()
# 定义要执行的SQL语句
# sql = "
# create table studentMsg (  
# id int primary key auto_increment,
# username varchar(50) not null,
# age int(3) not null,
# gender varchar(30) not null,
# address varchar(100) not null,
# love varchar(30) not null,
# time timestamp not null default current_timestamp
# )
# "
sql = "select * from studentMsg where (age>=28)"

# 执行SQL语句
res=cursor.execute(sql)

print(res)
if res>0:
    print(cursor.fetchall())
else:
    print('没有数据')
# print(cursor.fetchall())
# 关闭光标对象
cursor.close()
 
# 关闭数据库连接
db.close()

# pip install Django -i https://pypi.tuna.tsinghua.edu.cn/simple

# python3 manage.py runserver