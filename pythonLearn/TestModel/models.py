'''
@Author: your name
@Date: 2020-03-06 15:10:14
@LastEditTime: 2020-03-06 15:19:14
@LastEditors: your name
@Description: In User Settings Edit
@FilePath: \pythonLearn\TestModel\models.py
'''
from django.db import models

# Create your models here.
from django.db import models
 
class Test(models.Model):
    name = models.CharField(max_length=20)
