DROP DATABASE peluqueria;
CREATE DATABASE peluqueria;
USE peluqueria;


CREATE TABLE usuario(
id_usuario int unsigned auto_increment primary key,
email varchar(80) unique not null,
`name` varchar(50),
phone_number varchar(13),
pass varchar(72) not null
);


CREATE TABLE cliente(
id_cliente int unsigned auto_increment primary key,
id_usuario int unsigned,
foreign key(id_usuario) references usuario(id_usuario) on delete set null
);


CREATE TABLE profesional(
id_profesional int unsigned auto_increment primary key,
id_usuario int unsigned,
especialidad enum("COMER", "SALTAR", "CORRER", "CAMINAR"), /*Arreglar y poner enums con sentido*/
foreign key(id_usuario) references usuario(id_usuario) on delete set null
);


CREATE TABLE servicio(
id_servicio tinyint unsigned auto_increment primary key,
id_profesional int unsigned,
`name` varchar(60) not null,
`description` text,
price int not null,
duration tinyint not null, /*duración en numero, por ej: duration=2, significa
que ocupa dos unidades de turno osea dos hora y media = 1 hora*/
foreign key(id_profesional) references profesional(id_profesional) on delete set null
);


CREATE TABLE horarios(
id_horario mediumint unsigned auto_increment primary key,
week_days enum("LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"),
start_hour time,
end_hour time
);


CREATE TABLE reserva(
id_reserva int unsigned auto_increment primary key,
id_cliente int unsigned,
id_servicio tinyint unsigned,
id_horario mediumint unsigned,
/*TERMINAR el enum*/
state enum("RESERVADO", "FINALIZADO", "CANCELADO"),
`date` date not null,
foreign key(id_cliente) references cliente(id_cliente) on delete set null,
foreign key(id_servicio) references servicio(id_servicio) on delete set null,
foreign key(id_horario) references horarios(id_horario) on delete set null
);


CREATE TABLE factura(
id_factura int unsigned auto_increment primary key,
id_cliente int unsigned,
id_reserva int unsigned,
amount int unsigned not null,
issue_date datetime, /*el backend le manda la fecha y hora en la que se hizo*/
foreign key(id_cliente) references cliente(id_cliente) on delete set null,
foreign key(id_reserva) references reserva(id_reserva) on delete set null
);


-- Horarios de lunes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("LUNES", "08:00:00", "08:30:00"), ("LUNES", "08:30:00", "09:00:00"),
("LUNES", "09:00:00", "09:30:00"), ("LUNES", "09:30:00", "10:00:00"),
("LUNES", "10:00:00", "10:30:00"), ("LUNES", "10:30:00", "11:00:00"),
("LUNES", "11:00:00", "11:30:00"), ("LUNES", "11:30:00", "12:00:00"),

("LUNES", "16:00:00", "16:30:00"), ("LUNES", "16:30:00", "17:00:00"),
("LUNES", "17:00:00", "17:30:00"), ("LUNES", "17:30:00", "18:00:00"),
("LUNES", "18:00:00", "18:30:00"), ("LUNES", "18:30:00", "19:00:00"),
("LUNES", "19:00:00", "19:30:00"), ("LUNES", "19:30:00", "20:00:00");

-- Horarios de martes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("MARTES", "08:00:00", "08:30:00"), ("MARTES", "08:30:00", "09:00:00"),
("MARTES", "09:00:00", "09:30:00"), ("MARTES", "09:30:00", "10:00:00"),
("MARTES", "10:00:00", "10:30:00"), ("MARTES", "10:30:00", "11:00:00"),
("MARTES", "11:00:00", "11:30:00"), ("MARTES", "11:30:00", "12:00:00"),

("MARTES", "16:00:00", "16:30:00"), ("MARTES", "16:30:00", "17:00:00"),
("MARTES", "17:00:00", "17:30:00"), ("MARTES", "17:30:00", "18:00:00"),
("MARTES", "18:00:00", "18:30:00"), ("MARTES", "18:30:00", "19:00:00"),
("MARTES", "19:00:00", "19:30:00"), ("MARTES", "19:30:00", "20:00:00");

