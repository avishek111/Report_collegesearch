# Generated by Django 3.1.7 on 2022-03-05 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='profile_picture',
            field=models.FileField(default='static/images/CF1_logo.png', upload_to='static/profile'),
        ),
    ]
