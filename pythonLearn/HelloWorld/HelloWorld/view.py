'''
@Author: your name
@Date: 2020-03-06 14:55:24
@LastEditTime: 2020-03-06 14:56:22
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: \pythonLearn\HelloWorld\HelloWorld\view.py
'''
from django.http import HttpResponse
 
def hello(request):
    return HttpResponse("Hello world ! ")
