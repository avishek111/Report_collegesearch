# Generated by Django 3.1.7 on 2022-02-05 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0005_auto_20220205_1830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='College_id',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='user_id',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
