CREATE TABLE vehicles (
  vId INT NOT NULL AUTO_INCREMENT,
  vType INT NOT NULL,
  PRIMARY KEY(vId)
);

CREATE TABLE routes (
  rId INT NOT NULL AUTO_INCREMENT,
  vId INT NOT NULL,
  PRIMARY KEY (rId),
  FOREIGN KEY (vId) REFERENCES vehicles(vId)
); 

CREATE TABLE route_steps (
  rsId INT NOT NULL AUTO_INCREMENT,
  rId INT NOT NULL,
  rsStep INT NOT NULL,
  rsStartNode POINT NOT NULL,
  rsEndNode POINT NOT NULL,
  PRIMARY KEY (rsId),
  FOREIGN KEY (rId) REFERENCES routes(rId)
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

CREATE TABLE structures (
  sId INT NOT NULL,
  sType VARCHAR(40) NOT NULL,
  PRIMARY KEY(sId)
);

CREATE TABLE structure_recipes  (
  sId INT NOT NULL,
  srType INT NOT NULL,
  FOREIGN KEY (sId) REFERENCES structures(sId)
);

CREATE TABLE items  (
  iId INT NOT NULL,
  iType VARCHAR(40),
  iNode POINT,
  PRIMARY KEY(iId)
);