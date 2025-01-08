create database Eventos;
use Eventos;

create table Conferencias(
idconf int primary key not null,
titulo varchar(50) not null,
fecha varchar(50) not null,
lugar varchar(50) not null,
duracion varchar(50) not null,
descripcion varchar(50) not null
);
insert into Conferencias(idconf,titulo,fecha,lugar,duracion,descripcion)
values(1,"Angular 10","10/02/2022","Salon 1","3 horas","Conferencia sobre angular 10"),
(2,"Ionic 5","11/02/2022","Salon 2","4 horas","Conferencia sobre ionic 5"),
(3,"React native","12/02/2022","Salon 3","2 horas","Conferencia sobre React native");

create table Talleres(
idtar int primary key not null,
titulo varchar(50) not null,
fecha varchar(50) not null,
lugar varchar(50) not null,
duracion varchar(50) not null,
descripcion varchar(50) not null
);

insert into Talleres(idtar,titulo,fecha,lugar,duracion,descripcion)
values(100,"Taller de Github","14/02/2022","Salon 4","2 horas y media","Taller sobre Github"),
(101,"Taller de angular","10/02/2022","Salon 5","1 hora y media","Taller sobre angular"),
(102,"Taller de ionic","11/02/2022","Salon 6","1 hora","Uso basico de ionic");

create table Concursos(
idconc int primary key not null,
titulo varchar(50) not null,
fecha varchar(50) not null,
lugar varchar(50) not null,
duracion varchar(50) not null,
descripcion varchar(50) not null
);

insert into Concursos(idconc,titulo,fecha,lugar,duracion,descripcion)
values(1001,"Concurso Angular","15/02/2022","Salon 1","2 horas y media","Concurso sobre Angular"),
(1002,"Concurso sobre Ionic","15/02/2022","Salon 2","1 hora y media","Concurso sobre angular"),
(1003,"Concurso de React native ","15/02/2022","Salon 3","2 horas","Concurso sobre React native");

drop table Conferencias;
drop table Talleres;
drop table Concursos;
select * from Talleres;
select * from Conferencias;
select * from Concursos;