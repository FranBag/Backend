DROP DATABASE integrador;
CREATE DATABASE integrador;
USE integrador;


CREATE TABLE service(
id_service tinyint unsigned auto_increment primary key,
`name` varchar(60) not null,
`description` text,
price int not null,
duration float not null
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

-- schedules de miercoles(8:00 a 12:reservationuser00 y 16:00 a 20:00)
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
("Luciana Gómez", "luciana.gomez@gmail.com", "3764123457", "$2y$10$eAaXSj0pNCFBmEl7Hk6.dOYxvMdda79jgRl1sEedgpE4ZK7X5kneO"),
("Mateo Ramírez", "mateo.ramirez@yahoo.com", "3764123458", "$2y$10$DJx0CoZInRO8te.XcJ6flu8Yvn6hXECduEL7NYf7wfXrkUZU/3Asy"),
("Valentina Ortiz", "valentina.ortiz@outlook.com", "3764123459", "$2y$10$T4SSoD2gY6m4b/RZqBIS/uhcCRPgu8DVsBLKap5UHVdpiTFjRBZI."),
("Juan Pérez", "juan.perez@gmail.com", "3764123460", "$2y$10$wSl1NyhipOPV.sUOwFTPXOoiU.OrUQue8u10pFmRSkxdz4cs4LJZ6"),
("Camila Sánchez", "camila.sanchez@hotmail.com", "3764123461", "$2y$10$V6/DTbwnOZLQmZy1wzQ5qeAB/BOA7h6RogHp7kgHEY1Au/ZYIEKe2"),
("Sofía López", "sofia.lopez@gmail.com", "3764123462", "$2y$10$.4AXa.siLak4xtZS1qSp..rf7iQgc6THLaPE0MwIJ1pTBMP/zm1ce"),
("Lucas Fernández", "lucas.fernandez@yahoo.com", "3764123463", "$2y$10$CZ3CxFddSSQqk4UjfNaE9.86OkrilQg8.x5LumQMLxytJrAe3zy.a"),
("Martina Gómez", "martina.gomez@outlook.com", "3764123464", "$2y$10$b4EqwCrF16I2csr5sG5zpO6QjPi3rjDNDqyQBO8cFBZPui/ctgNFO"),
("Tomás Rodríguez", "tomas.rodriguez@gmail.com", "3764123465", "$2y$10$cPhPRRacLa6XobRLt3u0bOKG8vyByFbKl1/Qr26kNjAn1PXklquQm");

-- Inserciones de servicios
INSERT INTO service(name, description, price, duration) VALUES
("Corte de pelo", "Desde cortes simples, clásicos y modernos.", 15000, 0.5),
("Peinados y Recogidos", "Para un evento especial como una boda, fiesta o graduación.", 10000, 1),
("Colorimetría", "Amplia gamas de opciones, tintes permanentes, semi permanentes, balayage, mechas y reflejos.", 35000, 3),
("Tratamientos capilares", "Incluye, hidratación, alizado, nutrición, reparación de daños, entre otros.", 20000, 1.5);

-- Inserciones de profesionales
INSERT INTO professional(id_user, specialty) VALUES
(2, 1),
(4, 2),
(6, 3),
(8, 4);

-- Inserciones de clientes
INSERT INTO customer(id_user) VALUES
(1),
(3),
(5),
(7),
(9);

-- Inserciones de reservas
INSERT INTO reservation(id_customer, id_service, id_schedule, state, date) VALUES
(1, 2, 10, "RESERVADO", "2024-05-22"),
(2, 4, 12, "FINALIZADO", "2024-06-15"),
(3, 1, 18, "RESERVADO", "2024-07-01"),
(4, 3, 25, "CANCELADO", "2024-08-12"),
(5, 4, 30, "RESERVADO", "2024-09-18"),
(1, 1, 5, "FINALIZADO", "2024-10-05"),
(2, 3, 40, "RESERVADO", "2024-10-21"),
(3, 2, 55, "CANCELADO", "2024-11-01"),
(4, 4, 60, "RESERVADO", "2024-11-15"),
(5, 2, 70, "FINALIZADO", "2024-12-10");


SELECT * FROM schedules WHERE week_days = "LUNES" OR week_days = "SABADO";

SELECT * FROM `user`;

SELECT * FROM professional;

SELECT * FROM customer INNER JOIN `user` ON customer.id_user = `user`.id_user;

SELECT * FROM professional INNER JOIN `user` ON professional.id_user = user.id_user;

SELECT * FROM customer INNER JOIN `user` ON customer.id_user = user.id_user;

SELECT *  FROM reservation INNER JOIN customer ON customer.id_customer =  reservation.id_customer;

SELECT
r.id_reservation,
r.id_customer,
r.id_service,
r.id_schedule,
r.state,
r.`date`
FROM reservation r
INNER JOIN service s ON r.id_service = s.id_service
INNER JOIN professional p ON s.id_service = p.specialty
WHERE p.id_user = 2;

SELECT * FROM service;

SELECT 
    r.id_reservation,
    u.`name` AS customer,
    s.`name` AS service,
    sch.start_hour AS `schedule`,
    r.state,
    r.`date`
FROM reservation r
INNER JOIN customer c ON r.id_customer = c.id_customer
INNER JOIN `user` u ON c.id_user = u.id_user
INNER JOIN service s ON r.id_service = s.id_service
INNER JOIN schedules sch ON r.id_schedule = sch.id_schedule
INNER JOIN professional p ON s.id_service = p.specialty
WHERE p.id_user = 9;
