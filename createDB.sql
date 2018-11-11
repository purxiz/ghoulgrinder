CREATE DATABASE ghoulgrinder;
USE ghoulgrinder;

CREATE TABLE accounts (
  aId INT NOT NULL AUTO_INCREMENT,
  aEmail VARCHAR(40)NOT NULL,
  aPassword VARCHAR(40) NOT NULL,
  PRIMARY KEY(aId)
);

CREATE TABLE domains  (
  dId INT NOT NULL AUTO_INCREMENT,
  aId INT NOT NULL,
  dName VARCHAR(40) NOT NULL,
  PRIMARY KEY (dId),
  FOREIGN KEY (aId) REFERENCES accounts(aId)
);

CREATE TABLE nodes (
  nId INT NOT NULL AUTO_INCREMENT,
  nType INT NOT NULL,
  nLocation POINT NOT NULL,
  PRIMARY KEY (nId)
);

CREATE TABLE vehicles (
  vId INT NOT NULL AUTO_INCREMENT,
  nId INT,
  dId INT NOT NULL,
  vType INT NOT NULL,
  PRIMARY KEY(vId),
  FOREIGN KEY(nId) REFERENCES nodes(nId),
  FOREIGN KEY(dId) REFERENCES domains(dId)
);

CREATE TABLE route_steps (
  rsId INT NOT NULL AUTO_INCREMENT,
  vId INT NOT NULL,
  rsStep INT NOT NULL,
  rsProgress INT NOT NULL,
  rsStartNode INT NOT NULL,
  rsEndNode INT NOT NULL,
  PRIMARY KEY (rsId),
  FOREIGN KEY (vId) REFERENCES vehicles(vId)
);

CREATE TABLE route_commands (
  rsId INT NOT NULL,
  rcStep INT NOT NULL,
  rcType INT NOT NULL,
  rcAmount INT NOT NULL,
  FOREIGN KEY (rsId) REFERENCES route_steps(rsId)
);

CREATE TABLE vehicle_holds (
  vId INT NOT NULL,
  vhAmount INT NOT NULL,
  vhType INT NOT NULL,
  FOREIGN KEY (vId) REFERENCES vehicles(vId)
);

CREATE TABLE structures (
  sId INT NOT NULL AUTO_INCREMENT,
  nId INT NOT NULL,
  sType INT NOT NULL,
  sRecipe INT,
  PRIMARY KEY(sId),
  FOREIGN KEY(nId) REFERENCES nodes(nId),
  UNIQUE (nId)
);

CREATE TABLE items  (
  iType INT NOT NULL,
  nId INT NOT NULL,
  FOREIGN KEY (nId) REFERENCES nodes(nId)
);
