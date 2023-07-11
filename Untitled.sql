CREATE TABLE `crud_producto` (
  `id` INTEGER PRIMARY KEY NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `imagen` VARCHAR(100),
  `precio` DECIMAL NOT NULL
);

CREATE TABLE `auth_user` (
  `id` INTEGER PRIMARY KEY NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `last_login` DATETIME,
  `is_superuser` BOOL NOT NULL,
  `username` VARCHAR(150) UNIQUE NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `is_staff` BOOL NOT NULL,
  `is_active` BOOL NOT NULL,
  `date_joined` DATETIME NOT NULL,
  `first_name` VARCHAR(150) NOT NULL
);
