INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount1@sample.com", "blablabla");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount2@sample.com", "uc merced");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount3@sample.com", "science");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount4@sample.com", "engineering");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount5@sample.com", "fat_gaps");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount6@sample.com", "ben_is_a_nerd_101");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount7@sample.com", "test_data_is_for_losers");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount8@sample.com", "blebleble");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount9@sample.com", "asdihdbu3t79here9");

INSERT INTO accounts
(aEmail, aPassword)
VALUES
("testaccount10@sample.com", "qirurgburgij2bho4rbgugi");

INSERT INTO domains
(aId, dName)
VALUES
(1, "Lumbridge");

INSERT INTO domains
(aId, dName)
VALUES
(2, "Varrock");

INSERT INTO domains
(aId, dName)
VALUES
(3, "Wilderness");

INSERT INTO domains
(aId, dName)
VALUES
(4, "Fallador");

INSERT INTO domains
(aId, dName)
VALUES
(5, "Camelot");

INSERT INTO domains
(aId, dName)
VALUES
(6, "Rimmington");

INSERT INTO domains
(aId, dName)
VALUES
(7, "Ardougne");

INSERT INTO domains
(aId, dName)
VALUES
(8, "Witchaven");

INSERT INTO domains
(aId, dName)
VALUES
(9, "Karamja");

INSERT INTO domains
(aId, dName)
VALUES
(10, "Draynor");

INSERT INTO structures
(sId, sType)
VALUES
(1, 1);

INSERT INTO structures
(sId, sType)
VALUES
(2, 1);

INSERT INTO structures
(sId, sType)
VALUES
(3, 2);

INSERT INTO structures
(sId, sType)
VALUES
(4, 3);

INSERT INTO structures
(sId, sType)
VALUES
(5, 4);

INSERT INTO structures
(sId, sType)
VALUES
(6, 4);

INSERT INTO structures
(sId, sType)
VALUES
(7, 4);

INSERT INTO structures
(sId, sType)
VALUES
(8, 5);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(1, 1);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(2, 1);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(3, 1);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(4, 1);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(5, 2);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(6, 2);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(7, 2);

INSERT INTO structure_recipes
(sId, srType)
VALUES
(8, 3);

INSERT INTO items
(iType, iNode)
VALUES
(1, POINT(1,1));

INSERT INTO items
(iType, iNode)
VALUES
(1, POINT(23,47));

INSERT INTO items
(iType, iNode)
VALUES
(1, POINT(54,26));

INSERT INTO items
(iType, iNode)
VALUES
(2, POINT(-46,-56));

INSERT INTO items
(iType, iNode)
VALUES
(2, POINT(-34,75));

INSERT INTO items
(iType, iNode)
VALUES
(3, POINT(24,1));

INSERT INTO items
(iType, iNode)
VALUES
(4, POINT(46,-74));

INSERT INTO items
(iType, iNode)
VALUES
(4, POINT(-67,-93));

INSERT INTO items
(iType, iNode)
VALUES
(5, POINT(-45,99));

INSERT INTO items
(iType, iNode)
VALUES
(6, POINT(2,4));

INSERT INTO vehicles
(vType)
VALUES
(1);

INSERT INTO vehicles
(vType)
VALUES
(2);

INSERT INTO vehicles
(vType)
VALUES
(3);

INSERT INTO vehicles
(vType)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(1);

INSERT INTO routes
(vId)
VALUES
(2);

INSERT INTO routes
(vId)
VALUES
(3);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(4);

INSERT INTO routes
(vId)
VALUES
(3);

INSERT INTO routes
(vId)
VALUES
(2);

INSERT INTO routes
(vId)
VALUES
(1);

INSERT INTO route_steps
(rId, rsStep, rsStartNode, rsEndNode)
VALUES
(1, 1, POINT(1,1), POINT(2,1));

INSERT INTO route_steps
(rId, rsStep, rsStartNode, rsEndNode)
VALUES
(3, 1, POINT(2,12), POINT(2,13));

INSERT INTO route_steps
(rId, rsStep, rsStartNode, rsEndNode)
VALUES
(1, 1, POINT(1,43), POINT(2,43));

INSERT INTO route_steps
(rId, rsStep, rsStartNode, rsEndNode)
VALUES
(2, 1, POINT(5,6), POINT(4,6));

INSERT INTO route_commands
(rsId, rcStep, rcType, rcAmount)
VALUES
(1, 1, 1, 1);

INSERT INTO vehicle_holds
(vId, vhAmount, vhType)
VALUES
(1, 1, 1);
