create table houses(
  id serial primary key,
  name varcahr(30),
  address varcahr (100),
  city varchar (30),
  state varchar (2),
  zip int,
  img text,
  mortgage decimal,
  rent decimal
)