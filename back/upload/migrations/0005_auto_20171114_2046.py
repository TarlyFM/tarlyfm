# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-14 20:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('radio', '0003_auto_20171114_2046'),
        ('upload', '0004_auto_20171103_0735'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='upload',
        ),
        migrations.DeleteModel(
            name='Song',
        ),
    ]
