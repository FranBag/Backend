DROP DATABASE integrador;
CREATE DATABASE integrador;
USE integrador;


CREATE TABLE service(
id_service tinyint unsigned auto_increment primary key,
`name` varchar(60) not null,
`description` text,
price int not null,
duration tinyint not null
);

CREATE TABLE `user`(
id_user int unsigned auto_increment primary key,
email varchar(80) unique not null,
`name` varchar(50),
phone_number varchar(13),
pass varchar(72) not null
);


CREATE TABLE customer(
id_customer int unsigned auto_increment primary key,
id_user int unsigned,
foreign key(id_user) references `user`(id_user) on delete set null
);


CREATE TABLE professional(
id_professional int unsigned auto_increment primary key,
id_user int unsigned,
specialty tinyint unsigned,
foreign key(id_user) references `user`(id_user) on delete set null,
foreign key(specialty) references service(id_service) on delete set null
);



CREATE TABLE schedules(
id_schedule mediumint unsigned auto_increment primary key,
week_days enum("LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"),
start_hour time,
end_hour time
);


CREATE TABLE reservation(
id_reservation int unsigned auto_increment primary key,
id_customer int unsigned,
id_service tinyint unsigned,
id_schedule mediumint unsigned,
state enum("RESERVADO", "FINALIZADO", "CANCELADO")  DEFAULT "RESERVADO",
`date` date not null,
foreign key(id_customer) references customer(id_customer) on delete set null,
foreign key(id_service) references service(id_service) on delete set null,
foreign key(id_schedule) references schedules(id_schedule) on delete set null
);


CREATE TABLE bill(
id_bill int unsigned auto_increment primary key,
id_customer int unsigned,
id_reservation int unsigned,
amount int unsigned not null,
issue_date datetime,
foreign key(id_customer) references customer(id_customer) on delete set null,
foreign key(id_reservation) references reservation(id_reservation) on delete set null
);


-- schedules de lunes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("LUNES", "08:00:00", "08:30:00"), ("LUNES", "08:30:00", "09:00:00"),
("LUNES", "09:00:00", "09:30:00"), ("LUNES", "09:30:00", "10:00:00"),
("LUNES", "10:00:00", "10:30:00"), ("LUNES", "10:30:00", "11:00:00"),
("LUNES", "11:00:00", "11:30:00"), ("LUNES", "11:30:00", "12:00:00"),

("LUNES", "16:00:00", "16:30:00"), ("LUNES", "16:30:00", "17:00:00"),
("LUNES", "17:00:00", "17:30:00"), ("LUNES", "17:30:00", "18:00:00"),
("LUNES", "18:00:00", "18:30:00"), ("LUNES", "18:30:00", "19:00:00"),
("LUNES", "19:00:00", "19:30:00"), ("LUNES", "19:30:00", "20:00:00");

-- schedules de martes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("MARTES", "08:00:00", "08:30:00"), ("MARTES", "08:30:00", "09:00:00"),
("MARTES", "09:00:00", "09:30:00"), ("MARTES", "09:30:00", "10:00:00"),
("MARTES", "10:00:00", "10:30:00"), ("MARTES", "10:30:00", "11:00:00"),
("MARTES", "11:00:00", "11:30:00"), ("MARTES", "11:30:00", "12:00:00"),

("MARTES", "16:00:00", "16:30:00"), ("MARTES", "16:30:00", "17:00:00"),
("MARTES", "17:00:00", "17:30:00"), ("MARTES", "17:30:00", "18:00:00"),
("MARTES", "18:00:00", "18:30:00"), ("MARTES", "18:30:00", "19:00:00"),
("MARTES", "19:00:00", "19:30:00"), ("MARTES", "19:30:00", "20:00:00");

