INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount@sample.com", "blablabla");

INSERT INTO domains
(aId, dName)
VALUES
(1, "Lumbridge");

INSERT INTO structures
(sId, sType)
VALUES
(1, 1);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(1, 1);

INSERT INTO items
(iId, iType, iNode)
VALUES
(1, 1, POINT(1,1));

INSERT INTO vehicles
(vType)
VALUES
(1);

INSERT INTO routes
(vId)
VALUES
(1);

INSERT INTO route_steps
(rId, rsStep, rsStartNode, rsEndNode)
VALUES
(1, 1, POINT(1,1), POINT(1,1));

INSERT INTO route_commands
(rsId, rcStep, rcType, rcAmount)
VALUES
(1, 1, 1, 1);

INSERT INTO vehicle_holds
(vId, vhAmount, vhType)
VALUES
(1, 1, 1);