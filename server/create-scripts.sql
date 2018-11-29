-- temporary table just to get contents of the .csv file
CREATE TABLE "Temp" (
  "Id"  serial  UNIQUE,
  "IpAddress"  varchar,
  "City"  varchar,
  "Industry"  varchar,
  "Size"  varchar,
  CONSTRAINT Temp_pk PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserIpAddress" (
  "Id"  serial  UNIQUE,
  "IpAddress"  varchar,
  CONSTRAINT User_pk PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserLocation" (
  "UserId"  integer,
  "City"  varchar
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserIndustry" (
  "UserId"  integer,
  "Industry"  varchar
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserCompanyInfo" (
  "UserId"  integer,
  "Size"  varchar
) WITH (
  OIDS=FALSE
);

-- foreign keys for "UserLocation", "UserIndustry", and "UserCompanyInfo"
ALTER TABLE "UserLocation" ADD CONSTRAINT "UserLocation_fk0" FOREIGN KEY ("UserId") REFERENCES "UserIpAddress"("Id");
ALTER TABLE "UserIndustry" ADD CONSTRAINT "UserIndustry_fk0" FOREIGN KEY ("UserId") REFERENCES "UserIpAddress"("Id");
ALTER TABLE "UserCompanyInfo" ADD CONSTRAINT "UserCompanyInfo_fk0" FOREIGN KEY ("UserId") REFERENCES "UserIpAddress"("Id");
