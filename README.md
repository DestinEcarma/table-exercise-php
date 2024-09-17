# Table Exercise PHP

A project to practice PHP and MySQL. The project is a simple table with the following features:

- Add a new row
- Edit a row
- Delete a row

## Requirements

- PHP ^7.4
- MySQL ^5.7

## Usage

First of all, you need to create a database with the name of `contactlist`, then you can import the [contactlist.sql](src/db/contactlist.sql) file to create the table.

```bash
mysql -u root -p contactlist < src/db/contactlist.sql
```

After that, you can run the PHP built-in server:

```bash
php -S localhost:8000
```

Now you can access the project at [http://localhost:8000](http://localhost:8000).

