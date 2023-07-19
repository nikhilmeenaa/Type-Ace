# Generated by Django 4.2.1 on 2023-07-19 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_usersdata_username"),
    ]

    operations = [
        migrations.AlterField(
            model_name="usersdata",
            name="best100",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="usersdata",
            name="best150",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="usersdata",
            name="best200",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="usersdata",
            name="best30",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="usersdata",
            name="best50",
            field=models.IntegerField(default=0),
        ),
    ]
