# Generated by Django 5.0.1 on 2024-02-05 02:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Flowers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('description', models.TextField()),
                ('image', models.URLField(max_length=1000)),
                ('size', models.CharField(choices=[('X', 'X'), ('S', 'S'), ('M', 'M'), ('L', 'L')], max_length=2)),
                ('discount', models.IntegerField(blank=True, default=0)),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Flowers.type')),
            ],
            options={
                'verbose_name': 'Flower',
                'verbose_name_plural': 'Flowers',
            },
        ),
    ]
