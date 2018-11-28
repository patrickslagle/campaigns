postgres://nyuzgibb:dgptSbjP7otVsSfbIdD-g3bp06z0VJIo@baasu.db.elephantsql.com:5432/nyuzgibb

CREATE TABLE "User" (
  "id"  serial  UNIQUE,
  "IpAddress"  varchar,
  CONSTRAINT User_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserGeo" (
  "City"  varchar,
  "UserId"  integer
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserIndustry" (
  "Industry"  varchar,
  "UserId"  integer
) WITH (
  OIDS=FALSE
);

CREATE TABLE "UserCompanySize" (
  "Size"  varchar,
  "UserId"  integer
) WITH (
  OIDS=FALSE
);


ALTER TABLE "UserGeo" ADD CONSTRAINT "UserGeo_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("id");

ALTER TABLE "UserIndustry" ADD CONSTRAINT "UserIndustry_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("id");

ALTER TABLE "UserCompanySize" ADD CONSTRAINT "UserCompanySize_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("id");