-- schedules de miercoles(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("MIERCOLES", "08:00:00", "08:30:00"), ("MIERCOLES", "08:30:00", "09:00:00"),
("MIERCOLES", "09:00:00", "09:30:00"), ("MIERCOLES", "09:30:00", "10:00:00"),
("MIERCOLES", "10:00:00", "10:30:00"), ("MIERCOLES", "10:30:00", "11:00:00"),
("MIERCOLES", "11:00:00", "11:30:00"), ("MIERCOLES", "11:30:00", "12:00:00"),

("MIERCOLES", "16:00:00", "16:30:00"), ("MIERCOLES", "16:30:00", "17:00:00"),
("MIERCOLES", "17:00:00", "17:30:00"), ("MIERCOLES", "17:30:00", "18:00:00"),
("MIERCOLES", "18:00:00", "18:30:00"), ("MIERCOLES", "18:30:00", "19:00:00"),
("MIERCOLES", "19:00:00", "19:30:00"), ("MIERCOLES", "19:30:00", "20:00:00");

-- schedules de jueves(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("JUEVES", "08:00:00", "08:30:00"), ("JUEVES", "08:30:00", "09:00:00"),
("JUEVES", "09:00:00", "09:30:00"), ("JUEVES", "09:30:00", "10:00:00"),
("JUEVES", "10:00:00", "10:30:00"), ("JUEVES", "10:30:00", "11:00:00"),
("JUEVES", "11:00:00", "11:30:00"), ("JUEVES", "11:30:00", "12:00:00"),

("JUEVES", "16:00:00", "16:30:00"), ("JUEVES", "16:30:00", "17:00:00"),
("JUEVES", "17:00:00", "17:30:00"), ("JUEVES", "17:30:00", "18:00:00"),
("JUEVES", "18:00:00", "18:30:00"), ("JUEVES", "18:30:00", "19:00:00"),
("JUEVES", "19:00:00", "19:30:00"), ("JUEVES", "19:30:00", "20:00:00");

-- schedules de viernes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("VIERNES", "08:00:00", "08:30:00"), ("VIERNES", "08:30:00", "09:00:00"),
("VIERNES", "09:00:00", "09:30:00"), ("VIERNES", "09:30:00", "10:00:00"),
("VIERNES", "10:00:00", "10:30:00"), ("VIERNES", "10:30:00", "11:00:00"),
("VIERNES", "11:00:00", "11:30:00"), ("VIERNES", "11:30:00", "12:00:00"),

("VIERNES", "16:00:00", "16:30:00"), ("VIERNES", "16:30:00", "17:00:00"),
("VIERNES", "17:00:00", "17:30:00"), ("VIERNES", "17:30:00", "18:00:00"),
("VIERNES", "18:00:00", "18:30:00"), ("VIERNES", "18:30:00", "19:00:00"),
("VIERNES", "19:00:00", "19:30:00"), ("VIERNES", "19:30:00", "20:00:00");

-- schedules de sábado(8:00 a 12:00)
INSERT INTO schedules (week_days, start_hour, end_hour) VALUES
("SABADO", "08:00:00", "08:30:00"), ("SABADO", "08:30:00", "09:00:00"),
("SABADO", "09:00:00", "09:30:00"), ("SABADO", "09:30:00", "10:00:00"),
("SABADO", "10:00:00", "10:30:00"), ("SABADO", "10:30:00", "11:00:00"),
("SABADO", "11:00:00", "11:30:00"), ("SABADO", "11:30:00", "12:00:00");


-- Inserciones de usuarios
INSERT INTO `user`(name, email, phone_number, pass) VALUES
("Luciana Gómez", "luciana.gomez@gmail.com", "3764123457", "lucy123"),
("Mateo Ramírez", "mateo.ramirez@yahoo.com", "3764123458", "ramirezpass"),
("Valentina Ortiz", "valentina.ortiz@outlook.com", "3764123459", "valentinapass"),
("Juan Pérez", "juan.perez@gmail.com", "3764123460", "juanpass2024"),
("Camila Sánchez", "camila.sanchez@hotmail.com", "3764123461", "camilasecreta");

-- Inserciones de servicios
INSERT INTO service(name, description, price, duration) VALUES
("A", "Hace A", 15000, 2),
("B", "Hace B", 7500, 1),
("C", "Hace C", 20000, 3),
("D", "Hace D", 10000, 2);

-- Inserciones de profesionales
INSERT INTO professional(id_user, specialty) VALUES
(2, 2),
(4, 4);

-- Inserciones de clientes
INSERT INTO customer(id_user) VALUES
(1),
(3),
(5);

-- Inserciones de reservas
INSERT INTO reservation(id_customer,id_service ,id_schedule ,state, date) VALUES
(1, 3, 8, "RESERVADO", "2024-05-21"),
(2, 1, 20, "CANCELADO", "2024-07-31"),
(3, 2, 44, "FINALIZADO", "2024-1-5");


SELECT * FROM schedules WHERE week_days = "LUNES" OR week_days = "SABADO";

SELECT * FROM `user`;

SELECT * FROM professional;

SELECT * FROM customer;

SELECT * FROM professional INNER JOIN `user` ON professional.id_user = user.id_user;

SELECT * FROM customer INNER JOIN `user` ON customer.id_user = user.id_user;

SELECT * FROM reservation;

SELECT * FROM service;