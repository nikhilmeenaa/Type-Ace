# Generated by Django 4.2.1 on 2023-07-19 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_alter_usersdata_best100_alter_usersdata_best150_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="usersdata",
            name="results",
            field=models.JSONField(),
        ),
    ]