-- Horarios de miercoles(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("MIERCOLES", "08:00:00", "08:30:00"), ("MIERCOLES", "08:30:00", "09:00:00"),
("MIERCOLES", "09:00:00", "09:30:00"), ("MIERCOLES", "09:30:00", "10:00:00"),
("MIERCOLES", "10:00:00", "10:30:00"), ("MIERCOLES", "10:30:00", "11:00:00"),
("MIERCOLES", "11:00:00", "11:30:00"), ("MIERCOLES", "11:30:00", "12:00:00"),

("MIERCOLES", "16:00:00", "16:30:00"), ("MIERCOLES", "16:30:00", "17:00:00"),
("MIERCOLES", "17:00:00", "17:30:00"), ("MIERCOLES", "17:30:00", "18:00:00"),
("MIERCOLES", "18:00:00", "18:30:00"), ("MIERCOLES", "18:30:00", "19:00:00"),
("MIERCOLES", "19:00:00", "19:30:00"), ("MIERCOLES", "19:30:00", "20:00:00");

-- Horarios de jueves(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("JUEVES", "08:00:00", "08:30:00"), ("JUEVES", "08:30:00", "09:00:00"),
("JUEVES", "09:00:00", "09:30:00"), ("JUEVES", "09:30:00", "10:00:00"),
("JUEVES", "10:00:00", "10:30:00"), ("JUEVES", "10:30:00", "11:00:00"),
("JUEVES", "11:00:00", "11:30:00"), ("JUEVES", "11:30:00", "12:00:00"),

("JUEVES", "16:00:00", "16:30:00"), ("JUEVES", "16:30:00", "17:00:00"),
("JUEVES", "17:00:00", "17:30:00"), ("JUEVES", "17:30:00", "18:00:00"),
("JUEVES", "18:00:00", "18:30:00"), ("JUEVES", "18:30:00", "19:00:00"),
("JUEVES", "19:00:00", "19:30:00"), ("JUEVES", "19:30:00", "20:00:00");

-- Horarios de viernes(8:00 a 12:00 y 16:00 a 20:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("VIERNES", "08:00:00", "08:30:00"), ("VIERNES", "08:30:00", "09:00:00"),
("VIERNES", "09:00:00", "09:30:00"), ("VIERNES", "09:30:00", "10:00:00"),
("VIERNES", "10:00:00", "10:30:00"), ("VIERNES", "10:30:00", "11:00:00"),
("VIERNES", "11:00:00", "11:30:00"), ("VIERNES", "11:30:00", "12:00:00"),

("VIERNES", "16:00:00", "16:30:00"), ("VIERNES", "16:30:00", "17:00:00"),
("VIERNES", "17:00:00", "17:30:00"), ("VIERNES", "17:30:00", "18:00:00"),
("VIERNES", "18:00:00", "18:30:00"), ("VIERNES", "18:30:00", "19:00:00"),
("VIERNES", "19:00:00", "19:30:00"), ("VIERNES", "19:30:00", "20:00:00");

-- Horarios de sábado(8:00 a 12:00)
INSERT INTO horarios (week_days, start_hour, end_hour) VALUES
("SABADO", "08:00:00", "08:30:00"), ("SABADO", "08:30:00", "09:00:00"),
("SABADO", "09:00:00", "09:30:00"), ("SABADO", "09:30:00", "10:00:00"),
("SABADO", "10:00:00", "10:30:00"), ("SABADO", "10:30:00", "11:00:00"),
("SABADO", "11:00:00", "11:30:00"), ("SABADO", "11:30:00", "12:00:00");


-- Inserciones de usuarios
INSERT INTO usuario(name, email, phone_number, pass) VALUES
("Luciana Gómez", "luciana.gomez@gmail.com", "3764123457", "lucy123"),
("Mateo Ramírez", "mateo.ramirez@yahoo.com", "3764123458", "ramirezpass"),
("Valentina Ortiz", "valentina.ortiz@outlook.com", "3764123459", "valentinapass"),
("Juan Pérez", "juan.perez@gmail.com", "3764123460", "juanpass2024"),
("Camila Sánchez", "camila.sanchez@hotmail.com", "3764123461", "camilasecreta");


-- Inserciones de profesionales
INSERT INTO profesional(id_usuario, especialidad) VALUES
(2, "SALTAR"),
(4, "CORRER");


-- Inserciones de clientes
INSERT INTO cliente(id_usuario) VALUES
(1),
(3),
(5);

SELECT * FROM horarios WHERE week_days = "LUNES" OR week_days = "SABADO";

SELECT * FROM usuario;

SELECT * FROM profesional;

SELECT * FROM profesional INNER JOIN usuario ON profesional.id_usuario = usuario.id_usuario;

SELECT * FROM cliente INNER JOIN usuario ON cliente.id_usuario = usuario.id_usuario;