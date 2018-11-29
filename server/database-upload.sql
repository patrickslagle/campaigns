-- create a temporary table to get all the data from the .csv file
\COPY "Temp" ("Id", "IpAddress", "City", "Industry", "Size") FROM '/home2/Coding/jobhunt/assessments/campaigns/assets/Proof_homework.csv' DELIMITER ',' CSV HEADER;

-- insert data into segmented more specific tables
INSERT INTO "UserIpAddress" ("IpAddress") SELECT "IpAddress" FROM "Temp";
INSERT INTO "UserLocation" ("UserId", "City") SELECT "Id", "City" FROM "Temp";
INSERT INTO "UserIndustry" ("UserId", "Industry") SELECT "Id", "Industry" FROM "Temp";
INSERT INTO "UserCompanyInfo" ("UserId", "Size") SELECT "Id", "Size" FROM "Temp";

-- delete the temporary table
DROP TABLE "Temp";
